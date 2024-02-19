<script setup lang="ts">
</script>

<template>  

  <div class="m-4">   
    <nav>
      <ul class="flex gap-3 justify-center">
        <li class="cursor-pointer hover:text-blue-600"><NuxtLink to="/">Index</NuxtLink>  </li>
        <li><NuxtLink to="/about">About</NuxtLink>  </li>
        <li><NuxtLink to="/services">Services</NuxtLink>  </li>
        <li><NuxtLink to="/products">Products</NuxtLink>  </li>          
        <li><NuxtLink to="/projects">Projects</NuxtLink>  </li>          
      </ul>
    </nav>  
    <Cart></Cart>  
  </div>
</template>

