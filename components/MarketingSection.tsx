import { ReactNode, useEffect, useState } from "react"
import { useInViewport } from "../hooks/useInViewport"
import styles from "./marketingSection.module.css"

import React from "../public/images/logos/react.svg"
import Typescript from "../public/images/logos/typescript.svg"
import Css from "../public/images/logos/css.svg"
import Nextjs from "../public/images/logos/nextjs.svg"

import Cursor from "../public/images/logos/cursor.svg"
import ChatGpt from "../public/images/logos/chatGpt.svg"

export type MarketingCellProps = {
  title: string
  description: string
  icons?: ReactNode[]
  action?: ReactNode
}

export const MarketingCell = ({ title, description, icons, action }: MarketingCellProps) => {
  const { ref, isInView } = useInViewport<HTMLDivElement>({ threshold: 0.2 })
  const [hasBeenInView, setHasBeenInView] = useState(false)
  
  useEffect(() => {
    if (isInView) {
      setHasBeenInView(true)
    }
  }, [isInView])

  return (
    <div ref={ref} data-in-view={hasBeenInView} className={styles.marketingCell}>
      <h3 className={styles.marketingCellTitle}>{title}</h3>
      {icons && <div className={styles.marketingCellIcons}>{icons}</div>}
      <h4 className={styles.marketingCellDescription}>{description}</h4>
      {action}
    </div>
  )
}

export const MarketingSection = () => {
  return (
    <section className={styles.marketingSection}>
      <MarketingCell
        title="Expert in the modern web landscape"
        description="My frontend skillset is up to date & relevant. Typescript, React, CSS, NextJS are my jam."
        icons={[<React key="0" />, <Typescript key="1" />, <Css key="2" />, <Nextjs key="3" />]}
      />
      <MarketingCell
        title="End-to-end builder"
        description="I have a wide skillset & I think like an owner. On my team, nothing is 'not my problem'."
      />
      <MarketingCell
        title="AI powered"
        description="I maximize my output with AI tools (while still understanding what I'm building!)"
        icons={[<Cursor key="0" />, <ChatGpt key="1" />]}
      />
      <MarketingCell
        title="Pragmatic approach"
        description="I love what I do, but I still do it as fast as possible! Simplicity saves time when building - and when maintaining."
      />
      <MarketingCell
        title="An eye for design"
        description="I care about how things look & feel. A website can & should be fun to use!"
      />
    </section>
  )
}
