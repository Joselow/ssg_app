export default defineNuxtRouteMiddleware((to, from) => {
  const isAdmin = true
  
  const goToBack = () =>  navigateTo(from.fullPath)
  if (!isAdmin) goToBack()
})