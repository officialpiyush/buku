<script setup lang="ts">
import LoginButton from './buttons/LoginButton.vue'
const user = useCurrentUser()
</script>

<template>
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
</template>

<style scoped>

</style>
