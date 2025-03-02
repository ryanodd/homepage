export type PageTitleProps = {
  title: string
  description: string
}

export const PageTitle = ({ title, description }: PageTitleProps) => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-6xl ">{title}</h1>
      {description && <p className="text-xl ml-2">{description}</p>}
    </div>
  )
}
