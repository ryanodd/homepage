import { UIProvider, useUIContext } from "./contexts/UIContext"
import { DesktopNav } from "./Nav"

type MainProps = {
  children?: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
  const { navOpen } = useUIContext()
  return (
    <div className="grow flex flex-row overflow-hidden">
      <DesktopNav />
      <div className="w-full px-20 py-20 overflow-y-auto flex flex-col items-center">
        <main className=" w-full max-w-7xl flex flex-col gap-12 ">{children}</main>
      </div>
    </div>
  )
}
