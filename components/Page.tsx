import { MobileNav } from "./Nav"
import { useUIContext } from "./contexts/UIContext"

type PageProps = {
  children?: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
  const { navOpen } = useUIContext()
  return (
    <div className="h-screen v-screen overflow-hidden bg-slate-100 flex flex-col relative">
      <MobileNav open={navOpen} />
      {children}
    </div>
  )
}
