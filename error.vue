<script setup >
const props = defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <h2>{{ error.statusCode }} - {{ error.message }} - {{ error.statusMessage }}</h2>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
