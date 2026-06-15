// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
modules: [
  '@pinia/nuxt',
],
runtimeConfig: {
  public: {
    apiBase: 'http://localhost:3001/api',
  },
},
  compatibilityDate: '2025-07-15',
})
