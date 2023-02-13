import { useParams, useNavigate } from "react-router-dom"
import { useAppDispatch } from "@/store/hooks/redux"

import styles from "./DetailPage.module.scss"
import { sneakersAPI } from "@/store/product/sneakersAPI"
import { addProductItem } from "@/store/product/CartSlice"
import { Button } from "@/components/UI/Button"
import { RoutePath } from "@/shared/config/routeConfig/routeConfig"

import { ReactComponent as CartIcon } from "@/assets/img/icons/cart.svg"
import { type FC } from "react"
import { Loader } from "@/components/UI/Loader/Loader"
import { CartList } from "@/components/Cart/CartList/CartList"
import { type ISneakers } from "@/store/product/interface"

export const DetailPage: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const params = useParams<{ id: string }>()
  const {
    data: sneakersItem,
    isLoading,
    error
  } = sneakersAPI.useFetchSneakersPageQuery(params.id!)

  const addProductHandler = (sneakers: ISneakers): void => {
    dispatch(addProductItem(sneakers))
  }

  const returnHandler = (): void => {
    navigate(RoutePath.main)
  }

  return (
    <main className={styles.main}>
      <section className={styles.item_wrapper}>
        {isLoading && <Loader />}
        {error != null && <h1>An error occurred while loading</h1>}
        {sneakersItem != null && (
          <div>
            <Button
              onClick={returnHandler}
              type="button"
              className={styles.return_button}
            >
              Back in catalog
            </Button>
            <div>
              <img
                className={styles.main_image}
                src={sneakersItem.imgUrl}
                alt="Sneakers"
              />
            </div>
            <div className={styles.item_name}>
              <h2>{sneakersItem.name}</h2>
              <p>Item model number: MT91547</p>
            </div>
            <div className={styles.price_values}>
              <Button
                className={styles.addButton}
                onClick={() => {
                  addProductHandler(sneakersItem)
                }}
              >
                <CartIcon />
              </Button>
              <p className={styles.addButton}>$ {sneakersItem.basePrice}</p>
            </div>
          </div>
        )}
      </section>
      <CartList />
    </main>
  )
}
