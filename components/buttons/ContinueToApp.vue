<script setup lang="ts">
import { signOut as firebaseSignOut } from 'firebase/auth'
const auth = useFirebaseAuth()!
const user = useCurrentUser()
const { currentRoute } = useRouter()

const userName = computed(() => user.value?.displayName?.split(' ')[0] ?? 'User')

const signOut = () => firebaseSignOut(auth)
</script>

<template>
  <NuxtLink
    v-if="currentRoute.path !== '/app'"
    to="/app" class="text-xs" flex items-center gap-2 px-4 py-2 bg-green-600 bg-opacity-20 text-green-600
    hover="bg-opacity-22" rounded
  >
    <div h-5 w-5 text-green-600 i-pixelarticons-book-open />
    <span>Continue to App</span>
    <div h-5 w-5 i-ri-arrow-drop-right-line />
  </NuxtLink>
</template>

<style scoped>

</style>
