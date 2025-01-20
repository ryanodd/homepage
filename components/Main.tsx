import { DesktopNav } from "./Nav"
import mainStyles from "./main.module.css"

type MainProps = {
  children?: React.ReactNode
}

export const Main = ({ children }: MainProps) => {
  return (
    <div className={mainStyles.mainContainerWithNav}>
      <DesktopNav />
      <div className={mainStyles.mainContainer}>
        <main className={mainStyles.mainColumn}>{children}</main>
      </div>
    </div>
  )
}
