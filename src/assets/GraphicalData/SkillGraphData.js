// Skill Graph Data Structure
// Primary skills contain Sub-skills
// Sub-skills contain a list of speciifc names/tags and connections to experiences


// Currently there are 4 primary skills
// 1. Software Development
// 2. Research
// 3. Leadership


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
  subSkills:  [
        {
          id: "11",
          name: "Full-Stack Development",
          tags: ["JavaScript", "API Endpoints", "Database ETL", "Web Components", "Python", "Docker"],
          connections: [3]
        },
        {
          id: "12",
          name: "Algorithm Development & Optimization",
          tags: ["Performance Tuning", "Custom Algorithms", "Computational Speedup", "Numerical Methods", "Complexity Analysis"],
          connections: [2, 4]
        },
        {
          id: "13",
          name: "Simulation & Modeling",
          tags: ["Physics Systems", "Racing Simulations", "Aerodynamics", "Game Development", "Data Visualization"],
          connections: [2, 4]
        }
  ]
}

const research = {
  id: 2,
  name: "Research",
  subSkills: [
    {
      id: "21",
      name: "Quantum Computing",
      tags: ["Error Correction", "Qiskit", ],
      connections: [2, 4]
    },
    {
      id: "22",
      name: "Physics and Computer Science",
      tags: ["Data Analysis", "Algorithm Design", "Astrophysics"],
      connections: [2, 4]
    },
    {
      id: "23",
      name: "Research Methodology",
      tags: ["Data Analysis", "Optimization", "Simulation"],
      connections: [1, 6]
    }
  ]
}

const leadership = {
  id: 3,
  name: "Leadership",
  subSkills: [
    {
      id: "31",
      name: "Academic & Society Management",
      tags: ["President Experience", "Event Planning", "Membership Growth", "Budget Management", "Strategic Vision"],
      connections: [1, 6]
    },
    {
      id: "32",
      name: "Entrepreneurship & Innovation",
      tags: ["Startup Co-founding", "Product Development", "Prototype Design", "Pitching", "Industry Collaboration"],
      connections: [3, 4, 5]
    },
    {
      id: "33",
      name: "Competition & Project Leadership",
      tags: ["Hackathon Performance", "Time-Constrained Projects", "Team Coordination", "Goal Achievement"],
      connections: [3, 4, 5]
    },
    
  ]
}




// // Export the skills
export { software, research, leadership };

// // Also export as default for convenience
export default { software, research, leadership };


