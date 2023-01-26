import destr from 'destr'
import type { VueFireNuxtModuleOptions } from 'nuxt-vuefire'
import type { BuildInfo } from './types'

// eslint-disable-next-line no-console
console.log(destr(process.env.FIREBASE_SERVICE_ACCOUNT))

export default defineNuxtConfig({
  // @ts-expect-error patched nuxt-vuefire
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '~/modules/build-env',
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
          serviceAccount: destr(process.env.FIREBASE_SERVICE_ACCOUNT),
        },
      } as VueFireNuxtModuleOptions],
  ],
  runtimeConfig: {
    public: {
      env: '',
      buildInfo: {} as BuildInfo,
    },
  },
  experimental: {
    inlineSSRStyles: true,
    reactivityTransform: true,
  },
  nitro: {
    prerender: {
      routes: ['/'],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
  ],
  colorMode: {
    classSuffix: '',
  },
})
