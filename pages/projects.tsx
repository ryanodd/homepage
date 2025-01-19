import Head from "next/head"
import Image from "next/image"
import { ContentCard } from "../components/ContentCard"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import styles from "../styles/Home.module.css"
import { projectData } from "../data/projects"
import { PageTitle } from "../components/PageTitle"

// Add NHL data & NYT extension

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
        <PageTitle title="Projects" description="" />
        <div className="flex grid-flow-row row-auto columns-auto gap-4">
          {projectData.map((project) => (
            <ContentCard
              key={project.title}
              title={project.title}
              description={project.description}
              imgSrc={project.imgSrc}
              url={project.url}
            />
          ))}
        </div>
      </Main>
      <footer className="flex"></footer>
    </Page>
  )
}
