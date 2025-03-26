import { StaticImageData } from "next/image"
import blackBean from "../public/images/recipes/blackBean.png"
import peanutCouscous from "../public/images/recipes/peanutCouscous.png"
import poke from "../public/images/recipes/poke.png"
import mexicanBowl from "../public/images/recipes/mexicanBowl.png"

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
        title: "Shop",
        lines: [
          "Makes 4 portions.",
          "- 1 large eggplant\n" +
            "- 1 block of extra firm tofu\n" +
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
          "Rinse & prepare rice.",
          "Prepare sauce in a medium sized bowl.",
        ],
      },
      {
        title: "Cook",
        lines: [
          "Heat oil in a large pan over medium-high heat until hot.",
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
  {
    title: "Thai peanut couscous",
    sections: [
      {
        title: "Shop",
        lines: [
          "Makes 4 portions.",
          "- 1.5 cups pearl couscous\n" +
            "- 4 boneless skinless chicken thighs (or block of extra firm tofu)\n" +
            "- 1 broccoli head\n" +
            "- 1 red pepper\n" +
            "- 1 carrot \n" +
            "- 1 onion\n" +
            "- 1 green onion stalk\n",
          "Sauce:\n" +
            "- 0.5 cup natural peanut butter\n" +
            "- 3 tbsp soy sauce\n" +
            "- 14oz can of coconut milk\n" +
            "- 3 cloves garlic, crushed\n" +
            "- 1 tbsp grated ginger\n" +
            "- 3/4 cup hot water (or chicken broth)\n" +
            "- something spicy, to your taste",
          "",
        ],
      },
      {
        title: "Prep",
        lines: [
          "Chop chicken into bite-sized cubes.",
          "Peel & chop carrot, chop broccoli and red pepper.",
          "Prepare sauce in a medium sized bowl.",
        ],
      },
      {
        title: "Cook",
        lines: [
          "Heat oil in a large pan over high heat until hot.",
          "Fry chicken 5 minutes until mostly cooked (it'll finish cooking in the sauce). Remove it to a separate bowl.",
          "On medium-high heat, fry onion until softened.",
          "Add the sauce, carrot, broccoli, red pepper, couscous, and chicken to the pan. Once simmering, set heat to low.",
          "Cover and cook for 15 minutes, then 10 minutes uncovered.",
          "Add green onion. Salt to taste. Serve.",
        ],
      },
    ],
    image: peanutCouscous,
    url: "https://www.ambitiouskitchen.com/thai-peanut-chicken-couscous/",
  },
  {
    title: "Poke",
    sections: [
      {
        title: "Shop",
        lines: [
          "Makes 4 portions.",
          "- 2 lbs fresh sushi-grade salmon\n" +
            "- 2 avocado\n" +
            "- 1 small red onion\n" +
            "- 1 green onion stalk\n" +
            "- Furikake seasoning\n",
          "Sauce:\n" +
            "- 1 cup soy sauce \n" +
            "- 2 tbsp white sugar\n" +
            "- 3 cloves garlic, crushed\n" +
            "- 1 tbsp ginger, grated\n" +
            "- 1 tsp sesame oil\n" +
            "- 1 tsp rice vinegar\n",
        ],
      },
      {
        title: "Prep",
        lines: [
          "Remove salmon skin & chop into bite-sized cubes.",
          "Dice red onion.",
          "Combine fish, red onion, sugar, garlic, ginger, sesame oil, and rice vinegar in large bowl.",
          "Add enough soy sauce to cover fish. Put in the fridge for 30 minutes.",
          "Rinse & prepare rice.",
        ],
      },
      {
        title: "Cook",
        lines: [
          "When rice is done cooking and fish is done marinating:",
          "Chop avocado and green onion.",
          "Combine all ingredients",
        ],
      },
    ],
    image: poke,
  },
  {
    title: "Mexican bowls",
    sections: [
      {
        title: "Shop",
        lines: [
          "Makes 4 portions.",
          "- 1 15oz can of black beans\n" + "- 1 onion\n" + "- 1 cup dry rice\n" + "- 1 sweet potato",
          "Any of:\n" +
            "- 2 avocados\n" +
            "- 1 red pepper\n" +
            "- Cheese \n" +
            "- Salsa \n" +
            "- Sour cream \n" +
            "- Jalapeno (fresh or pickled)\n",
          "Bean spice:",
          "- 1 tbsp cumin\n" + "- 1 tsp paprika\n" + "- 1 clove garlic or 1 tsp garlic powder\n" + "- 1 tbsp salt\n",
        ],
      },
      {
        title: "Prep",
        lines: [
          "Peel & chop sweet potato into small cubes.",
          "Chop onion & red pepper.",
          "Open & drain beans.",
          "Rinse & prepare rice.",
        ],
      },
      {
        title: "Cook",
        lines: [
          "Preheat oven to 425F.",
          "Spread sweet potatoes on a large baking sheet & coat with olive oil & salt. Put in oven for 15 minutes, then toss/flip the potato cubes, then do 15 more minutes.",
          "Heat oil in a pan over medium-high heat until hot.",
          "Fry onions 5 minutes until softened.",
          "Add peppers & fry until softened.",
          "Add beans & bean spice. Fry for a bit until beans are hot.",
          "Chop avocado. Grate cheese.",
          "Combine everything into bowls!. Finish with cheese, sour ceam, and salsa.",
        ],
      },
    ],
    image: mexicanBowl,
  },
]
