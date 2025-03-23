// Skill Graph Data Structure
// Primary skills contain Sub-skills
// Sub-skills contain a list of speciifc names/tags and connections to experiences



// Currently there are 4 primary skills
// 1. Software Development
// 2. Research
// 3. Leadership
// 4. Entrepreneurship


// Experience ids are as follows:
// 0. Personal Projects
// 1. Oxford 
// 2. UCL
// 3. Ghyston Ltd
// 4. STEP Ignite Incubator
// 5. Oxford Quantum Information Society



const software = {
  id: 0,
  name: "Software Engineering",
  subSkills: [
    {
      id: "software-fullstack",
      name: "Full-Stack Development",
      tags: ["JavaScript", "React", "Node.js", "API", "Database", "ETL"],
      connections: [2, 3, 4]
    },
    {
      id: "software-gamedev",
      name: "Game Development",
      tags: ["C#", "Unity Engine", "Game Design", "Simulation"],
      connections: [0]
    },
    {
      id: "software-optimization",
      name: "Software Optimization",
      tags: ["Python", "C++", "CUDA", "Algorithm Design"],
      connections: [1, 4]
    }
  ]
}


const research = {
  id: 1,
  name: "Research",
  subSkills: [
    { 
      id: "research-quantum",
      name: "Quantum Computing Research",
      tags: ["Quantum Computing", "Error Correction", "Qiskit"],
      connections: [1, 4]
    },    
    {
      id: "research-physics",
      name: "Physics Research",
      tags: ["Data Analysis", "Algorithm Design", "Astrophysics"],
      connections: [4]
    },
    {     
      id: "research-methods",
      name: "Research Methodology",
      tags: ["Data Analysis", "Optimization", "Simulation"],
      connections: [1, 4]
    }
  ]
}

const leadership = {  
  id: 2,
  name: "Leadership",
  subSkills: [
    {
      id: "leadership-team",
      name: "Team Leadership",
      tags: ["Team Leadership", "Management"],
      connections: [2, 3, 4]
    },
    {
      id: "leadership-event",
      name: "Event Management",
      tags: ["Event Management", "Community Building", "Education"],
      connections: [2, 3, 4]
    }
  ]
}

const entrepreneurship = {
  id: 3,
  name: "Entrepreneurship",
  subSkills: [
    {
      id: "entrepreneurship-business",
      name: "Business Development",
      tags: ["Business Development", "Startup"],
      connections: [2, 3, 4]
    },
    {
      id: "entrepreneurship-product",
      name: "Product Development",
      tags: ["Product Development", "Prototyping", "Quantum Technology"],
      connections: [2, 3, 4]
    }

  ]
}

// Export the skills
export { software, research, leadership, entrepreneurship };

// Also export as default for convenience
export default { software, research, leadership, entrepreneurship };
