import { StaticImageData } from "next/image"
import blackBean from "../public/images/recipes/blackBean.png"

export type Recipe = {
  title: string
  description: string[]
  image: StaticImageData
  url?: string
}

export const recipeData: Recipe[] = [
  {
    title: "Black bean eggplant & tofu",
    description: [
      "Makes 4 portions",
      "- 1 large eggplant\n" +
        "- 1 block of tofu\n" +
        "- 1 broccoli head\n" +
        "- 2 cups dry rice\n" +
        "- 1 red pepper (optional)",
      "",
      "Prep:",
      "Press/dry tofu.",
      "Chop tofu, eggplant & broccoli.",
      "Prepare sauce in a medium sized bowl:\n" +
        "- 2 tbsp soy sauce\n" +
        "- 1 tbsp Rice vinegar\n" +
        "- 3 tbsp Black bean chili sauce (guizhou)\n" +
        "- 1 tbsp minced fresh ginger\n" +
        "- 2 cloves garlic - crushed\n" +
        "- 1⁄2 cup water\n" +
        "- something spicy, to your taste",
      "Heat a large wok over medium-high heat and add a tablespoon of sesame oil.",
      "When the oil is heated, add the tofu to the pan and stir fry for 3-5 minutes, or until the outside of the tofu begins to crisp a bit.",
      "Add the eggplant to the wok and continue to stirfry another 5-8 minutes. The eggplant should have softened, but not be fully cooked.",
      "Add the spicy black bean sauce and the chopped green onions to the wok and toss to coat.",
      "Stirfry for another 2-3 minutes until the sauce cooks in to the eggplant and tofu then serve.",
    ],
    image: blackBean,
    url: "https://loveandgoodstuff.com/spicy-black-bean-tofu-and-eggplant/",
  },
]
