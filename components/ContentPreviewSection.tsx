import { ReactNode } from "react"
import { SectionHeader } from "./SectionHeader"

export type ContentPreviewSectionProps = {
  title: string
  description?: string
  children: ReactNode
}

export const ContentPreviewSection = ({
  title,
  description,
  children,
}: ContentPreviewSectionProps) => {
  return (
    <section className="flex flex-col gap-2">
      <SectionHeader title={title} description={description} />
      <div className="flex -mx-8 px-8 py-8 gap-4 overflow-x-scroll">
        {children}
      </div>
    </section>
  )
}
