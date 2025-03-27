// Supernova Early Warning System

const snewsName = "Supernova Early Warning System"
const snewsImage = "/images/projects/snews-head.png"
const snewsShortDescription = `Designed and Optimised new algorithms for calculating 
supernova directions in night sky.`
const snewsbuttons = {
    "View Code": "https://github.com/Ouroboros42/SNEWS/tree/Synergy",
    "View Write-up": "https://drive.google.com/file/d/1uaZvlwaqJsk_GwZzLsjl58ufeWkY0PoN/view?usp=drive_link",
    "SNEWS": "https://www.snews2.org",
}
const snewsTags =  ["Algorithm Design", "Data Analysis", "Python", "Optimisation", "C++", "CUDA"]

// Quantum Tic-Tac-Toe

const qTTTName = "Quantum Tic-Tac-Toe"
const qTTTImage = "/images/projects/qtic-head.png"
const qTTTShortDescription = "A Quantum version of the classic Tic-Tac-Toe game-conceptualised and " +
    "created in 24 hours."

const qTTTbuttons = {
    "View Code": "https://github.com/vanshjjw/q-tic-tac-toe",
    "Play Game": "https://github.com/vanshjjw/q-tic-tac-toe/blob/main/README.md",
}

const qTTTTags = ["Python", "Qiskit", "Quantum Simulators", "Game Design"]


// Ludum Dare 50 

const ld50Name = "Ludum Dare 50 Game Jam"
const ld50Image = "/images/projects/ludumdare-head.png"
const ld50ShortDescription = "A zombie-apocalypse-based strategy and simulation game in created in  72 hours."

const ld50buttons = {
    "View Code": "https://github.com/vanshjjw/Ludum-Dare-22",
    "Play Game": "https://draconicchipmunk.itch.io/defending-hope",
}

const ld50Tags = ["C#", "Unity Engine", "Simulation", "Algorithm Design"]


// QEC bivariate bicycle

const qecName = "Quantum Error Correction"
const qecImage = "/images/projects/qecbb-head.png"
const qecShortDescription = "Developed a python package to construct and analyse Bivariate Bicycle QEC codes."

const qecbuttons = {
    "View Code": "https://github.com/vanshjjw/qec-bivariate-bicycle",
    "View Demo": "https://pypi.org/project/qec-bb",
}

const qecTags = ["Group Theory", "Graph Theory", "Python", "GAP", "Unix/Linux"]



// Projects JSONs

const snews = {
    id: "snews",
    name: snewsName,
    image: snewsImage,
    shortDescription: snewsShortDescription,
    buttons: snewsbuttons,
    tags: snewsTags
}


const qTTT = {
    id: "qtictactoe",
    name: qTTTName,
    image: qTTTImage,
    shortDescription: qTTTShortDescription,
    buttons: qTTTbuttons,
    tags: qTTTTags
}


const ld50 = {
    id: "ld50",
    name: ld50Name,
    image: ld50Image,
    shortDescription: ld50ShortDescription,
    buttons: ld50buttons,
    tags: ld50Tags
}


const qecbb = {
    id: "qecbb",
    name: qecName,
    image: qecImage,
    shortDescription: qecShortDescription,
    buttons: qecbuttons,
    tags: qecTags

}

// Final List of Projects

export const ResearchProjects = [
    qecbb,
    snews,
]

export const CodingProjects = [
    qTTT,
    ld50
]


export const INTRODUCTION =
`Sometimes I build for function, sometimes for fun. More often than not, I end up somewhere in between.`

