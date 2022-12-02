import { ReactNode } from "react"

export type HeaderLinkProps = {
  children: ReactNode
  url: string
}

export const HeaderLink = ({ children, url }: HeaderLinkProps) => {
  return (
    <a href={url} className="uppercase h-full flex px-2 items-center hover:bg-red-800 hover:bg-opacity-30">
      {children}
    </a>
  )
}
