import Image from "next/image"
import contentCardStyles from "./contentCard.module.css"
import { forwardRef } from "react"

export type ContentCardProps = {
  title: string
  imgSrc: string
}

export const ContentCard = forwardRef<HTMLButtonElement, ContentCardProps>(({ title, imgSrc, ...props }, ref) => {
  return (
    <button className={contentCardStyles.contentCard} ref={ref} {...props}>
      <Image src={imgSrc} alt={title} fill style={{ objectFit: "cover" }} />
      <div className={`${contentCardStyles.titleRow} text-shadow`}>{title}</div>
    </button>
  )
})

ContentCard.displayName = "ContentCard"
