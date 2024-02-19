<script setup lang="ts">
const aea = ref([1, 2, 3])

</script>

<template>
  <h1 class="font-bold text-4xl">Projects</h1>
  <button @click="aea.push( aea[aea.length-1]+1 )">plus</button>

  <main >
    <ul>
      <li v-for="item in aea" :key="item"> 
        <NuxtLink :to="`/projects/${item}`">Project {{item}}</NuxtLink>
      </li>       
    </ul>
  </main>
</template>

<style scoped>

</style>