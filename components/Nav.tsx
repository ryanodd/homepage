import Link from "next/link"
import { contactEmailUrl } from "../utils/contactEmailUrl"
import { Button } from "./designSystem/Button"
import { useUIContext } from "./contexts/UIContext"
import {
  CalendarOne,
  Close,
  Hammer,
  Mail,
  OrderedList,
  Resume,
  Salad,
} from "./designSystem/Icon"
import navStyles from "./nav.module.css"

export const NavList = () => {
  const { setNavOpen } = useUIContext()
  return (
    <ul className={navStyles.navList}>
      <li className={navStyles.navItem}>
        <Link href="./projects">
          <Hammer />
          Projects
        </Link>
      </li>
      <li className={navStyles.navItem}>
        <Link href="./Resume.pdf" target="_blank" rel="noopener noreferrer">
          <Resume />
          Resume
        </Link>
      </li>
      <li className={`${navStyles.navItem} mb-10`}>
        <Link href={contactEmailUrl()}>
          <Mail />
          Contact me
        </Link>
      </li>
      <li className={navStyles.navItem}>
        <Link href="./recipes">
          <Salad />
          Recipes
        </Link>
      </li>
      <li className={navStyles.navItem}>
        <Link href="./daily-games">
          <CalendarOne />
          Daily games
        </Link>
      </li>
      <li className={navStyles.navItem}>
        <Link href="./tier-lists">
          <OrderedList />
          Tier lists
        </Link>
      </li>
    </ul>
  )
}

export type DesktopNavProps = {}

export const DesktopNav = ({}: DesktopNavProps) => {
  return (
    <>
      <nav className={`${navStyles.desktopNavContainer}`}>
        <NavList />
      </nav>
    </>
  )
}

export type MobileNavProps = {
  open: boolean
}

export const MobileNav = ({ open }: MobileNavProps) => {
  const { setNavOpen } = useUIContext()
  return (
    <>
      <div className={navStyles.navOverlay} data-open={open} />
      <nav className={navStyles.mobileNavContainer} data-open={open}>
        <div className="flex justify-end items-center">
          <Button
            onClick={() => {
              setNavOpen(false)
            }}
            data-variant="tertiary"
            data-icon-only
          >
            <Close />
          </Button>
        </div>
        <NavList />
      </nav>
    </>
  )
}
