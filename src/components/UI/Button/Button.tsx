import React, { type FC } from "react"
import classNames from "classnames"
import { AppearanceEnum, type IButtonProps } from "./intreface"

import styles from "./Button.module.scss"

export const Button: FC<IButtonProps> = ({
  children,
  type = "button",
  appearance = "primary",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={classNames(
        styles.button,
        {
          [styles.primary]: appearance === AppearanceEnum.PRIMARY
        },
        className
      )}
    >
      {children}
    </button>
  )
}
