import Image, { StaticImageData } from "next/image"
import contentCardStyles from "./contentCard.module.css"
import { ComponentPropsWithoutRef, forwardRef } from "react"
import { ExternalLink } from "./Icon"

export type ContentCardProps = ComponentPropsWithoutRef<"button"> & {
  title: string
  image: StaticImageData
}

export const ContentCard = forwardRef<HTMLButtonElement, ContentCardProps>(({ title, image, ...props }, ref) => {
  return (
    <button className={contentCardStyles.contentCard} ref={ref} {...props}>
      <Image src={image} alt={title} fill style={{ objectFit: "cover" }} placeholder="blur" />
      <div className={`${contentCardStyles.titleRow}`}>{title}</div>
    </button>
  )
})

ContentCard.displayName = "ContentCard"

export type ContentCardLinkProps = ComponentPropsWithoutRef<"a"> & {
  title: string
  image: StaticImageData
}

export const ContentCardLink = forwardRef<HTMLAnchorElement, ContentCardLinkProps>(
  ({ title, image, ...props }, ref) => {
    return (
      <a className={contentCardStyles.contentCard} ref={ref} {...props}>
        <Image src={image} alt={title} fill style={{ objectFit: "cover" }} placeholder="blur" />
        <div className={`${contentCardStyles.titleRow}`}>
          {title}
          <ExternalLink size="sm" />
        </div>
      </a>
    )
  }
)

ContentCardLink.displayName = "ContentCardLink"
