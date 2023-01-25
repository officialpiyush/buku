<script setup lang="ts">
import { signOut as firebaseSignOut } from 'firebase/auth'
const auth = useFirebaseAuth()!
const user = useCurrentUser()

const userName = computed(() => user.value?.displayName?.split(' ')[0] ?? 'User')

const signOut = () => firebaseSignOut(auth)

function useKittenImage(imageErrorEvent: Event) {
  (imageErrorEvent.target as HTMLImageElement).src = 'https://placekitten.com/96/140'
}
</script>

<template>
  <button rounded-full @click="signOut">
    <img h-8 w-8 rounded-full :src="user?.photoURL || 'https://placekitten.com/96/140'" alt="dp" @error="useKittenImage">
  </button>
</template>

<style scoped>

</style>
