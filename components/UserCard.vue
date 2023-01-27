<script setup>
const user = useCurrentUser()
</script>

<template>
  <div text-xs w-full py-8 px-4 rounded border-2 border-zinc-700 flex="~ col" gap-4 items-center>
    <div>
      <img rounded-full h-24 w-24 :src="user.photoURL" alt="dp">
    </div>
    <div flex="~ col wrap" gap-1 text-center>
      <div>{{ user.displayName }} </div>
      <!-- TODO: add email -->
    </div>

    <div>
      <ButtonsLogout />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
