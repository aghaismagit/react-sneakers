import { type DetailsHTMLAttributes } from "react"

export enum AppearanceEnum {
  PRIMARY = 'primary',
  CLEAR = 'clear'
}

export interface IButtonProps extends DetailsHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "reset" | "button"
  appearance?: AppearanceEnum
  className?: string
}
