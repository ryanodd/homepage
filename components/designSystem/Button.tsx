import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react"
import styles from "./button.module.css"

type Props = {
  children?: ReactNode
  "data-size"?: "small" | "large"
  "data-variant"?: "primary" | "secondary" | "tertiary" | "tertiary-alt" | "destructive"
  "data-loading"?: boolean
  "data-icon-only"?: boolean
}

export type ButtonProps = ComponentPropsWithoutRef<"button"> & Props

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...restProps }, ref) => {
  return <button ref={ref} {...restProps} className={`${styles.button} ${className ?? ""}`} />
})

Button.displayName = "Button"

export type LinkStyledAsButtonProps = ComponentPropsWithoutRef<"a"> & Props

export const LinkStyledAsButton = forwardRef<HTMLAnchorElement, LinkStyledAsButtonProps>(
  ({ className, ...restProps }, ref) => {
    return <a ref={ref} {...restProps} className={`${styles.button} ${className ?? ""}`} />
  }
)

LinkStyledAsButton.displayName = "LinkStyledAsButton"
