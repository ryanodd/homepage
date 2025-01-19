export type PageTitleProps = {
  title: string
  description: string
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-5xl ">{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}
