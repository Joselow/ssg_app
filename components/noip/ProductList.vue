<script setup lang="ts">
import type ProductI from '~/interfaces/Product';

const props = withDefaults(defineProps<{ product: ProductI }>(), {
  product: () => ({
    id: 1,
    title: 'dasads', 
    price: 4654654,
    category: 'das',
    description: 'string',
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    rate: 54,
    count: 54
  })
})

const { title, image, price } = props.product

// const slots = defineSlots<{
//   default(props: { msg: string }): any
// }>()
// console.log(slots.default);

const slots = useSlots()
let showLinkDetailSlot: boolean

if (slots['link-detail']) showLinkDetailSlot = true


</script>

<template>
  {{ $slots['link-detail'] ? 'slot de link' :'no slor de link'}}
  <div class="bg-white p-6 text-black rounded-md " >  
    <div class="flex justify-end">
      <slot name="link-detail">
        <div v-if="showLinkDetailSlot">
          ➡️
        </div>
      </slot>  
    </div>
      <img :src="image" alt="" class="w-32 mx-auto">
      <span class="font-bold">S/ {{ price }}</span>

      <div class="flex justify-between gap-2 mt-6">
        <span>
          {{ title }}
        </span>
      </div>
    </div>
</template>
