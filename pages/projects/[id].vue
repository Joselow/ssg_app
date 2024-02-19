<script setup lang="ts">
const products = ref([])

definePageMeta({
  // middleware: 'for-projects',
  validate: async (route) => {
    // console.log(route);
    return /^\d+$/.test(route.params.id as string)
  }
})


const route = useRoute()
const { id } = route.params
const projectId = ref(id)

</script>

<template>
  <NuxtLayout name="project">
    <h1>Project number {{ projectId }}</h1>
  </NuxtLayout>
</template>

<style scoped>

</style>