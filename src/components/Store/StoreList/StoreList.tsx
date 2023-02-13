import { StoreItem } from '../StoreItem/StoreCard'
import styles from './StoreList.module.scss'
import { type FC } from 'react'
import { sneakersAPI } from "@/store/product/sneakersAPI"

export const StoreList: FC = () => {
  const {
    data: sneakers
  } = sneakersAPI.useFetchAllsneakersQuery()

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.h1}>Sneakers Store</h1>
      {(sneakers != null) &&
        sneakers.map((item) => <StoreItem key={item.id} sneakers={item} />)}
    </div>
  )
}
