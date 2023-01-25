<script setup lang="ts">
const user = useCurrentUser()
</script>

<template>
  <div>
    <div v-if="!user" flex flex-col gap-4>
      You need to be logged in to access the page
      <ButtonsLoginButton />
    </div>

    <div v-else flex flex-col gap-4>
      You are logged in as {{ user.displayName }}
      <ButtonsLogout />
    </div>
  </div>
</template>

<style scoped>

</style>
