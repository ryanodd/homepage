import Head from "next/head"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Ryan Odd</title>
        <meta name="description" content="Ryan Odd's page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>This is my home page</Main>

      <footer className="flex"></footer>
    </Page>
  )
}
