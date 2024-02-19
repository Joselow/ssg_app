<script setup lang="ts">
const products = ref([])

definePageMeta({
  middleware: 'for-projects',
})

</script>

<template>
  <NuxtLayout name="project"></NuxtLayout>
</template>

<style scoped>

</style>