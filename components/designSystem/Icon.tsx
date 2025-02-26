import { ComponentPropsWithoutRef, ComponentType, forwardRef, HTMLAttributes } from "react"

import CloseSvg from "../../public/images/icons/close.svg"
import ExternalLinkSvg from "../../public/images/icons/externalLink.svg"
import HammerSvg from "../../public/images/icons/hammer.svg"
import MailSvg from "../../public/images/icons/mail.svg"
import MenuSvg from "../../public/images/icons/menu.svg"
import ResumeSvg from "../../public/images/icons/resume.svg"

import GithubSvg from "../../public/images/icons/github.svg"

import iconStyles from "./icon.module.css"

export type IconProps = ComponentPropsWithoutRef<"svg"> & {
  size?: "sm" | "md" | "lg"
}

export const createIcon = (SVG: ComponentType<HTMLAttributes<SVGSVGElement>>, label: string) => {
  const iconComponent = forwardRef<SVGSVGElement, IconProps>(({ size = "lg", ...props }, ref) => {
    return (
      <SVG
        className={iconStyles.icon}
        data-size={size}
        // @ts-ignore
        ref={ref}
        alt={label}
      />
    )
  })
  iconComponent.displayName = label
  return iconComponent
}

export const Close = createIcon(CloseSvg, "Close")
export const ExternalLink = createIcon(ExternalLinkSvg, "External Link")
export const Hammer = createIcon(HammerSvg, "Hammer")
export const Mail = createIcon(MailSvg, "Mail")
export const Menu = createIcon(MenuSvg, "Menu")
export const Resume = createIcon(ResumeSvg, "Resume")

export const Github = createIcon(GithubSvg, "Github")
