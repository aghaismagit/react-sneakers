import { type FC } from "react"
import { useNavigate } from "react-router-dom"
import styles from "./StoreCard.module.scss"
import { type IStoreItemProps } from "./interface"
import { Button } from "../../UI/Button"

import { ReactComponent as CartIcon } from "@/assets/img/icons/cart.svg"
import { useAppDispatch } from "@/store/hooks/redux"
import { AppRoutes } from "@/shared/config/routeConfig/routeConfig"
import { type ISneakers } from "@/store/product/interface"
import { addProductItem } from "@/store/product/CartSlice"

export const StoreItem: FC<IStoreItemProps> = ({ sneakers }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onClickProductImage = (sneakersId: number): void => {
    navigate(`${AppRoutes.DETAIL_PRODUCT}/${sneakersId}`)
  }

  const addProductHandler = (sneakers: ISneakers): void => {
    dispatch(addProductItem(sneakers))
  }

  return (
    <div className={styles.item_wrapper}>
      <img
        className={styles.item_image}
        src={sneakers.imgUrl}
        alt="Sneakers"
        onClick={() => {
          onClickProductImage(sneakers.id)
        }}
      />
      <p className={styles.item_name}>{sneakers.name}</p>
      <div className={styles.price_values}>
        <Button
          onClick={() => {
            addProductHandler(sneakers)
          }}
          className={styles.store_button}
        >
          <CartIcon />
        </Button>
        <p>${sneakers.basePrice}</p>
      </div>
    </div>
  )
}
