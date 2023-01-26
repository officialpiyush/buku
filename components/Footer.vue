<script setup lang="ts">
defineProps({
  break: {
    type: Boolean,
    default: false,
  },
})

const { commit, time } = useRuntimeConfig().public.buildInfo

const commitUrl = computed(() => `https://github.com/officialpiyush/buku/commit/${commit}`)

const timeAgo = useTimeAgo(time)
</script>

<template>
  <div flex flex-col="~ reverse" gap-1>
    <div :class="{ 'flex-col items-center lg:items-end': $props.break }" flex items-ceter justify-center gap-2 text="xs gray-400/90">
      <div class="flex gap-1">
        <span>Built</span>
        <span>{{ timeAgo }}</span>
        <span v-if="!$props.break">|</span>
      </div>
      <NuxtLink hover:text-green-700 underline="~ unset" flex gap="0.5" :to="commitUrl" target="_blank">
        <div h-4 w-4 i-ri-git-branch-line />
        {{ commit.slice(0, 8) }}
      </NuxtLink>
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
