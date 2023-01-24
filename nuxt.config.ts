import type { VueFireNuxtModuleOptions } from 'nuxt-vuefire'
import destr from 'destr'

export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    [
      'nuxt-vuefire',
      {
        auth: true,
        config: {
          apiKey: 'AIzaSyBjHeKo26xCG1B2UG03pZQYp9sIz9pP7Uk',
          authDomain: 'buku-v2.firebaseapp.com',
          projectId: 'buku-v2',
          storageBucket: 'buku-v2.appspot.com',
          messagingSenderId: '630053346756',
          appId: '1:630053346756:web:8e630c742a612a4f5a5891',
          measurementId: 'G-LCCND887N7',
        },
        admin: {
          config: destr(process.env.FIREBASE_SERVICE_ACCOUNT as string),
        },
      } as VueFireNuxtModuleOptions,
    ],
  ],
  experimental: {
    inlineSSRStyles: true,
    reactivityTransform: true,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
})
