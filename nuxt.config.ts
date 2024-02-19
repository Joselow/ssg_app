// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ['~/assets/styleOne.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    layoutTransition: { name: 'layout', mode: 'out-in' }
  },
  // routeRules: {
  //   '/products/**': { prerender: true },
  //   '/about': { prerender: 600 },
  //   '/': { prerender: true },
  //   '/services': { prerender: true },
  //   '/projects/**': { prerender: true },
  // }
  // ssr: false
})
