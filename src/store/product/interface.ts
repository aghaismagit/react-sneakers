export interface ISneakers {
  id: number
  name: string
  basePrice: number
  totalPrice: number
  imgUrl: string
  counter: number
}

export interface ICart {
  subTotal: number
  tax: number
  shipping: number
  total: number
}

export interface ICartState {
  cart: ICart
  cartItems: ISneakers[]
  isLoading: boolean
  checkout: number
  cartIsVisible: boolean
}
