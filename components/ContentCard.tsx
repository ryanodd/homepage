import Image from "next/image"
import { ReactNode, useCallback } from "react"

export type ContentCardProps = {
  title: string
  description: string
  imgSrc: string
  url?: string
}

export const ContentCard = ({ title, description, imgSrc, url }: ContentCardProps) => {
  const onClick = useCallback(() => {
    if (!url) {
      return
    }
    window.open(url)
  }, [url])
  return (
    <button
      onClick={onClick}
      className="rounded-xl shadow-xl overflow-hidden w-72 h-48 relative hover:scale-105 transition-transform shrink-0"
    >
      <Image src={imgSrc} alt={title} fill style={{ objectFit: "cover" }} />
      <div className="px-6 py-3 bg-gradient-to-t from-slate-800 text-white text-shadow absolute left-0 bottom-0 right-0">
        {title}
      </div>
      {/* <div className="px-6 py-3">{description}</div> */}
    </button>
  )
}
