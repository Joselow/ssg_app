<script setup >
useHead({
  // titleTemplate: (titleChunk) => {
  //   return titleChunk ? `${titleChunk} | My app` : 'My app';
  // }
  titleTemplate: '%s - My app'
})
// const nuxtApp = useNuxtApp()


// nuxtApp.hook('vue:error', (error, instance, info) => {
//     // handle error, e.g. report to a service
//     console.log('aaaaaaaaaaaaaaaaaaa');
//   })



</script>
<template>
  <NuxtLoadingIndicator />
  <!-- You use the default slot to render your content -->
  <NuxtLayout>  
    <NuxtPage></NuxtPage>
  </NuxtLayout>
</template>

<style>
/* No me sirve owo */

</style>