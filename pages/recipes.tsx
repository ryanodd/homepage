import Head from "next/head"
import { ContentCard } from "../components/designSystem/ContentCard"
import { Header } from "../components/Header"
import { Main } from "../components/Main"
import { Page } from "../components/Page"
import { recipeData } from "../data/recipes"
import { PageTitle } from "../components/PageTitle"
import { RecipeDialog } from "../components/RecipeDialog"

export default function Recipes() {
  return (
    <Page>
      <Head>
        <title>Recipes</title>
        <meta name="description" content="Ryan Odd's recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main>
        <div className="flex flex-col gap-12">
          <PageTitle title="Recipes" description="" />
          <div className="flex flex-wrap gap-4">
            {recipeData.map((recipe) => (
              <RecipeDialog
                key={recipe.title}
                recipe={recipe}
                trigger={<ContentCard key={recipe.title} title={recipe.title} image={recipe.image} />}
              />
            ))}
          </div>
        </div>
      </Main>
      <footer className="flex"></footer>
    </Page>
  )
}
