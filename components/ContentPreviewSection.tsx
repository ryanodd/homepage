import { ContentCard, ContentCardProps } from "./ContentCard"

export type ContentPreviewSectionProps = {
  title: string
  description?: string
  contentItems: ContentCardProps[]
}

export const ContentPreviewSection = ({ title, description, contentItems }: ContentPreviewSectionProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-4xl">{title}</h2>
        {description && <p>{description}</p>}
      </div>
      <div className="flex -mx-8 px-8 -my-8 py-8 gap-4 overflow-x-scroll">
        {contentItems.map((content) => (
          <ContentCard key={content.title} {...content} />
        ))}
      </div>
    </div>
  )
}
