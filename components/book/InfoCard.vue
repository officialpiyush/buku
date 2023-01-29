<script setup lang="ts">
defineProps<{
  number: number
}>()
</script>

<template>
  <div text="xs" rounded border-2 border-zinc-700 px-4 py-4 flex="~ col" justify="between" gap-4>
    <div flex="~ col" gap-4>
      <div>
        <img mx-auto object-cover src="https://covers.openlibrary.org/b/id/8512794-M.jpg" alt="">
      </div>
      <div class="space-y-1">
        <div text-zinc-400>
          <span>Mario Casciaro</span>
          <span>, </span>
          <span>Luciano Mammino</span>
        </div>
        <span class="block">Node.js Design Patterns - Second Edition: {{
          $props.number % 2 === 0 ? `Master best
                            practices to build modular and scalable server- side web applications` : ""
        }}</span>
      </div>
    </div>

    <div px-4 grid="~ md:cols-1 lg:cols-2" gap-2>
      <BookOpenButton />
      <BookLibraryButton />
    </div>
  </div>
</template>

<style scoped>

</style>
