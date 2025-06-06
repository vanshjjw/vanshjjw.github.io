
// Supernova Early Warning System

const snewsName = "Supernova Early Warning System"
const snewsImage = "/images/projects/snews-head.png"
const snewsAlternateImage = ""
const snewsShortDescription = `Designed and Optimised new Algorithms for calculating supernova directions.`
const snewsLink = "https://github.com/Ouroboros42/SNEWS/tree/Synergy"
const snewsDemo = ""
const snewsTags = ["Research", "Algorithm Design", "Data Analysis","Python", "CUDA"]

const snewsDescription =
`

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
const qTTTImage = "/images/projects/qtic-head.png"
const qTTTAlternateImage = "/images/projects/qtic-main.png"
const qTTTShortDescription = "A Quantum version of the classic Tic-Tac-Toe game-conceptualised and created in 24 hours."
const qTTTLink = "https://github.com/vanshjjw/q-tic-tac-toe"
const qTTTDemo = "https://github.com/vanshjjw/q-tic-tac-toe/blob/main/README.md"
const qTTTTags = ["Python", "Qiskit", "Quantum Simulators", "Game Design"]

const qTTTDescription =
`
### **I made a game!** 

This was originally made for IBM's challenge at the [Quantum Coalition](https://www.quantumcoalition.io/) Hackathon

I worked with a friend to conceptualise and develop a Quantum version of tic-tac-toe in 24 hours. The goal was to create a simple
game where the player would have an advantage over the computer due to quantum stuff!

We ended up using Enta

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
const ld50Link = "https://github.com/vanshjjw/Ludum-Dare-22"
const ld50Demo = "https://draconicchipmunk.itch.io/defending-hope"
const ld50Tags = ["Game Development", "C#", "Unity Engine", "Simulation"]

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



// QEC bivariate bicycle

const qecName = "Quantum Error Correction"
const qecImage = "/images/projects/qecbb-head.png"
const qecAlternateImage = ""
const qecShortDescription = "Developed a python package to construct and analyse Bivariate Bicycle QEC codes."
const qecLink = "https://github.com/vanshjjw/qec-bivariate-bicycle"
const qecDemo = "https://pypi.org/project/qec-bb"
const qecTags = ["Researcg", "Optimisation", "Python", "GAP"]

const qecDescription = `
🔬 **Bivariate Bicycle Quantum Error-Correction Codes**

Working under **Prof. Dan Browne** at University College London during Summer 2024, I tackled fundamental challenges in quantum computing reliability.

**Research Achievements:**
- Constructed an innovative algorithm utilizing bivariate codes with disconnected Tanner graphs
- Developed a family of codes with constant check-weights and increasing encoding rates
- Explored the generalisation of bicycle codes to non-abelian (symmetric) groups
- Created a comprehensive codebase for numerical code search and property visualization

**Technical Implementation:**
- Designed efficient algorithms to optimize quantum code structure
- Built visualization tools to understand complex code properties
- Implemented systematic testing frameworks to validate performance
- Published reusable components on PyPI for broader research community access

*This research contributes to the growing field of quantum error correction, addressing one of the key obstacles in developing practical, fault-tolerant quantum computers.*
`

const qecbb = {
    id: "qecbb",
    name: qecName,
    image: qecImage,
    alternateImage: qecAlternateImage,
    shortDescription: qecShortDescription,
    description: qecDescription,
    link: qecLink,
    demo: qecDemo,
    tags: qecTags

}



// Final List of Projects


export const projectsData = [
  qecbb,
  snews,
  qTTT,
  ld50
]

export default projectsData;



