<script setup lang="ts">
import LoginButton from './buttons/LoginButton.vue'
const user = useCurrentUser()
</script>

<template>
  <div px-4 py-4 border-b-1 border-stone-600>
    <div max-w-7xl mx-auto flex items-center justify-between>
      <div flex items-center gap="1.5">
        <div h-8 w-8 text-green-600 i-pixelarticons-book-open />
        <div text-xl font-bold>
          Buku
        </div>
      </div>

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
