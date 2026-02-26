import { contactEmailUrl } from "../utils/contactEmailUrl"
import { LinkStyledAsButton } from "./designSystem/Button"
import contactSectionStyles from "./contactSection.module.css"
import { SectionHeader } from "./SectionHeader"

/**
 * I’m a web developer exploring job opportunities. I’ve built websites of all shapes & sizes. I’ve been using React professionally for 5 years, & I’ve built multiple design systems. I also know how to use Shopify, Wordpress & lots of other web technologies. I’d love to chat!
 */

export const ContactSection = () => {
  return (
    <section className={contactSectionStyles.contactSection}>
      <SectionHeader
        title="Let's work together"
        description="I can build your website, or help solve web-related problems."
      />
      <div className={contactSectionStyles.contactActionRow}>
        <LinkStyledAsButton
          href="./Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          data-variant="secondary"
        >
          Resume.pdf
        </LinkStyledAsButton>
        <LinkStyledAsButton href={contactEmailUrl()} data-variant="primary">
          Contact me
        </LinkStyledAsButton>
      </div>
    </section>
  )
}
