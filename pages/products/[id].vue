<script setup >
const { data } = useNuxtData('products')
const route = useRoute()
const { id } = route.params

const product = ref([])

if (data.value) {
  product.value = data.value.products?.find(el => Number(el.id) === Number(id))
} 
else {
  const { data: productValue } = await useFetch(`https://fakestoreapi.com/products/${id}`, {
    lazy: true,
    key: `product-${id}`,
  })
  product.value = productValue.value
}

// const {data: product} = useLazyFetch(`https://fakestoreapi.com/products/${id}`, {
//   key: `product-${id}`,
//   default() { return products.value?.find(el => Number(el.id) === Number(id))}, -- esto mientras hace el fetch
// })



useSeoMeta({
  title: 'Product -'+ product?.value?.title
})

useHead({
  script: [
    {
      src: 'https://third-party-script.com',
      //las opciones válidas son: 'head' | 'cuerpoCerrar' | 'cuerpoAbierto'
      tagPosition: 'bodyClose'
    }
  ],
  link: [
    {
      rel: 'stylesheet',
      href: 'styles.css',
      tagPosition: 'head'
    }
  ]
})


</script>

<template>
  <h1>XDDD</h1>
  <!-- <NoipProductList/> -->

  <div v-if="product?.id" >
    <span >
      {{ product.category }}
    </span>
    <div class="m-6">
      <NoipProductList
        :product="(product)"
      ></NoipProductList>
    </div>
    {{ product.description }}
  </div>

</template>

<style scoped>

</style>