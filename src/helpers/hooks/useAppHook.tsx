import { useEffect } from "react"
import { getProductsFromLocalStorage } from "@/store/product/CartSlice"
import { useAppDispatch } from "@/store/hooks/redux"

export const useAppHook = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(getProductsFromLocalStorage())
  }, [])
}
