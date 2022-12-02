import { HeaderLink } from "./HeaderLink"

type MainProps = {
  children?: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
  return <main className="p-5">{children}</main>
}
