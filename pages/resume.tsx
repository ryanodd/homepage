import Head from "next/head"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"

export default function Resume() {
  return (
    <Page>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Ryan Odd's resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>This is my resume</Main>

      <footer className="flex"></footer>
    </Page>
  )
}
