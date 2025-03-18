
// Supernova Early Warning System

const snewsName = "Supernova Early Warning System"
const snewsImage = "/images/projects/snews-head.png"
const snewsAlternateImage = ""
const snewsShortDescription = `Designed and Optimised new Algorithms for calculating supernova directions.`
const snewsLink = "https://github.com/Ouroboros42/SNEWS/tree/Synergy"
const snewsDemo = ""
const snewsTags = ["Python", "Algorithm Design", "Data Analysis", "CUDA"]

const snewsDescription = `
The [SNEWS](https://snews.org) collaboration is a global network of neutrino detectors designed to provide early warning of galactic supernovas.
One of the key steps in their analysis is to find the time-difference between neutrino arrivals at detectors around the world. 

I helped optimise this part of directional analysis algorithm by **reformulating the mathematics** and developing a **specialised calculation method** that 
reduced processing time from hours to **under 2 minutes** - fast enough to give astronomers time to observe the entire optical spectrum of a supernova event.
`

const snews = {
    id: "snews",
    name: snewsName,
    image: snewsImage,
    alternateImage: snewsAlternateImage,
    shortDescription: snewsShortDescription,
    description: snewsDescription,
    link: snewsLink,
    demo: snewsDemo,
    tags: snewsTags
}



// Quantum Tic-Tac-Toe

const qTTTName = "Quantum Tic-Tac-Toe"
const qTTTImage = "/images/projects/qtic-head"
const qTTTAlternateImage = "/images/projects/qtic-main.png"
const qTTTShortDescription = "A Quantum version of the classic Tic-Tac-Toe game-conceptualised and created in 24 hours."
const qTTTLink = "https://github.com/vanshjjw/q-tic-tac-toe"
const qTTTDemo = "https://github.com/vanshjjw/q-tic-tac-toe/blob/main/README.md"
const qTTTTags = ["Python", "Qiskit", "Quantum Simulators", "Game Design"]

const qTTTDescription = `
[QTicTacToe](https://qtictactoe.org) is an educational simulation that demonstrates quantum computing principles through a 
playable quantum version of the classic game. I contributed to developing the **quantum state representation** and created a
 **simplified visual interface** that helps users understand superposition and entanglement while playing. The application reduces complex quantum 
 concepts to **intuitive game mechanics** - making quantum physics accessible to students without advanced mathematical background.
 `

const qTTT = {
    id: "qtictactoe",
    name: qTTTName,
    image: qTTTImage,
    alternateImage: qTTTAlternateImage,
    shortDescription: qTTTShortDescription,
    description: qTTTDescription,
    link: qTTTLink,
    demo: qTTTDemo,
    tags: qTTTTags
}



// Ludum Dare 50 

const ld50Name = "Ludum Dare 50"
const ld50Image = "/images/projects/ludumdare-head.png"
const ld50AlternateImage = "/images/projects/ludumdare-main.png"
const ld50ShortDescription = "Created a zombie-apocalypse-based strategy and simulation game in 72 hours."
const ld50Link = ""
const ld50Demo = ""
const ld50Tags = ["Game Development", "C#", "Game Design", "Rapid Prototyping", "Simulation"]

const ld50Description = `
Participated in the Ludum Dare Game Jam, an intense 72-hour competition where I designed and developed a complete zombie-apocalypse-themed simulation and strategy game from scratch. 

The game combined resource management mechanics with strategic decision-making in a survival scenario.
`


const ld50 = {
    id: "ld50",
    name: ld50Name,
    image: ld50Image,
    alternateImage: ld50AlternateImage,
    shortDescription: ld50ShortDescription,
    description: ld50Description,
    link: ld50Link,
    demo: ld50Demo,
    tags: ld50Tags
}





// Final List of Projects

export const projectsData = [
  snews,
  qTTT,
  ld50
]

export default projectsData;



