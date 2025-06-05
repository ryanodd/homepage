import Head from "next/head"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import { ContentPreviewSection } from "../components/ContentPreviewSection"
import { projectData } from "../data/projects"
import { HeroSection } from "../components/HeroSection"
import { ContactSection } from "../components/ContactSection"
import { ProjectDialog } from "../components/ProjectDialog"
import { ContentCard } from "../components/designSystem/ContentCard"
import { MarketingSection } from "../components/MarketingSection"

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
        <div className="flex flex-col gap-28">
          <HeroSection />
          <MarketingSection />
          <ContentPreviewSection title="Projects">
            {projectData.map((project) => (
              <ProjectDialog
                key={project.title}
                project={project}
                trigger={<ContentCard key={project.title} title={project.title} image={project.image} />}
              />
            ))}
          </ContentPreviewSection>
          <ContactSection />
          {/* <ContentPreviewSection title="Tier lists">
            {tierListData.map((tierList) => (
              <ContentCard key={tierList.title} title={tierList.title} imgSrc={tierList.imgSrc} />
            ))}
          </ContentPreviewSection> */}
        </div>
      </Main>

      <footer className="flex"></footer>
    </Page>
  )
}
