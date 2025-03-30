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
// 6. Oxford Entreprenuers
// 7. Personal Projects

const software = {
  id: 1,
  name: "Software",
  connections: [2, 3, 4],
  tools: [
    "JavaScript", 
    "API Endpoints", 
    "Database ETL", 
    "Web Components", 
    "Python", 
    "Docker",
    "Performance Tuning", 
    "Custom Algorithms", 
    "Computational Speedup", 
    "Numerical Methods", 
    "Complexity Analysis",
    "Physics Systems", 
    "Racing Simulations", 
    "Aerodynamics", 
    "Game Development", 
    "Data Visualization"
  ],
  subskills: [
    "Full-Stack Development",
    "Algorithm Development & Optimization",
    "Simulation & Modeling"
  ]
}

const research = {
  id: 2,
  name: "Research",
  connections: [1, 2, 4, 6],
  tools: [
    "Error Correction", 
    "Qiskit", 
    "Data Analysis", 
    "Algorithm Design", 
    "Astrophysics", 
    "Optimization", 
    "Simulation"
  ],
  subskills: [
    "Quantum Computing",
    "Physics and Computer Science",
    "Research Methodology"
  ]
}

const leadership = {
  id: 3,
  name: "Leadership",
  connections: [1, 3, 4, 5, 6],
  tools: [
    "President Experience", 
    "Event Planning", 
    "Membership Growth", 
    "Budget Management", 
    "Strategic Vision",
    "Startup Co-founding", 
    "Product Development", 
    "Prototype Design", 
    "Pitching", 
    "Industry Collaboration",
    "Hackathon Performance", 
    "Time-Constrained Projects", 
    "Team Coordination", 
    "Goal Achievement"
  ],
  subskills: [
    "Academic & Society Management",
    "Entrepreneurship & Innovation",
    "Competition & Project Leadership"
  ]
}

// Export the skills
export { software, research, leadership };

// Also export as default for convenience
export default { software, research, leadership };


