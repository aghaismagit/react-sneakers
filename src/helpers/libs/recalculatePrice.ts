import { getUpdatedCart } from "@/helpers/libs/getUpdatedCart"
import { type ICartState } from "@/store/product/interface"

export const recalculatePrice = (
  cart: ICartState["cart"],
  cartItems: ICartState["cartItems"],
  productIndex: number
): void => {
  cart.subTotal -= cartItems[productIndex].basePrice
  cartItems[productIndex].totalPrice -= cartItems[productIndex].basePrice
  cart.total = getUpdatedCart(cart)
}
