// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  runtimeConfig: {
    api:'localhost'
  },
  routeRules: {
    '/': {
      prerender: true
    },
    '/about': {
      prerender: true
    },
  }
})
