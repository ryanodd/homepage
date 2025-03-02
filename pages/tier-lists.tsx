import Head from "next/head"
import { ContentCardLink } from "../components/designSystem/ContentCard"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import { tierListData } from "../data/tierLists"
import { PageTitle } from "../components/PageTitle"

export default function TierLists() {
  return (
    <Page>
      <Head>
        <title>Tier lists</title>
        <meta name="description" content="Ryan Odd's tier lists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <div className="flex flex-col gap-12">
          <PageTitle title="Tier lists" description="" />
          <div className="flex flex-wrap gap-4">
            {tierListData.map((tierList) => (
              <ContentCardLink
                key={tierList.title}
                title={tierList.title}
                imgSrc={tierList.imgSrc}
                href={tierList.url}
                target="_blank"
                rel="noopener noreferrer"
              />
            ))}
          </div>
        </div>
      </Main>
      <footer className="flex"></footer>
    </Page>
  )
}
