import { AnimatedBackground } from "./AnimatedBackground"
import { DesktopNav } from "./Nav"
import mainStyles from "./main.module.css"

type MainProps = {
  children?: React.ReactNode
  animatedBackground?: boolean
}

export const Main = ({ children, animatedBackground = true }: MainProps) => {
  return (
    <div className={mainStyles.mainContainerWithNav}>
      <DesktopNav />
      <div className={mainStyles.mainContainer}>
        <div className={mainStyles.scrollableContainer}>
          <main className={mainStyles.mainColumn}>{children}</main>
        </div>
        {animatedBackground && <AnimatedBackground />}
      </div>
    </div>
  )
}
