import React, { type FC } from "react"
import { AppearanceEnum } from "@/components/UI/Button/intreface"
import { Button } from "@/components/UI/Button"
import styles from "./Burger.module.scss"

interface BurgerProps {
  onClick: () => void
}

export const Burger: FC<BurgerProps> = ({ onClick }) => {
  return (
    <Button
      type="button"
      appearance={AppearanceEnum.CLEAR}
      className={styles.header_burger}
      onClick={onClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </Button>
  )
}
