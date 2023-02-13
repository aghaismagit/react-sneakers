// Libs
import { type FC } from "react"

// Components
import { CartItem } from "@/components/Cart/CartItem/CartItem"
import { Button } from "@/components/UI/Button"
import { ReactComponent as CloseIcon } from "@/assets/img/icons/cross-icon.svg"

// Store
import { checkout, invertCartVisible } from "@/store/product/CartSlice"

// Hooks
import { useAppSelector, useAppDispatch } from "@/store/hooks/redux"

// Styles
import styles from "./CartList.module.scss"
import { AppearanceEnum } from "@/components/UI/Button/intreface"

export const CartList: FC = () => {
  const {
    cartItems,
    cartIsVisible,
    cart: { shipping, subTotal, tax, total }
  } = useAppSelector((state) => state.cartReducer)
  const dispatch = useAppDispatch()

  const checkoutHandler = (total: number): void => {
    dispatch(checkout(total))
  }

  const invertVisibleHandler = (cartIsVisible: boolean): void => {
    dispatch(invertCartVisible(!cartIsVisible))
  }

  const isEmptyTotal = total === 0

  return (
    <section className={cartIsVisible ? styles.active : styles.cart}>
      <div className={styles.wrapper}>
        <div className={styles.cart_header}>
          <Button
            type="button"
            appearance={AppearanceEnum.CLEAR}
            className={styles.cart_close_button}
            onClick={() => {
              invertVisibleHandler(cartIsVisible)
            }}
          >
            <CloseIcon />
          </Button>
        </div>
        <h2 className={styles.section_name}>My Basket</h2>
        <div className={styles.cart_items}>
          {cartItems?.map((item) => (
            <CartItem key={item.id} sneakers={item} />
          ))}
        </div>

        {isEmptyTotal && (
          <>
            <h2 className={styles.alternative_text}>
              No one product in the cart
            </h2>
            <h3 className={styles.alternative_text}>Add product to cart</h3>
          </>
        )}

        {!isEmptyTotal && (
          <>
            <div className={styles.cart_price}>
              <div className={styles.price_elements}>
                <p>Subtotal:</p>
                <span>$ {subTotal}</span>
              </div>
              <div className={styles.price_elements}>
                <p>Tax:</p>
                <span>$ {tax}</span>
              </div>
              <div className={styles.price_elements}>
                <p>Shipping:</p>
                <span>$ {shipping}</span>
              </div>
              <div className={styles.price_elements}>
                <p className={styles.total_price}>Total:</p>
                <span className={styles.total_price}>$ {total}</span>
              </div>
            </div>
            <Button
              onClick={() => {
                checkoutHandler(total)
              }}
              className={styles.checkout_button}
            >
              Checkout
            </Button>
          </>
        )}
      </div>
    </section>
  )
}
