import { Avatar } from "./designSystem/Avatar"
import heroSectionStyles from "./heroSection.module.css"

export const HeroSection = () => {
  return (
    <div className={heroSectionStyles.heroSection}>
      <h1 className={heroSectionStyles.heroNameRow}>
        <Avatar size="2xl" />
        Ryan Odd
      </h1>
      <div className={heroSectionStyles.heroDescription}>
        <h3 className="text-2xl ">I solve problems, mostly by building websites.</h3>
        <h3 className="text-2xl ">I'm looking for a full-time job in Toronto.</h3>
        <h3 className="text-2xl ">Take a look around!</h3>
      </div>
    </div>
  )
}
