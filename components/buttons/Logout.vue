<script setup lang="ts">
import { signOut as firebaseSignOut } from 'firebase/auth'
const auth = useFirebaseAuth()!
const router = useRouter()

const signOut = async () => {
  await firebaseSignOut(auth)
  await router.push('/')
}
</script>

<template>
  <button
    flex items-center justify-center gap-1 px-8 py-2 bg-red-600 bg-opacity-20 text-red-600 hover="bg-opacity-22"
    rounded @click="signOut"
  >
    <div h-4 w-4 i-ri-google-fill />
    <span>Logout</span>
  </button>
</template>

<style scoped>

</style>
