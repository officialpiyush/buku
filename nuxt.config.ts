import type { VueFireNuxtModuleOptions } from 'nuxt-vuefire'
import { isCI } from 'std-env'
import type { BuildInfo } from './types'

let customConfig

if (isCI) {
  customConfig = {
    project_id: JSON.parse(process.env.FIREBASE_PROJECT_ID as string),
    private_key_id: JSON.parse(process.env.FIREBASE_PRIVATE_KEY_ID as string),
    private_key: JSON.parse(process.env.FIREBASE_PRIVATE_KEY as string),
    client_email: JSON.parse(process.env.FIREBASE_CLIENT_EMAIL as string),
  }
}
else {
  customConfig = {
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
  }
}

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
          serviceAccount: customConfig,
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
