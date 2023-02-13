import { type FC } from 'react'

import { Button } from '../../UI/Button'

import {
  decrementProductItem,
  deleteProductItem,
  incrementProductItem
} from '@/store/product/CartSlice'
import { useAppDispatch } from '@/store/hooks/redux'

import { type IStoreItemProps } from './interface'
import { AppearanceEnum } from '../../UI/Button/intreface'

import { ReactComponent as IncrementIcon } from '@/assets/img/icons/increment-icon.svg'
import { ReactComponent as DecrementIcon } from '@/assets/img/icons/decrement-icon.svg'
import { ReactComponent as CloseIcon } from '@/assets/img/icons/cross-icon.svg'

import styles from './CartItem.module.scss'

export const CartItem: FC<IStoreItemProps> = ({ sneakers }) => {
  const dispatch = useAppDispatch()

  const onIncrementHandler = (sinkersId: number): void => {
    dispatch(incrementProductItem(sinkersId))
  }

  const decrementHandler = (sinkersId: number): void => {
    dispatch(decrementProductItem(sinkersId))
  }

  const deleteHandler = (sinkersId: number): void => {
    dispatch(deleteProductItem(sinkersId))
  }

  return (
    <div className={styles.wrapper}>
      <img className={styles.item_image} src={sneakers.imgUrl} alt="Sneakers" />
      <div className={styles.item_values}>
        <p className={styles.item_name}>{sneakers.name}</p>
        <div className={styles.counter_settings}>
          <Button
            type="button"
            appearance={AppearanceEnum.CLEAR}
            onClick={() => { decrementHandler(sneakers.id) }}
          >
            <DecrementIcon />
          </Button>
          <span>{sneakers.counter}</span>

          <Button
            type="button"
            appearance={AppearanceEnum.CLEAR}
            onClick={() => {
              onIncrementHandler(sneakers.id)
            }}
          >
            <IncrementIcon />
          </Button>
          <p>$ {sneakers.totalPrice}</p>
        </div>
      </div>
      <Button
        type="button"
        appearance={AppearanceEnum.CLEAR}
        onClick={() => {
          deleteHandler(sneakers.id)
        }}
        className={styles.delete_button}
      >
        <CloseIcon />
      </Button>
    </div>
  )
}
