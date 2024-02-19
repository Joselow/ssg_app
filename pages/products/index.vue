<script setup>

const title = ref('Products')
const description = ref('My amazing site. uwuwu')

useHead({
  title,
  meta: [
    { name: 'description', content: description }
  ],
  bodyAttrs: {
    class: 'test'
  },
  // script: [ { innerHTML: 'console.log(\'Estas hackeado wn sjsj\')' } ]
})

useSeoMeta({
  // title: () => 'My Amazing Site'+ title.value,
  ogTitle: 'My Amazing Site',
  // description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})


// import type ProductI from "../../interfaces/Product"

// const products = ref<ProductI[]>([])

// const getProducts = async () => {
//   const response = await fetch('https://fakestoreapi.com/products')
//   const data = (await response.json()) as ProductI[]
//   products.value = data  
// }

const { getProductss } = useProduct() 
const { data, pending, error, status, refresh } = await getProductss()

useNuxtApp().hook('vue:error', (error, instance, info) => {
    // creo que esto es solo del server eh???
    console.log('---------------------- Error', error.message);
  })



// getProducts()

// throw createError({
//     statusCode: 404,
//     statusMessage: 'Page Not Found aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
// fatal: true
//   })

const { addToCart } = useCart()


</script>

<template>

  <!-- meta data -->
  <Head>
    <!-- <Title> My app | {{ title  }} </Title> -->
  </Head>
  {{ status }} <button @click="refresh">new fetch</button>

  <div class="m-6">
    <h1>{{ title }} <button @click="title = 'owo'">change title to owo</button></h1>
  </div>
  
  <div v-show="pending">
    Loading ...
  </div>
  <div v-show="!pending">
    <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">  
      <li v-for="item in data.products"
      >    
        <NoipProductList :product="item">
          <template  #link-detail>
            <div>
              <NuxtLink :to="`/products/${item.id}`">
                ➡️
              </NuxtLink>
            </div>
          </template>
        </NoipProductList>
        <div class="flex justify-center">
          <button 
            @click="addToCart({product: item})"
          >➕ Add</button>
        </div>
      </li>
    </ul>
  </div>
</template>