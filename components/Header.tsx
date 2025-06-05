import { Avatar } from "./designSystem/Avatar"
import { Button } from "./designSystem/Button"
import { useUIContext } from "./contexts/UIContext"
import headerStyles from "./header.module.css"
import { Menu } from "./designSystem/Icon"

export const Header = () => {
  const { navOpen, setNavOpen } = useUIContext()
  return (
    <header className="flex flex-row items-center p-5 gap-5 bg-slate-50 shadow-sm z-10">
      <Button
        variant="tertiary"
        onClick={() => {
          setNavOpen(!navOpen)
        }}
        iconOnly
        className={headerStyles.navButton}
      >
        <Menu />
      </Button>
      <a href="." className={headerStyles.headerLogo}>
        <Avatar size="md" />
        Ryan Odd
      </a>
    </header>
  )
}
