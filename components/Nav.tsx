import Link from "next/link"
import { contactEmailUrl } from "../utils/contactEmailUrl"
import { Button } from "./Button"
import { useUIContext } from "./contexts/UIContext"
import { Close, Hammer, Mail, Resume } from "./Icon"
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
      <li className={navStyles.navItem}>
        <Link href={contactEmailUrl()} target="_blank" rel="noopener noreferrer">
          <Mail />
          Contact me
        </Link>
      </li>
    </ul>
  )
}

export type DesktopNavProps = {}

export const DesktopNav = ({}: DesktopNavProps) => {
  return (
    <>
      <div className={`${navStyles.desktopNavContainer}`}>
        <NavList />
      </div>
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
      <div className={navStyles.mobileNavContainer} data-open={open}>
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
      </div>
    </>
  )
}
