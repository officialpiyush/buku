import { defineNuxtModule } from '@nuxt/kit'
import { getEnv, version } from '../config/env'
import type { BuildInfo } from '~/types'

export default defineNuxtModule({
  meta: {
    name: 'buku:build-env',
  },
  async setup(_options, nuxt) {
    const { env, commit, branch } = await getEnv()
    const buildInfo: BuildInfo = {
      version,
      time: +Date.now(),
      commit,
      branch,
      env,
    }

    nuxt.options.runtimeConfig.public.env = env
    nuxt.options.runtimeConfig.public.buildInfo = buildInfo
  },
})
