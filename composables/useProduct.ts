import type ProductI from "~/interfaces/Product";
import { getProducts } from "~/services/apiProducts";

export function useProduct () {
  const nuxt = useNuxtApp()

  const getProductss = async () => {      // el tipado es de otro munto
    // { data, pending, error, status, refresh }
    // type awa = { products: ProductI [], fetchedAt: Date }
    const data = await useAsyncData('products', () => getProducts() ,
    {
      lazy: true,
      // key: 'products',
      transform(input) {
        return {
          products: [...input],
          fetchedAt: new Date()
        }
      },  
      getCachedData(key) { 
        // esto se ejecuta siempre y retorna lo que le dices, si  retornas null o undefined ahce el fetch
        // se ejecuta mas d euna vez no se porque sera eso
        const data = nuxt.payload.data[key] || nuxt.static.data[key]     

        if (!data) return 
        
        const miliseconds = 10 * 1000
        const timeToExpire = data.fetchedAt.getTime() + miliseconds
        const currentTime = new Date()

        if (timeToExpire <= currentTime)  return
        return data
      }
      // immediate: false,
      // server: false,
    }) 
    
    return data
  }
  return {
    getProductss
  }
}