import Head from "next/head"
import { FC } from "react"

type PageProps = {
  children?: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="h-screen bg-zinc-800">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  )
}
