import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react"
import styles from "./button.module.css"

type Props = {
  children?: ReactNode
  size?: "small" | "large"
  variant?: "primary" | "secondary" | "tertiary" | "tertiary-alt" | "destructive"
  loading?: boolean
  iconOnly?: boolean
}

export type ButtonProps = ComponentPropsWithoutRef<"button"> & Props

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, loading, iconOnly, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={`${styles.button} ${className ?? ""}`}
        data-size={size}
        data-variant={variant}
        data-loading={loading}
        data-icon-only={iconOnly}
      />
    )
  }
)

Button.displayName = "Button"

export type LinkStyledAsButtonProps = ComponentPropsWithoutRef<"a"> & Props

export const LinkStyledAsButton = forwardRef<HTMLAnchorElement, LinkStyledAsButtonProps>(
  ({ className, size, variant, loading, iconOnly, ...props }, ref) => {
    return (
      <a
        ref={ref}
        {...props}
        className={`${styles.button} ${className ?? ""}`}
        data-size={size}
        data-variant={variant}
        data-loading={loading}
        data-icon-only={iconOnly}
      />
    )
  }
)

LinkStyledAsButton.displayName = "LinkStyledAsButton"
