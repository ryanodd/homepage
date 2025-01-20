import { contactEmailUrl } from "../utils/contactEmailUrl"
import { ButtonStyledAsLink } from "./Button"
import contactSectionStyles from "./contactSection.module.css"
import { SectionHeader } from "./SectionHeader"

export const ContactSection = () => {
  return (
    <div className={contactSectionStyles.contactSection}>
      <SectionHeader title="Let's work together" description="I can help with your frontend project." />

      <div className={contactSectionStyles.contactActionRow}>
        <ButtonStyledAsLink href="./Resume.pdf" target="_blank" rel="noopener noreferrer" data-variant="secondary">
          Resume.pdf
        </ButtonStyledAsLink>
        <ButtonStyledAsLink href={contactEmailUrl()} data-variant="primary">
          Contact me
        </ButtonStyledAsLink>
      </div>
    </div>
  )
}
