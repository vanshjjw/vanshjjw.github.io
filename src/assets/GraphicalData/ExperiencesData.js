
// experiences

const oxfordDescription =
`
My Master's consists of courses on **Quantum Information**, **Condensed Matter** and **Computational Algorithms**.
My dissertation is on Quantum error correction and **ZX-calculus**. My Bachelor's was dominated by courses and
explorations at the intersection of **physics** and **computer science**.
`

const uclDescription =
`
I worked with Professor Dan Browne, and researched quantum error-correction codes 
(specifically the bivariate bicycle codes). I did some work on optimisation these codes, creating nice families 
of such codes and ended up creating a python package to do so.
`

const ghystonDescription =
`   
I worked as a full-stack developer, and worked on multiple projects. I worked on the backend of a project to
create a database ETL pipeline, and also worked on the frontend of a project to create an API endpoint.
I also worked on a project to create a web app for a client, and worked on the backend of that project.
`


const oxfordIncubatorDescription =
    `
I co-founded a startup to use quantum memristors as anti-counterfeiting devices. 
I worked on the business side of things, and also did some work on the technical side.
I worked on the business plan, and also did some work on the technical side to create a prototype of the device.
`


const oqsDescription =
`
Led the society's initiatives in quantum computing education and outreach. Organized workshops, 
seminars, and networking events with industry professionals.
`



export const experiencesData = [

  // Education
  {
    id: 1,
    type: "education",
    title: "University of Oxford",
    website: "https://www.ox.ac.uk/",
    subtitle: "Master's, Mathematical and Theoretical Physics\nBachelor's, Physics",
    location: "Oxford, UK",
    dates: "2021 - 2025",
    description: oxfordDescription
  },


  // Work Experiences
  {
    id: 2,
    type: "work-experience",
    title: "University College London",
    website: "https://www.ucl.ac.uk/quantum/study-here/quantum-doctoral-programmes",
    subtitle: "Research Intern",
    location: "London, UK",
    dates: "Jul - Sep 2024",
    description: uclDescription
  },
  {
    id: 3,
    type: "work-experience",
    title: "Ghyston Ltd",
    website: "https://www.ghyston.com/",
    subtitle: "Software Developer",
    location: "Bristol, UK",
    dates: "Jul - Sep 2023",
    description: ghystonDescription
  },
  {
    id: 4,
    type: "work-experience",
    title: "STEP Ignite Incubator",
    website: "https://unistep.org/",
    subtitle: "Student Entrepreneur",
    location: "Oxford, UK",
    dates: "Jl - Aug 2022",
    description: oxfordIncubatorDescription
  },
  
  // Other Experiences
  {
    id: 5,
    type: "other-experience",
    title: "Oxford Quantum Information Society",
    website: "https://www.oxfordquantum.org/",
    subtitle: "President",
    location: "Oxford, UK",
    dates: "Apr 2023 - Apr 2024",
    description: oqsDescription
  },

  // Placeholder card for all projects that links to the projects page
  {
    id: 0,
    type: "project",
    title: "Projects",
    description: "See Projects Page for demos and more details",
    website: "/projects",
  }
];

export default experiencesData; 