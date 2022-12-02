import Head from "next/head"
import Image from "next/image"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <Page>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Ryan Odd's projects" />
      </Head>
      <Header />
      <Main>These are my projects</Main>

      <footer className="flex"></footer>
    </Page>
  )
}
