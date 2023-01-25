<script setup lang="ts">
const { commit, time } = useRuntimeConfig().public.buildInfo

const commitUrl = computed(() => `https://github.com/officialpiyush/buku/commit/${commit}`)

const timeAgo = useTimeAgo(time)
</script>

<template>
  <div flex flex-col="~ reverse" gap-1>
    <div flex items-ceter justify-center gap-2 text="xs gray-400/90">
      Built
      <span>{{ timeAgo }}</span>
      |
      <NuxtLink underline="~ unset" flex gap-1 :to="commitUrl" target="_blank">
        {{ commit }}
      </NuxtLink>
      <div h-4 w-4 i-ri-git-branch-line />
    </div>
    <div flex items-center justify-center gap-2>
      <span>With</span>
      <div h-4 w-4 text-red-600 i-icomoon-free-heart />
      <span>by</span>
      <NuxtLink to="https://pycz.dev" target="_blank" hover:(underline underline-wavy) text-green-600>
        Piyush
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>

</style>
