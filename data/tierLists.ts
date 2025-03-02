import { StaticImageData } from "next/image"
import rivalsOfAether2 from "../public/images/tierLists/rivalsOfAether2.png"

export type TierList = {
  title: string
  image: StaticImageData
  url: string
}

export const tierListData: TierList[] = [
  {
    title: "Rivals of Aether II",
    image: rivalsOfAether2,
    url: "https://tiermaker.com/list/video-games/rivals-2-characters-189174/4873548",
  },
]
