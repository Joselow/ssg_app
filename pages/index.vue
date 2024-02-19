<script setup lang="ts">
const appConfig = useAppConfig()

const theme = appConfig.theme.dark? '#111' : '#eee'
const colorTheme = ref(theme)
</script>

<template>
    <!-- <h1 > {{ appConfig.theme.dark ? 'Dark' : 'light' }}
      <button @click="colorTheme === '#111' ? colorTheme = '#eeee' :  colorTheme = '#111'">
        change Theme
      </button>
    </h1>   -->
  <div class="p-10 border border-red-300 rounded-md">
    <h1 class="red">Index</h1>
    <button>Hola wnsitos</button>
  </div>

  <NuxtLink to="/about">a</NuxtLink>
  <!-- <p :class="owo.red">This should be red</p>
    <p :class="owo.theme">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae iure dicta possimus rem commodi a repudiandae quas sunt similique sit dolores suscipit cum, necessitatibus nobis, corrupti, voluptas recusandae quisquam illum!</p> -->
</template>

<style module="owo">
</style>