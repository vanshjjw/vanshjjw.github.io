// ============================================
// Site Data - Single source of truth
// ============================================

import bio from "./bio";

export const personalInfo = {
  name: "Vansh Jhunjhunwala",
  bio: bio,
  resumeUrl: "https://drive.google.com/file/d/1MG8tog908lEOsdXt30iybHhyeHe4zl3e/view?usp=drive_link",
  locations: [
    { city: "Oxford", current: false },
    { city: "London", current: false },
    { city: "San Francisco", current: true },
  ],
};

export const projects = [
  {
    id: "qec",
    title: "Quantum Error Correction",
    description: "PyPI package for bivariate bicycle QEC codes",
    tags: ["Research", "Python", "2024"],
    links: {
      code: "https://github.com/vanshjjw/qec-bivariate-bicycle",
      demo: "https://pypi.org/project/qec-bb",
    },
  },
  {
    id: "snews",
    title: "SNEWS",
    description: "Supernova direction detection algorithms",
    tags: ["Research", "C++", "CUDA", "2023"],
    links: {
      code: "https://github.com/Ouroboros42/SNEWS/tree/Synergy",
      paper: "https://drive.google.com/file/d/1uaZvlwaqJsk_GwZzLsjl58ufeWkY0PoN/view?usp=drive_link",
      SNEWS: "https://snews2.org/",
    },
  },
  {
    id: "qttt",
    title: "Quantum Tic-Tac-Toe",
    description: "Quantum game built in 24 hours",
    tags: ["Hackathon", "Python", "Qiskit"],
    links: {
      code: "https://github.com/vanshjjw/q-tic-tac-toe",
    },
  },
  {
    id: "ld50",
    title: "Ludum Dare 50",
    description: "Zombie strategy game built in 72 hours",
    tags: ["Game Jam", "Unity", "C#"],
    links: {
      code: "https://github.com/vanshjjw/Ludum-Dare-22",
      play: "https://draconicchipmunk.itch.io/defending-hope",
    },
  },
];

export const experience = [
  {
    id: "canopy",
    title: "Canopy Labs",
    role: "ML Researcher",
    period: "2025–",
    url: "https://canopylabs.ai/",
  },
  {
    id: "oxford",
    title: "University of Oxford",
    role: "Master's, Mathematical & Theoretical Physics\nBachelor's, Physics",
    period: "2021–25",
    url: "https://www.ox.ac.uk/",
  },
  {
    id: "ucl",
    title: "University College London",
    role: "Research Intern",
    period: "2024",
    url: "https://www.ucl.ac.uk/quantum/",
  },
  {
    id: "ghyston",
    title: "Ghyston",
    role: "Software Developer Intern",
    period: "2023",
    url: "https://www.ghyston.com/",
  },
  {
    id: "step",
    title: "STEP Ignite Incubator",
    role: "Student Entrepreneur",
    period: "2022",
    url: "https://unistep.org/",
  },
  {
    id: "oqs",
    title: "Oxford University Quantum Information Society",
    role: "President",
    period: "2023–24",
    url: "https://www.oxfordquantum.org/",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/vanshjjw",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vansh-jhunjhunwala-a7b291208/",
  },
  {
    name: "Letterboxd",
    url: "https://letterboxd.com/BaryonCollider/",
  },
];

export const influences = [
  {
    title: "The Feynman Lectures on Physics",
    author: "Richard Feynman",
    type: "lectures",
    url: "https://www.feynmanlectures.caltech.edu/",
  },
  {
    title: "Gödel, Escher, Bach",
    author: "Douglas Hofstadter",
    type: "book",
    url: "https://en.wikipedia.org/wiki/G%C3%B6del,_Escher,_Bach",
  },
  {
    title: "Cities and Ambition",
    author: "Paul Graham",
    type: "essay",
    url: "https://paulgraham.com/cities.html",
  },
  {
    title: "The Structure of Scientific Revolutions",
    author: "Thomas Kuhn",
    type: "book",
    url: "https://en.wikipedia.org/wiki/The_Structure_of_Scientific_Revolutions",
  },
  {
    title: "You and Your Research",
    author: "Richard Hamming",
    type: "talk",
    url: "https://www.cs.virginia.edu/~robins/YouAndYourResearch.html",
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    type: "book",
    url: "https://en.wikipedia.org/wiki/Meditations",
  },
  {
    title: "How to Do Great Work",
    author: "Paul Graham",
    type: "essay",
    url: "https://paulgraham.com/greatwork.html",
  },
];

export const resources = [
  {
    title: "How to Become a Good Theoretical Physicist",
    description: "Gerard 't Hooft's self-study guide",
    url: "https://www.goodtheorist.science/",
  },
  {
    title: "So You Want to Study Physics",
    description: "Susan Fowler's physics self-study guide",
    url: "https://www.susanrigetti.com/physics",
  },
  {
    title: "The Missing Semester",
    description: "CS tools they don't teach in school",
    url: "https://missing.csail.mit.edu/",
  },
  {
    title: "Teach Yourself CS",
    description: "Self-study guide for computer science",
    url: "https://teachyourselfcs.com/",
  },
  {
    title: "nand2tetris",
    description: "Build a computer from first principles",
    url: "https://www.nand2tetris.org/",
  },
  {
    title: "Seeing Theory",
    description: "Visual introduction to probability",
    url: "https://seeing-theory.brown.edu/",
  },
];
