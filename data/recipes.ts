import { StaticImageData } from "next/image"
import blackBean from "../public/images/recipes/blackBean.png"

export type Recipe = {
  title: string
  sections: {
    title?: string
    lines: string[]
  }[]
  image: StaticImageData
  url?: string
}

export const recipeData: Recipe[] = [
  {
    title: "Black bean eggplant & tofu",
    sections: [
      {
        lines: [
          "Makes 4 portions.",
          "- 1 large eggplant\n" +
            "- 1 block of tofu\n" +
            "- 1 broccoli head\n" +
            "- 1 green onion stalk\n" +
            "- 1 red pepper (optional)\n" +
            "- 2 cups dry rice",
          "Sauce:\n" +
            "- 4 tbsp soy sauce\n" +
            "- 2 tbsp rice vinegar\n" +
            "- 6 tbsp black bean chili sauce (guizhou)\n" +
            "- 2 tbsp minced fresh ginger\n" +
            "- 4 cloves garlic, crushed\n" +
            "- 1 cup water\n" +
            "- sesame seeds (optional)\n" +
            "- something spicy, to your taste",
          "",
        ],
      },
      {
        title: "Prep",
        lines: [
          "Press/dry tofu.",
          "Chop tofu, eggplant & broccoli.",
          "Drain & prepare rice.",
          "Prepare sauce in a medium sized bowl.",
        ],
      },
      {
        title: "Cooking",
        lines: [
          "Heat oil in a large wok over medium-high heat until hot.",
          "Add tofu to the pan and fry for 3-5 minutes until tofu crisps a bit, then remove it to a separate plate.",
          "Separately, start steaming the broccoli & remove when slightly firm.",
          "Add eggplant to the wok and continue to fry another 5-8 minutes until softened & gold.",
          "Add sauce mixture, and broccoli. Toss to coat for 2-3 minutes.",
          "Add green onion. Serve on rice.",
        ],
      },
    ],
    image: blackBean,
    url: "https://loveandgoodstuff.com/spicy-black-bean-tofu-and-eggplant/",
  },
]
