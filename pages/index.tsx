import Head from "next/head"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import { ContentPreviewSection } from "../components/ContentPreviewSection"
import { projectData } from "../data/projects"

import heroNameStyles from "./heroName.module.css"
import { Avatar } from "../components/Avatar"

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
        <div className={`${heroNameStyles.heroName} flex flex-col text-gray-800 gap-2 mt-10 mb-20`}>
          <h1 className="font-semibold text-12xl leading-none text-gray-900 flex flex-row flex-wrap items-center gap-10 mb-20">
            <Avatar size="2xl" />
            Ryan Odd
          </h1>

          <h3 className="text-2xl ">I like making websites.</h3>
          <h3 className="text-2xl ">Take a look at my cool projects!</h3>
          <h3 className="text-2xl">Woooosh. haha.</h3>
          {/* <h3 className="text-2xl"></h3> */}
        </div>

        <ContentPreviewSection title="Projects" contentItems={projectData} />
      </Main>

      <footer className="flex"></footer>
    </Page>
  )
}
