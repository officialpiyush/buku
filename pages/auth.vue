<script setup lang="ts">
const router = useRouter()
const { query } = useRoute()
const user = useCurrentUser()

watch(user, (user) => {
  if (user && query.redirect)
    router.push(query.redirect as string)
})
</script>

<template>
  <div px-8>
    <div v-if="!user" flex flex-col gap-4>
      <span class="text-center">You need to be logged in to access the page</span>
      <ButtonsLoginButton />
    </div>

    <div v-else flex flex-col gap-4>
      <span class="text-center">You are logged in as {{ user.displayName }}</span>
      <ButtonsLogout />
    </div>
  </div>
</template>

<style scoped>

</style>
