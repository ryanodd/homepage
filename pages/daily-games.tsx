import Head from "next/head"
import { ContentCardLink } from "../components/designSystem/ContentCard"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import { dailyGameData } from "../data/dailyGames"
import { PageTitle } from "../components/PageTitle"

export default function DailyGames() {
  return (
    <Page>
      <Head>
        <title>Daily games</title>
        <meta name="description" content="Ryan Odd's favourite daily games" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <div className="flex flex-col gap-12">
          <PageTitle title="Daily games" description="These go great with a coffee." />
          <div className="flex flex-wrap gap-4">
            {dailyGameData.map((dailyGame) => (
              <ContentCardLink
                key={dailyGame.title}
                title={dailyGame.title}
                image={dailyGame.image}
                href={dailyGame.url}
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
