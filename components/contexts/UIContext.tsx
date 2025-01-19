import { createContext, Dispatch, FC, ReactNode, SetStateAction, useContext, useEffect, useState } from "react"
import { usePathname } from "next/navigation"

type UIContextProps = {
  children: ReactNode
}

type UIState = {
  navOpen: boolean
  setNavOpen: Dispatch<SetStateAction<boolean>>
}

const UIContext = createContext<UIState | undefined>(undefined)

const UIProvider: FC<UIContextProps> = ({ children }) => {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname()
  useEffect(() => {
    setNavOpen(false)
  }, [pathname])

  const uiState: UIState = {
    navOpen,
    setNavOpen,
  }

  return <UIContext.Provider value={uiState}>{children}</UIContext.Provider>
}

const useUIContext = () => {
  const uiContext = useContext(UIContext)
  if (!uiContext) {
    throw new Error("No UIContext.Provider found when calling useUIContext.")
  }
  return uiContext
}

export { UIContext, UIProvider, useUIContext }
