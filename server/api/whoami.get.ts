import { createVerifier } from 'fast-jwt'

const runtimeConfig = useRuntimeConfig()

export default defineEventHandler((event) => {
  const jsonWebToken = getCookie(event, 'access_token')
  try {
    if (!jsonWebToken) {
      throw new Error('沒有攜帶access_token')
    }

    const verifySync = createVerifier({
      key: runtimeConfig.jwtSignSecret,
    })

    const jsonWebTokenPayload = verifySync(jsonWebToken)
    return {
      id: jsonWebTokenPayload.id,
      nickname: jsonWebTokenPayload.nickname,
      email: jsonWebTokenPayload.email,
    }
  } catch (error) {
    console.error(error)
    throw createError({
      statusCode: 401,
      statusMessage: '未經授權的錯誤',
    })
  }
})
