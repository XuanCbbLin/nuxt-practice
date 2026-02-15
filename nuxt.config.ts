// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P',
    testEnv: '',
    googleClientSecret: import.meta.env.NUXT_GOOGLE_CLIENT_SECRET,
    public: {
      apiBase: '/api',
      googleClientId: import.meta.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
      googleRedirectUri: import.meta.env.NUXT_PUBLIC_GOOGLE_REDIRECT_URI,
    },
  },
})
