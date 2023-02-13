import styles from "./MainHeader.module.scss"
import { ReactComponent as Logo } from "@/assets/img/logo/Logo.svg"
import { ReactComponent as CartIcon } from "@/assets/img/icons/cart.svg"
import { Button } from "../Button"
import { AppearanceEnum } from "../Button/intreface"
import { useAppDispatch, useAppSelector } from "@/store/hooks/redux"
import { invertCartVisible } from "@/store/product/CartSlice"
import { type FC } from "react"
import { Burger } from "@/components/UI/Burger/Burger"

export const Header: FC = () => {
  const { cartItems, cartIsVisible } = useAppSelector(
    (state) => state.cartReducer
  )
  const counter = cartItems.length
  const invertVisibleHandler = (cartIsVisible: boolean): void => {
    dispatch(invertCartVisible(!cartIsVisible))
  }

  const dispatch = useAppDispatch()
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.buttons_wrapper}>
        <Button
          type="button"
          appearance={AppearanceEnum.CLEAR}
          className={styles.cart_button}
        >
          <CartIcon />
        </Button>
        <div className={styles.cart_counter}>{counter}</div>
        {!cartIsVisible && (
          <Burger onClick={() => { invertVisibleHandler(cartIsVisible) }} />
        )}
      </div>
    </header>
  )
}
