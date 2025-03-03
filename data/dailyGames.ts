import { StaticImageData } from "next/image"
import minuteCryptic from "../public/images/dailyGames/minuteCryptic.png"

export type DailyGame = {
  title: string
  image: StaticImageData
  url: string
}

export const dailyGameData: DailyGame[] = [
  {
    title: "MinuteCryptic",
    image: minuteCryptic,
    url: "https://www.minutecryptic.com/",
  },
]
