import { type FC } from "react"
import { StoreList } from "@/components/Store/StoreList/StoreList"
import { CartList } from "@/components/Cart/CartList/CartList"
import styles from "./MainPage.module.scss"
import { sneakersAPI } from "@/store/product/sneakersAPI"
import { Loader } from "@/components/UI/Loader/Loader"

export const MainPage: FC = () => {
  const {
    data: sneakers,
    isLoading,
    error
  } = sneakersAPI.useFetchAllsneakersQuery()
  return (
    <main className={styles.main}>
      {isLoading && <Loader />}
      {error != null && <h1>An error occurred while loading</h1>}
      {sneakers && <>
        <StoreList />
        <CartList />
      </>}
    </main>
  )
}
