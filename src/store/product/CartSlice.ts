import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

import { type ICart, type ICartState, type ISneakers } from "./interface"
import { getUpdatedCart } from "@/helpers/libs/getUpdatedCart"
import { recalculatePrice } from "@/helpers/libs/recalculatePrice"
import {
  manageLocalStorage,
  StorageActionEnum
} from "@/store/utils/manageLocalStorage"

const initialState: ICartState = {
  cart: {
    subTotal: 0,
    tax: 100,
    shipping: 150,
    total: 0
  },
  cartItems: [],
  isLoading: false,
  checkout: 0,
  cartIsVisible: false
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductItem (state, action: PayloadAction<ISneakers>) {
      const productElement = state.cartItems.find(
        (item) => item.name === action.payload.name
      )

      if (productElement) return

      state.cartItems.push(action.payload)
      state.cart.subTotal += action.payload.totalPrice
      state.cart.total = getUpdatedCart(state.cart)

      manageLocalStorage(state, ["cart", "cartItems"], StorageActionEnum.SET)
    },
    incrementProductItem (state, action: PayloadAction<number>) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      )

      if (index < 0) return

      state.cartItems[index].counter += 1
      state.cart.subTotal += state.cartItems[index].basePrice
      state.cartItems[index].totalPrice += state.cartItems[index].basePrice
      state.cart.total = getUpdatedCart(state.cart)

      manageLocalStorage(state, ["cart", "cartItems"], StorageActionEnum.SET)
    },

    decrementProductItem (state, action: PayloadAction<number>) {
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload
      )

      if (productIndex < 0) return

      if (state.cartItems[productIndex].counter === 1) {
        recalculatePrice(state.cart, state.cartItems, productIndex)

        state.cartItems = state.cartItems.filter(
          (_, index) => index !== productIndex
        )

        manageLocalStorage(state, ["cart", "cartItems"], StorageActionEnum.SET)

        return
      }

      state.cartItems[productIndex].counter -= 1
      recalculatePrice(state.cart, state.cartItems, productIndex)
      manageLocalStorage(state, ["cart", "cartItems"], StorageActionEnum.SET)
    },
    deleteProductItem (state, action: PayloadAction<number>) {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload
      )
      if (index < 0) return

      state.cart.subTotal -= state.cartItems[index].totalPrice
      state.cart.total = getUpdatedCart(state.cart)
      state.cartItems[index].totalPrice = state.cartItems[index].basePrice
      state.cartItems = state.cartItems.filter(
        (e) => e.id !== state.cartItems[index].id
      )

      manageLocalStorage(state, ["cart", "cartItems"], StorageActionEnum.SET)
    },
    checkout (state, action: PayloadAction<number>) {
      state.cart.subTotal = 0
      state.cart.total = 0
      state.cartItems = []

      state.checkout = action.payload

      manageLocalStorage(
        state,
        ["cart", "cartItems"],
        StorageActionEnum.REMOVE
      )
    },
    invertCartVisible (state, action: PayloadAction<boolean>) {
      state.cartIsVisible = action.payload
    },

    getProductsFromLocalStorage (state) {
      const products: ISneakers[] = JSON.parse(
        localStorage.getItem("cartItems") as string
      )

      const cart: ICart = JSON.parse(localStorage.getItem("cart") as string)

      if (!products && !cart) return

      state.cartItems.push(...products)
      state.cart = cart
    }
  }
})

const cartReducer = cartSlice.reducer

export const { addProductItem } = cartSlice.actions
export const { incrementProductItem } = cartSlice.actions
export const { decrementProductItem } = cartSlice.actions
export const { deleteProductItem } = cartSlice.actions
export const { checkout } = cartSlice.actions
export const { invertCartVisible } = cartSlice.actions
export const { getProductsFromLocalStorage } = cartSlice.actions

export { cartReducer }
