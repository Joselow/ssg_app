import type ProductI from "~/interfaces/Product";

export function useCart () {
  const cart = useState<ProductI[]>('cart', () => [])

  const addToCart = ({product}: { product: ProductI}) => {    
    const productFound = cart.value.find(({ id }) => id === product.id)
    
    if (productFound) {
      productFound.quantity += 1
      return
    }
    
    cart.value.push({ ...product, quantity: 1})
  }

  const clearCart = () => {
    cart.value = []    
  }

  return {
    cart, addToCart, clearCart
  }

}