// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  css: ['~/assets/styles/global.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/styles/_variables.scss" as *;
            @use "~/assets/styles/_mixins.scss" as *;`,
          api: 'modern-compiler'
        }
      }
    }
  }
})
