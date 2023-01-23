<script setup lang="ts">
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
const auth = useFirebaseAuth()!

const signIn = async () => {
  const provider = new GoogleAuthProvider()
  await signInWithPopup(auth, provider)
}
</script>

<template>
  <button flex items-center gap-1 px-8 py-1 bg-green-600 bg-opacity-20 text-green-600 hover="bg-opacity-22" rounded @click="signIn">
    <div h-4 w-4 i-ri-google-fill />
    <span>Login</span>
  </button>
</template>

<style scoped>

</style>
