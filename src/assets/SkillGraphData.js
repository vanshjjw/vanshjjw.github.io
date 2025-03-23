// Skill Graph Data Structure
// Primary skills -> Sub-skills -> Connections to experiences with strength levels

export const skillGraphData = {
  // Primary Skills
  primarySkills: [
    {
      id: "software",
      name: "Software Development",
      subSkills: [
        {
          id: "software-fullstack",
          name: "Full-Stack Development",
          tags: ["JavaScript", "React", "Node.js", "API", "Database", "ETL"],
          connections: [
            { experienceId: 2, strength: 0.9 },  // Ghyston Ltd
            { experienceId: 7, strength: 0.5 },  // Quantum Tic-Tac-Toe
            { experienceId: 8, strength: 0.6 }   // Ludum Dare 50 Game Jam
          ]
        },
        {
          id: "software-gamedev",
          name: "Game Development",
          tags: ["C#", "Unity Engine", "Game Design", "Simulation"],
          connections: [
            { experienceId: 7, strength: 0.7 },  // Quantum Tic-Tac-Toe
            { experienceId: 8, strength: 0.9 }   // Ludum Dare 50 Game Jam
          ]
        },
        {
          id: "software-optimization",
          name: "Software Optimization",
          tags: ["Python", "C++", "CUDA", "Algorithm Design"],
          connections: [
            { experienceId: 1, strength: 0.7 },  // UCL Research Intern
            { experienceId: 5, strength: 0.8 },  // Quantum Error Correction
            { experienceId: 6, strength: 0.9 }   // Supernova Early Warning System
          ]
        }
      ]
    },
    {
      id: "research",
      name: "Research",
      subSkills: [
        {
          id: "research-quantum",
          name: "Quantum Computing Research",
          tags: ["Quantum Computing", "Error Correction", "Qiskit"],
          connections: [
            { experienceId: 1, strength: 0.9 },  // UCL Research Intern
            { experienceId: 4, strength: 0.6 },  // Oxford Quantum Information Society
            { experienceId: 5, strength: 0.9 },  // Quantum Error Correction
            { experienceId: 7, strength: 0.7 }   // Quantum Tic-Tac-Toe
          ]
        },
        {
          id: "research-physics",
          name: "Physics Research",
          tags: ["Data Analysis", "Algorithm Design", "Astrophysics"],
          connections: [
            { experienceId: 6, strength: 0.9 }   // Supernova Early Warning System
          ]
        },
        {
          id: "research-methods",
          name: "Research Methodology",
          tags: ["Data Analysis", "Optimization", "Simulation"],
          connections: [
            { experienceId: 1, strength: 0.8 },  // UCL Research Intern
            { experienceId: 5, strength: 0.7 },  // Quantum Error Correction
            { experienceId: 6, strength: 0.8 }   // Supernova Early Warning System
          ]
        }
      ]
    },
    {
      id: "leadership",
      name: "Leadership",
      subSkills: [
        {
          id: "leadership-team",
          name: "Team Leadership",
          tags: ["Team Leadership", "Management"],
          connections: [
            { experienceId: 3, strength: 0.7 },  // STEP Ignite Incubator
            { experienceId: 4, strength: 0.9 }   // Oxford Quantum Information Society
          ]
        },
        {
          id: "leadership-event",
          name: "Event Management",
          tags: ["Event Management", "Community Building", "Education"],
          connections: [
            { experienceId: 4, strength: 0.9 }   // Oxford Quantum Information Society
          ]
        },
        {
          id: "leadership-project",
          name: "Project Management",
          tags: ["Project Management", "Organization"],
          connections: [
            { experienceId: 2, strength: 0.6 },  // Ghyston Ltd
            { experienceId: 3, strength: 0.7 },  // STEP Ignite Incubator
            { experienceId: 4, strength: 0.8 },  // Oxford Quantum Information Society
            { experienceId: 8, strength: 0.5 }   // Ludum Dare 50 Game Jam
          ]
        }
      ]
    },
    {
      id: "entrepreneurship",
      name: "Entrepreneurship",
      subSkills: [
        {
          id: "entrepreneurship-business",
          name: "Business Development",
          tags: ["Business Development", "Startup"],
          connections: [
            { experienceId: 3, strength: 0.9 }  // STEP Ignite Incubator
          ]
        },
        {
          id: "entrepreneurship-product",
          name: "Product Development",
          tags: ["Product Development", "Prototyping", "Quantum Technology"],
          connections: [
            { experienceId: 3, strength: 0.8 },  // STEP Ignite Incubator
            { experienceId: 5, strength: 0.5 }   // Quantum Error Correction (as a product)
          ]
        },
        {
          id: "entrepreneurship-innovation",
          name: "Innovation",
          tags: ["Innovation", "Problem Solving"],
          connections: [
            { experienceId: 3, strength: 0.9 },  // STEP Ignite Incubator
            { experienceId: 5, strength: 0.7 },  // Quantum Error Correction
            { experienceId: 6, strength: 0.7 },  // Supernova Early Warning System
            { experienceId: 7, strength: 0.8 }   // Quantum Tic-Tac-Toe
          ]
        }
      ]
    }
  ]
};

export default skillGraphData; 