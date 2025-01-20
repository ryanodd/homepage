import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react"
import styles from "./button.module.css"

type Props = {
  children?: ReactNode
  "data-size"?: "small" | "large"
  "data-variant"?: "primary" | "secondary" | "tertiary" | "destructive"
  "data-loading"?: boolean
  "data-icon-only"?: boolean
}

export type ButtonProps = ComponentPropsWithoutRef<"button"> & Props

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, ...restProps }, ref) => {
  return <button ref={ref} {...restProps} className={`${styles.button} ${className ?? ""}`} />
})

Button.displayName = "Button"

export type ButtonStyledAsLinkProps = ComponentPropsWithoutRef<"a"> & Props

export const ButtonStyledAsLink = forwardRef<HTMLAnchorElement, ButtonStyledAsLinkProps>(
  ({ className, ...restProps }, ref) => {
    return <a ref={ref} {...restProps} className={`${styles.button} ${className ?? ""}`} />
  }
)

ButtonStyledAsLink.displayName = "ButtonStyledAsLink"
