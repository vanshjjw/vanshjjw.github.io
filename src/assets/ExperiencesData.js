// Combined experiences and projects data with unique IDs
// Includes work experience, other experience, and projects

export const experiencesData = [
  // Work Experiences
  {
    id: 1,
    type: "work",
    title: "University College London",
    website: "https://www.ucl.ac.uk/quantum/study-here/quantum-doctoral-programmes",
    subtitle: "Research Intern",
    location: "London, UK",
    dates: "Jul - Sep 2024",
    description: "I worked with Professor Dan Browne, and researched quantum error-correction codes (specifically the bivariate bicycle codes). I did some work on optimisation these codes, creating nice families of such codes and ended up creating a python package to do so."
  },
  {
    id: 2,
    type: "work",
    title: "Ghyston Ltd",
    website: "https://www.ghyston.com/",
    subtitle: "Software Developer",
    location: "Bristol, UK",
    dates: "Jul - Sep 2023",
    description: "I worked as a full-stack developer, and worked on multiple projects. I worked on the backend of a project to create a database ETL pipeline, and also worked on the frontend of a project to create an API endpoint. I also worked on a project to create a web app for a client, and worked on the backend of that project."
  },
  {
    id: 3,
    type: "work",
    title: "STEP Ignite Incubator",
    website: "https://unistep.org/",
    subtitle: "Student Entrepreneur",
    location: "Oxford, UK",
    dates: "Jl - Aug 2022",
    description: "I co-founded a startup to use quantum memristors as anti-counterfeiting devices. I worked on the business side of things, and also did some work on the technical side. I worked on the business plan, and also did some work on the technical side to create a prototype of the device."
  },
  
  // Other Experiences
  {
    id: 4,
    type: "other",
    title: "Oxford Quantum Information Society",
    website: "https://www.oxfordquantum.org/",
    subtitle: "President",
    location: "Oxford, UK",
    dates: "2023 - Present",
    description: "Led the society's initiatives in quantum computing education and outreach. Organized workshops, seminars, and networking events with industry professionals."
  },
  
  // Projects
  {
    id: 5,
    type: "project",
    title: "Quantum Error Correction",
    website: "https://github.com/vanshjjw/qec-bivariate-bicycle",
    subtitle: "Python Package Development",
    image: "/images/projects/qecbb-head.png",
    shortDescription: "Developed a python package to construct and analyse Bivariate Bicycle QEC codes.",
    buttons: {
      "View Code": "https://github.com/vanshjjw/qec-bivariate-bicycle",
      "View Demo": "https://pypi.org/project/qec-bb"
    }
  },
  {
    id: 6,
    type: "project",
    title: "Supernova Early Warning System",
    website: "https://github.com/Ouroboros42/SNEWS/tree/Synergy",
    subtitle: "Algorithm Design",
    image: "/images/projects/snews-head.png",
    shortDescription: "Designed and Optimised new Algorithms for calculating supernova directions.",
    buttons: {
      "View Code": "https://github.com/Ouroboros42/SNEWS/tree/Synergy",
      "View Write-up": "https://www.snews2.org"
    }
  },
  {
    id: 7,
    type: "project",
    title: "Quantum Tic-Tac-Toe",
    website: "https://github.com/vanshjjw/q-tic-tac-toe",
    subtitle: "Game Development",
    image: "/images/projects/qtic-head.png",
    shortDescription: "A Quantum version of the classic Tic-Tac-Toe game-conceptualised and created in 24 hours.",
    buttons: {
      "View Code": "https://github.com/vanshjjw/q-tic-tac-toe",
      "Play Game": "https://github.com/vanshjjw/q-tic-tac-toe/blob/main/README.md"
    }
  },
  {
    id: 8,
    type: "project",
    title: "Ludum Dare 50 Game Jam",
    website: "https://github.com/vanshjjw/Ludum-Dare-22",
    subtitle: "Game Development",
    image: "/images/projects/ludumdare-head.png",
    shortDescription: "Created a zombie-apocalypse-based strategy and simulation game in 72 hours.",
    buttons: {
      "View Code": "https://github.com/vanshjjw/Ludum-Dare-22",
      "Play Game": "https://draconicchipmunk.itch.io/defending-hope"
    }
  }
];

export default experiencesData; 