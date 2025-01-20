import { ContentCard, ContentCardProps } from "./ContentCard"
import { SectionHeader } from "./SectionHeader"

export type ContentPreviewSectionProps = {
  title: string
  description?: string
  contentItems: ContentCardProps[]
}

export const ContentPreviewSection = ({ title, description, contentItems }: ContentPreviewSectionProps) => {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeader title={title} description={description} />
      <div className="flex -mx-8 px-8 -my-8 py-8 gap-4 overflow-x-scroll">
        {contentItems.map((content) => (
          <ContentCard key={content.title} {...content} />
        ))}
      </div>
    </div>
  )
}
