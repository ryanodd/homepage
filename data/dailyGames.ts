import { StaticImageData } from "next/image"
import thrice from "../public/images/dailyGames/thrice.png"
import bandle from "../public/images/dailyGames/bandle.png"
import guessTheAudio from "../public/images/dailyGames/guessTheAudio.png"
import octordle from "../public/images/dailyGames/octordle.png"
import murdle from "../public/images/dailyGames/murdle.png"
import minuteCryptic from "../public/images/dailyGames/minuteCryptic.png"
import connections from "../public/images/dailyGames/connections.png"

export type DailyGame = {
  title: string
  image: StaticImageData
  url: string
}

export const dailyGameData: DailyGame[] = [
  {
    title: "Thrice",
    image: thrice,
    url: "https://thrice.geekswhodrink.com/",
  },
  {
    title: "Bandle",
    image: bandle,
    url: "https://www.bandle.app/",
  },
  {
    title: "Guess the audio",
    image: guessTheAudio,
    url: "https://guesstheaudio.com/",
  },
  {
    title: "Octordle",
    image: octordle,
    url: "https://www.britannica.com/games/octordle/daily",
  },
  {
    title: "Murdle",
    image: murdle,
    url: "https://murdle.com/",
  },
  {
    title: "MinuteCryptic",
    image: minuteCryptic,
    url: "https://www.minutecryptic.com/",
  },
  {
    title: "Connections",
    image: connections,
    url: "https://www.nytimes.com/games/connections",
  },
]
