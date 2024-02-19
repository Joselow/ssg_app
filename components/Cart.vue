<script setup lang="ts" >
// const { cart , clearCart } = useCart() 
const { cart: cartValue , clearCart } = useCart() 
const cart = toRef(()=>cartValue.value)
const showCart = ref(false)
</script>

<template>
  <section class="Cart static  	">
    <button class="absolute top-0 right-1 rounded-full	 py-1 px-3 bg-lime-600" 
      @click="showCart = !showCart"  
    >
    <span>{{ cart.length ? '😀' : '😠' }}</span>
      Cart <sup>+ {{ cart.length ? cart.length : '' }}</sup>
    </button>
    <div class=" bg-slate-700 rounded-md p-3 absolute top-9 right-1 w-64 h-auto" 
      v-show="showCart">
      <ul class="flex flex-col gap-2">
        <li class="text-end cursor-pointer"
          v-show="cart.length"
        >
        <span
        class=" hover:text-red-500 "
          @click="clearCart"
        >
          Delete
        </span>
      </li>
        <li class="text-center"
          v-show="!cart.length">
          no products yet
        </li>
        <li v-for="item in cart" :key="item.id" class="flex gap-1  justify-around border p-3 rounded-lg border-black">
          <div class="flex items-center">
            <img :src="item.image" alt="" class="w-12 h-12 rounded-full mx-auto">
          </div>
          <div >
            <div class="flex justify-around">
              <span>S/ {{ item.price }}</span>
              <span>Cant. {{ item.quantity }}</span>
            </div>
            <div >
              {{ item.title.length > 20 ? item.title.slice(0, 20) + '...' : item.title }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
