export type Project = {
  title: string
  description: string[]
  imgSrc: string
  url?: string
  githubUrl?: string
}

export const projectData: Project[] = [
  {
    title: "Planks",
    description: [
      "A puzzle game." + "Reach the goal by picking up planks and placing them between the pegs.\n",
      "- Made with react\n" + "- Uses zustand for state management\n" + "- Stores game progress in local storage",
    ],
    imgSrc: "/planks.png",
    url: "https://planks.ryanodd.com",
    githubUrl: "https://github.com/ryanodd/crossing-puzzle",
  },
  {
    title: "Card Game",
    description: [
      "A collectible card game. Battle opponents and acquire new cards to upgrade your deck as you play.",
      "- React, Tailwind, NextJS\n" + "- React-dnd for dragging and dropping cards\n" + "- Uses AI generated art",
    ],
    imgSrc: "/cardGame.png",
    url: "https://cardgame.ryanodd.com",
    githubUrl: "https://github.com/ryanodd/card-game",
  },
  {
    title: "Ball Game",
    description: [
      "A sports game where two players try to score on the opponent's goal. Includes multiple characters with their own unique movement & abilities.",
      "Uses real-time netplay with 'rollback' to keep gameplay smooth & responsive over a network connection. I stopped working on the project when the netcode was causing performance problems that I couldn't solve. \n",
      "- Uses Box2D for gameplay physics\n" +
        "- Gameplay is rendered to HTML canvas\n" +
        "- Uses react for the menus & HUD\n",
    ],
    imgSrc: "/ballGame.png",
    url: "https://ballgame.ryanodd.com",
    githubUrl: "https://github.com/ryanodd/ballgame",
  },
  {
    title: "Dominion Tracker Tool",
    description: [
      "A chrome extension for the website 'dominion.games', which allows you to see which cards are in your deck by parsing the game log as you play.",
      "It consists of a chrome extension, a server that handled game log parsing requests, and a nice-looking frontend which the chrome extenstion embedded as an iframe.",
      "This isn't currently usable, I'm not maintaining this fast enough to keep up with all of the cards & changes to the Dominion game's website. The web client for Dominion is also becoming overshadowed by the Steam client.",
      "- Frontend uses react + ant-design \n" + "- Backend is python, using AWS API Gateway and AWS Lambda. \n",
    ],
    imgSrc: "/dominionTracker.png",
    githubUrl: "https://github.com/ryanodd/dominion-log-analyzer",
  },
  {
    title: "NYT Crossword Pencil Toggle",
    description: [
      "Adds a convenient feature to New York Times's crossword site. Press the Left Shift key to toggle the pencil tool.",
      "Based on user feedback, and with the help of a community-submitted pull request, an option was added to customize the key that needs to be pressed.",
    ],
    imgSrc: "/nytPencil.png",
    url: "https://chromewebstore.google.com/detail/NYT%20Crossword%20Pencil%20Toggle/cjnfmcllnmffmaiohjkahadfpnfmfjpe",
    githubUrl: "https://github.com/ryanodd/nyt-pencil-extension",
  },
]
