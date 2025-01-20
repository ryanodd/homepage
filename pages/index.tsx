import Head from "next/head"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import { ContentPreviewSection } from "../components/ContentPreviewSection"
import { projectData } from "../data/projects"
import { HeroSection } from "../components/HeroSection"
import { ContactSection } from "../components/ContactSection"

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Ryan Odd</title>
        <meta name="description" content="Ryan Odd's page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <HeroSection />
        <ContentPreviewSection title="Projects" contentItems={projectData} />
        <ContactSection />
      </Main>

      <footer className="flex"></footer>
    </Page>
  )
}
