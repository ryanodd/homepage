export type Project = {
  title: string
  description: string[]
  imgSrc: string
  url?: string
  githubUrl?: string
}

export const projectData: Project[] = [
  {
    title: "Planks Puzzle Game",
    description: [
      "This is a web game I made for fun, inspired by a toy I played as a kid called River Crossing. Reach the goal by picking up planks and placing them between the pegs.\n",
      "- Made with NextJS + React\n" +
        "- Uses zustand for state management\n" +
        "- Stores game progress in local storage",
    ],
    imgSrc: "/planks.png",
    url: "https://planks.ryanodd.com",
    githubUrl: "https://github.com/ryanodd/crossing-puzzle",
  },
  {
    title: "Ball Game",
    description: [
      "A sports game where two players try to score on the opponent's goal. Includes multiple characters with their own unique movement & abilities.",
      "Ambitiously, I wanted real-time netplay with 'rollback' to keep gameplay smooth & responsive over a network connection. I stopped working on the project when the netcode was causing performance problems that I couldn't solve. \n",
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
      "It consisted of a chrome extension, a server that handled game log parsing requests, and a nice-looking frontend which the chrome extenstion embedded as an iframe.",
      "I stopped maintaining this because I couldn't keep up with all of the cards & changes to the Dominion game's website.",
      "- Frontend used react + ant-design \n" + "- Server used python\n",
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
