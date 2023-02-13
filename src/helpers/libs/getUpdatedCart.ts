import { type ICartState } from "@/store/product/interface"

export const getUpdatedCart = (cart: ICartState["cart"]): number => {
  if (!cart.subTotal) return 0

  return cart.subTotal + cart.shipping + cart.tax
}
