import Head from "next/head"
import { ContentCard } from "../components/designSystem/ContentCard"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import { projectData } from "../data/projects"
import { PageTitle } from "../components/PageTitle"
import { ProjectDialog } from "../components/ProjectDialog"

export default function Projects() {
  return (
    <Page>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Ryan Odd's projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <div className="flex flex-col gap-12">
          <PageTitle title="Projects" description="I made these." />
          <div className="flex flex-wrap gap-4">
            {projectData.map((project) => (
              <ProjectDialog
                key={project.title}
                project={project}
                trigger={<ContentCard key={project.title} title={project.title} image={project.image} />}
              />
            ))}
          </div>
        </div>
      </Main>
      <footer className="flex"></footer>
    </Page>
  )
}
