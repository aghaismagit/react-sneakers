import { type ICartState } from "@/store/product/interface"

export type StateWithKeys = Pick<ICartState, "cart" | "cartItems">

export enum StorageActionEnum {
  SET = "setItem",
  REMOVE = "removeItem",
}

export const manageLocalStorage = (
  state: ICartState,
  arrayWithKeys: Array<keyof StateWithKeys>,
  action: StorageActionEnum
) => {
  switch (action) {
    case StorageActionEnum.SET:
      arrayWithKeys.forEach((key) => {
        localStorage.setItem(key, JSON.stringify(state[key]))
      })
      break
    case StorageActionEnum.REMOVE:
      arrayWithKeys.forEach((key) => {
        localStorage.removeItem(key)
      })
      break
    default:
      break
  }
}
