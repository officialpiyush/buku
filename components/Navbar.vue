<script setup lang="ts">
import LoginButton from './buttons/LoginButton.vue'
const user = useCurrentUser()
</script>

<template>
  <div class="flex flex-col gap-2">
    <div py-2 px-4 bg-red-800 bg-opacity-30>
      <div max-w-7xl mx-auto w-full>
        There wont be active development on the project, it has been paused until the underlying libraries mature
        -
        <NuxtLink text-red-400 underline underline-wavy hover:underline-double to="https://github.com/officialpiyush/buku#readme" target="_blank">
          README
        </NuxtLink>
      </div>
    </div>
    <div px-4 py-4 border-b-1 border-stone-600>
      <div max-w-7xl mx-auto flex items-center justify-between>
        <NuxtLink to="/" h-full flex items-center gap="2">
          <div h-10 w-10 text-green-600 i-pixelarticons-book-open />
          <div text-2xl font-bold>
            Buku
          </div>
        </NuxtLink>

        <div>
          <LoginButton v-if="!user" />
          <div v-else gap-2 flex>
            <ButtonsContinueToApp />
            <ButtonsAvatarLogout />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
