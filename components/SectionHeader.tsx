import sectionHeaderStyles from "./sectionHeader.module.css"

export type SectionHeaderProps = {
  title: string
  description?: string
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className={sectionHeaderStyles.sectionHeader}>
      <h2 className={sectionHeaderStyles.sectionHeaderTitle}>{title}</h2>
      {description && <p className={sectionHeaderStyles.sectionHeaderDescription}>{description}</p>}
    </div>
  )
}
