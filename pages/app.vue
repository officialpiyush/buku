<script setup lang="ts">
definePageMeta({
  layout: 'app',
  middleware: ['auth'],
})

const dummyArray = new Array(20).fill(0).map((_, i) => i)
</script>

<template>
  <div>
    <div relative flex="~ col" gap-4>
      <div sticky top-0 lrft-0 class="text-2xl font-bold" backdrop="~ blur-lg" py-2 px-2>
        Starred
      </div>
      <div grid="~ cols-1 sm:cols-2 lg:cols-4" gap-4>
        <BookInfoCard v-for="i in dummyArray" :key="i" :number="i" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
