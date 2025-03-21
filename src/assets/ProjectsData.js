// Supernova Early Warning System

const snewsName = "Supernova Early Warning System"
const snewsImage = "/images/projects/snews-head.png"
const snewsShortDescription = `Designed and Optimised new Algorithms for calculating supernova directions.`
const snewsLink = "https://github.com/Ouroboros42/SNEWS/tree/Synergy"
const snewsDemo = "https://www.snews2.org"
const snewsTags = ["Research", "Algorithm Design", "Data Analysis","Python", "CUDA"]

const snewsDescription =
`🔬 **Supernova Early Warning System (SNEWS)**

Designed and optimized algorithms for detecting and analyzing supernova signals as part of an international collaboration. My work focused on:

- Developing more efficient triangulation algorithms
- Implementing CUDA acceleration for faster analysis
- Creating visualization tools for directional data
- Benchmarking and optimizing key algorithms

This research contributes to astronomers' ability to quickly identify and respond to supernova events.`

// Quantum Tic-Tac-Toe

const qTTTName = "Quantum Tic-Tac-Toe"
const qTTTImage = "/images/projects/qtic-head.png"
const qTTTShortDescription = "A Quantum version of the classic Tic-Tac-Toe game-conceptualised and created in 24 hours."
const qTTTLink = "https://github.com/vanshjjw/q-tic-tac-toe"
const qTTTDemo = "https://github.com/vanshjjw/q-tic-tac-toe/blob/main/README.md"
const qTTTTags = ["Python", "Qiskit", "Quantum Simulators", "Game Design"]


// Ludum Dare 50 

const ld50Name = "Ludum Dare 50"
const ld50Image = "/images/projects/ludumdare-head.png"
const ld50ShortDescription = "Created a zombie-apocalypse-based strategy and simulation game in 72 hours."
const ld50Link = "https://github.com/vanshjjw/Ludum-Dare-22"
const ld50Demo = "https://draconicchipmunk.itch.io/defending-hope"
const ld50Tags = ["Game Development", "C#", "Unity Engine", "Simulation"]


// QEC bivariate bicycle

const qecName = "Quantum Error Correction"
const qecImage = "/images/projects/qecbb-head.png"
const qecShortDescription = "Developed a python package to construct and analyse Bivariate Bicycle QEC codes."
const qecLink = "https://github.com/vanshjjw/qec-bivariate-bicycle"
const qecDemo = "https://pypi.org/project/qec-bb"
const qecTags = ["Research", "Optimisation", "Python", "GAP"]



// Projects JSONs

const snews = {
    id: "snews",
    name: snewsName,
    image: snewsImage,
    shortDescription: snewsShortDescription,
    link: snewsLink,
    demo: snewsDemo,
    tags: snewsTags
}


const qTTT = {
    id: "qtictactoe",
    name: qTTTName,
    image: qTTTImage,
    shortDescription: qTTTShortDescription,
    link: qTTTLink,
    demo: qTTTDemo,
    tags: qTTTTags
}


const ld50 = {
    id: "ld50",
    name: ld50Name,
    image: ld50Image,
    shortDescription: ld50ShortDescription,
    link: ld50Link,
    demo: ld50Demo,
    tags: ld50Tags
}


const qecbb = {
    id: "qecbb",
    name: qecName,
    image: qecImage,
    shortDescription: qecShortDescription,
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



