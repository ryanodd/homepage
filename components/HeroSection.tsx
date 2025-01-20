import { Avatar } from "./Avatar"
import heroSectionStyles from "./heroSection.module.css"

export const HeroSection = () => {
  return (
    <div className={heroSectionStyles.heroSection}>
      <h1 className={heroSectionStyles.heroNameRow}>
        <Avatar size="2xl" />
        Ryan Odd
      </h1>

      <div className={heroSectionStyles.heroDescription}>
        <h3 className="text-2xl ">I like making websites.</h3>
        <h3 className="text-2xl ">Take a look at my cool projects!</h3>
        {/* <h3 className="text-2xl">Woooosh. haha.</h3> */}
      </div>
    </div>
  )
}
