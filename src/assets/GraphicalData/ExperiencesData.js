
// experiences

const oxfordDescription =
`
My Master's consists of courses on **Quantum Information**, **Condensed Matter** and **Computational Algorithms**.
My dissertation is on Quantum error correction and **ZX-calculus**. My Bachelor's was dominated by courses and
explorations at the intersection of **physics** and **computer science**.
`

const uclDescription =
`
I researched quantum error-correction (**bivariate bicycle**) codes. I did some work on optimising their numerical search, 
generalising their construction to more groups, and finding useful families of such codes. 
I ended up creating a **python package** to deliver all this work.
`

const ghystonDescription =
`   
I trained as a **full-stack developer**, and worked on multiple projects. I created database 
ETL pipelines, API endpoints, and frontend features. I also built and deployed advanced 
web scrapers using **Python** and **Docker**.
`


const oxfordIncubatorDescription =
    `
I co-founded a startup to use **quantum memristors** as anti-counterfeiting devices. 
I worked on both the business and technical side of things. I helped **develop a product** from existing IP, 
**create a business plan**, and **pitch** to potential investors.
`


const oqsDescription =
`
I revamped the society to focus more on **undergraduates** and **access**. I organised some of the largest events in 
the society's history and liaised with speakers, sponsors and industry partners.

`

const oxfordEntreprenuersDescription =
`
I organised events, panels and initiatives focused on **consolidating** and **promoting** entrepreneurship at Oxford. 

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
    dates: "Jul - Aug 2022",
    description: oxfordIncubatorDescription
  },
  
  // Other Experiences
  {
    id: 5,
    type: "other-experience",
    title: "Oxford University Quantum Information Society",
    website: "https://www.oxfordquantum.org/",
    subtitle: "President",
    location: "Oxford, UK",
    dates: "Apr 2023 - Apr 2024",
    description: oqsDescription
  },
  {
    id: 6,
    type: "other-experience",
    title: "Oxford Entreprenuers",
    website: "https://www.oxfordentrepreneurs.co.uk/",
    subtitle: "Executive Committee",
    location: "Oxford, UK",
    dates: "Oct 2023 - Apr 2025",
    description: oxfordEntreprenuersDescription
  },

  // Placeholder card for all projects that links to the projects page
  {
    id: 0,
    type: "other-experience",
    title: "Personal Projects",
    subtitle: "\n\nSee Projects Page for demos and details",
    website: "/projects",
  }
];

export default experiencesData; 