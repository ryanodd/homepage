import Image from "next/image"
import { ReactNode } from "react"

export type ContentCardProps = {
  title: string
  bgSrc: string
}

export const HeaderLink = ({ title, bgSrc }: ContentCardProps) => {
  return (
    <div>
      <Image className="absolute" src={bgSrc} alt={title} />
    </div>
  )
}
