export default defineNuxtRouteMiddleware(async (to, _) => {
  // eslint-disable-next-line no-console
  console.log('inside middleware')

  const user = await getCurrentUser()

  // eslint-disable-next-line no-console
  console.log('to', to)

  if (!user) {
    return navigateTo({
      path: '/auth',
      query: {
        redirect: to.fullPath,
      },
    })
  }
})
