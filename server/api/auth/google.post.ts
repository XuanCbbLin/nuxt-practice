import { OAuth2Client } from 'google-auth-library'

const runtimeConfig = useRuntimeConfig()
const oauth2Client = new OAuth2Client({
  clientId: runtimeConfig.public.googleClientId,
  clientSecret: runtimeConfig.googleClientSecret,
  redirectUri: runtimeConfig.public.googleRedirectUri,
})

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { tokens } = await oauth2Client.getToken(body.authCode)
  oauth2Client.setCredentials({ access_token: tokens.access_token })

  const userInfo = await oauth2Client
    .request({
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

  return userInfo
})
