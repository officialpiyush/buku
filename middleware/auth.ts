// ref: vuefire docs
export default defineNuxtRouteMiddleware(async (to, _) => {
  const user = await getCurrentUser()

  if (!user) {
    return navigateTo({
      path: '/auth',
      query: {
        redirect: to.fullPath,
      },
    })
  }
})
