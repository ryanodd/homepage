import { StaticImageData } from "next/image"
import rivalsOfAether2 from "../public/images/tierLists/rivalsOfAether2.png"
import balatroJokers from "../public/images/tierLists/balatroJokers.png"
import balatroDecks from "../public/images/tierLists/balatroDecks.png"
import spiritIslandSpirits from "../public/images/tierLists/spiritIslandSpirits.png"

export type TierList = {
  title: string
  image: StaticImageData
  url: string
}

export const tierListData: TierList[] = [
  {
    title: "Rivals 2 characters",
    image: rivalsOfAether2,
    url: "https://tiermaker.com/list/video-games/rivals-2-characters-189174/4873548",
  },
  {
    title: "Balatro jokers",
    image: balatroJokers,
    url: "https://tiermaker.com/list/video-games/balatro-full-jokers-tier-list-version-100k-16227892/5346382",
  },
  {
    title: "Balatro decks",
    image: balatroDecks,
    url: "https://tiermaker.com/create/balatro-deck-tier-list-1477348",
  },
  {
    title: "Spirit Island spirits",
    image: spiritIslandSpirits,
    url: "https://tiermaker.com/list/board-games/spirit-island-all-spirits-and-aspects-15439292/4880406",
  },
]
