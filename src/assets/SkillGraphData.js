// Skill Graph Data Structure
// Primary skills contain connections, tools and subskills
// - connections: direct links to experiences
// - tools: combined list of all tools/technologies 
// - subskills: list of skill subcategories

// Experience ids are as follows:
// 1. Oxford
// 2. UCL
// 3. Ghyston Ltd
// 4. STEP Ignite Incubator
// 5. Oxford Quantum Information Society
// 6. Oxford Entrepreneurs
// 7. Personal Projects

const software = {
  id: 1,
  name: "Software",
  connections: [1, 2, 3, 7],
  subskills: [
    "Algorithm Development & Optimisation",
    "Full-Stack Web Development",
    "Computational Physics Software",
    "Simulation & Modeling"
  ],
  tools: [ 
    "Python", 
    "Java",
    "React",
    "Node.js",
    "C#",
    ".NET",
    "C++",
    "CUDA",
    "Docker",
    "Git",
    "Azure DevOps",
    "Unix/Linux",
  ]
}

const research = {
  id: 2,
  name: "Research",
  connections: [1, 2, 7],
  subskills: [
    "Theoretical and Computational Physics",
    "Quantum Information and Computing",
    "Statistics and Inference",
  ],
  tools: [
    "Python",
    "Julia",
    "C++",
    "Qiskit",
    "Data Analysis",
    "Numerical Methods",
    "Algorithm Design",
    "Error Correction",
  ]
}

const leadership = {
  id: 3,
  name: "Leadership",
  connections: [4, 5, 6],
  subskills: [
    "Student Society Management",
    "Entrepreneurship & Innovation",
    "Hackathons & Project Leadership"
  ]
}

// Export the skills
export { software, research, leadership };

// Also export as default for convenience
export default { software, research, leadership };


