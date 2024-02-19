import type ProductI from "~/interfaces/Product"

export const getProducts = async () => {
  return (await $fetch('https://fakestoreapi.com/products')) as ProductI[]
}