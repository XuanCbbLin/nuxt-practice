import { OAuth2Client } from 'google-auth-library'
import { createSigner } from 'fast-jwt'

const runtimeConfig = useRuntimeConfig()
const oauth2Client = new OAuth2Client({
  clientId: runtimeConfig.public.googleClientId,
  clientSecret: runtimeConfig.googleClientSecret,
  redirectUri: runtimeConfig.public.googleRedirectUri,
})

interface GoogleUserInfo {
  sub: string
  name: string
  given_name: string
  family_name: string
  picture: string
  email: string
  email_verified: boolean
}

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { tokens } = await oauth2Client.getToken(body.authCode)
  oauth2Client.setCredentials({ access_token: tokens.access_token })

  const userInfo = await oauth2Client
    .request<GoogleUserInfo>({
      url: 'https://www.googleapis.com/oauth2/v3/userinfo',
    })
    .then((response) => response.data)
    .catch(() => null)

  if (!userInfo) {
    throw createError({
      statusCode: 400,
      statusMessage: '無效的authCode',
    })
  }

  const jsonWebTokenPayload = {
    id: userInfo.sub,
    nickname: userInfo.name,
    email: userInfo.email,
  }

  const expirationTime = 7 * 24 * 60 * 60 * 1000

  const signSync = createSigner({
    key: runtimeConfig.jwtSignSecret,
    expiresIn: expirationTime * 1000,
  })

  const jsonWebToken = signSync(jsonWebTokenPayload)

  setCookie(event, 'access_token', jsonWebToken, {
    httpOnly: true,
    maxAge: expirationTime,
    expires: new Date(Date.now() + expirationTime),
    secure: process.env.NODE_ENV === 'production',
    path: '/',
  })

  return jsonWebTokenPayload
})
