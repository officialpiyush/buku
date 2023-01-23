<script setup lang="ts">
import { signOut as firebaseSignOut } from 'firebase/auth'
const auth = useFirebaseAuth()!
const user = useCurrentUser()

const userName = computed(() => user.value?.displayName?.split(' ')[0] ?? 'User')

const signOut = () => firebaseSignOut(auth)
</script>

<template>
  <button flex items-center gap-2 px-4 py-1 bg-red-600 bg-opacity-20 text-red-600 hover="bg-opacity-22" rounded @click="signOut">
    <div h-4 w-4 i-ri-logout-circle-line />
    <span>Logout,{{ userName }}</span>
  </button>
</template>

<style scoped>

</style>
