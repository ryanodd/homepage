import * as Dialog from "@radix-ui/react-dialog"
import { type ComponentPropsWithoutRef, forwardRef, type ReactNode } from "react"

import dialogStyles from "./dialog.module.css"

import { Button } from "./Button"
import { Close } from "./Icon"

export const DialogRoot = Dialog.Root
export const DialogTrigger = Dialog.Trigger
export const DialogPortal = Dialog.Portal

export type DialogOverlayProps = ComponentPropsWithoutRef<typeof Dialog.Overlay>
export const DialogOverlay = forwardRef<HTMLDivElement, DialogOverlayProps>(({ ...props }, ref) => {
  return (
    <Dialog.Overlay asChild>
      <div className={dialogStyles.dialogOverlay} {...props} />
    </Dialog.Overlay>
  )
})

DialogOverlay.displayName = "DialogOverlay"

export const dialogSizes = ["md", "lg", "xl"] as const

export type DialogSize = (typeof dialogSizes)[number]

export type DialogContentProps = ComponentPropsWithoutRef<typeof Dialog.Content> & {
  /**
   * Indicates the maximum size of the Dialog on medium and large screens.
   * Small screens (below 960px) will not respect this property.
   */
  size?: DialogSize
}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <Dialog.Content className={`${dialogStyles.dialogContent} ${className ?? ""}`} ref={ref} {...props}>
        {children}
      </Dialog.Content>
    )
  }
)

DialogContent.displayName = "DialogContent"

export type DialogTitleProps = ComponentPropsWithoutRef<typeof Dialog.Title>

export const DialogTitle = forwardRef<HTMLHeadingElement, DialogTitleProps>(({ className, ...props }, ref) => {
  return <Dialog.Title className={`title-md text-color-primary-subdued ${className ?? ""}`} {...props} ref={ref} />
})

DialogTitle.displayName = "DialogTitle"

type DialogCloseButtonProps = Omit<ComponentPropsWithoutRef<typeof Dialog.Close>, "asChild">

export const DialogCloseButton = forwardRef<HTMLButtonElement, DialogCloseButtonProps>(({ ...props }, ref) => {
  return (
    <Dialog.Close asChild {...props} ref={ref}>
      <Button iconOnly variant="tertiary" aria-label="Close" className="dialog-close-button">
        <Close />
      </Button>
    </Dialog.Close>
  )
})

DialogCloseButton.displayName = "DialogCloseButton"

export type DialogHeaderProps = ComponentPropsWithoutRef<"div"> & {
  title?: string
  description?: string
  image?: ReactNode
  topLeftContent?: ReactNode
  topRightContent?: ReactNode
}

export const DialogHeader = forwardRef<HTMLDivElement, DialogHeaderProps>(
  ({ title, description, topLeftContent, topRightContent, ...props }, ref) => {
    return (
      <div className={dialogStyles.dialogHeader} {...props} ref={ref}>
        <div className={dialogStyles.dialogTopLeftContent}>{topLeftContent}</div>
        {(title || description) && (
          <div className={dialogStyles.dialogTitleSection}>
            {title && <Dialog.Title className={dialogStyles.dialogTitle}>{title}</Dialog.Title>}
            {description && (
              <Dialog.Description className={dialogStyles.dialogDescription}>{description}</Dialog.Description>
            )}
          </div>
        )}
        <div className={dialogStyles.dialogTopRightContent}>{topRightContent}</div>
      </div>
    )
  }
)

DialogHeader.displayName = "DialogHeader"

export type DialogBodyProps = ComponentPropsWithoutRef<"div">

export const DialogBody = forwardRef<HTMLDivElement, DialogBodyProps>(({ ...props }, ref) => {
  return <div className={dialogStyles.dialogBody} {...props} ref={ref} />
})

DialogBody.displayName = "DialogBody"
