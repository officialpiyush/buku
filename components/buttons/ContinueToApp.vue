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
    to="/app" flex items-center gap-1 px-8 py-1 bg-green-600 bg-opacity-20 text-green-600
    hover="bg-opacity-22" rounded
  >
    <div h-4 w-4 text-green-600 i-pixelarticons-book-open />
    <span>Continue to App</span>
    <div h-4 w-4 i-ri-arrow-drop-right-line />
  </NuxtLink>
</template>

<style scoped>

</style>
