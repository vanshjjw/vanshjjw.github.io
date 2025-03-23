
// #############################################
//              Education
// #############################################


const oxfordDescription =
`
In my Masters, I am mostly doing courses on Quantum Information, Condensed Matter and Computational Algorithms.
In my Bachelors, I achieved First-Class Honours and ranked 21 out of 145. 
`

const lmbDescription =
`
I scored a 98.2% aggregate in my ISC exams, and won a few awards for overall excellence throughout my time in school.
`

export const education = [
    {
        id: "edu1",
        title: "University of Oxford",
        website: "https://www.ox.ac.uk/",
        subtitle: "Masters, Mathematical and Theoretical Physics\nBachelors, Physics",
        location: "Oxford, UK",
        dates: "2021 - 2025",
        description: oxfordDescription
    },
    {
        id: "edu2",
        title: "La Martinere for Boys",
        subtitle: "Indian School Certificate",
        website: "https://wbacs.in/la-martiniere-for-boys-kolkata",
        location: "Kolkata, India",
        dates: "2017 - 2021",
        description: lmbDescription
    }
];


// #############################################
//              Work Experience
// #############################################


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

export const workExperience = [
    {
        id: "exp1",
        title: "University College London",
        website: "https://www.ucl.ac.uk/quantum/study-here/quantum-doctoral-programmes",
        subtitle: "Research Intern",
        location: "London, UK",
        dates: "Jul - Sep 2024",
        description: uclDescription
    },
    {
        id: "exp2",
        title: "Ghyston Ltd",
        website: "https://www.ghyston.com/",
        subtitle: "Software Developer",
        location: "Bristol, UK",
        dates: "Jul - Sep 2023",
        description: ghystonDescription
    },
    {
        id: "exp3",
        title: "STEP Ignite Incubator",
        website: "https://unistep.org/",
        subtitle: "Student Entrepreneur",
        location: "Oxford, UK",
        dates: "Jl - Aug 2022",
        description: oxfordIncubatorDescription
    }
];



// #############################################
//              Other Experience
// #############################################


const oqsDescription =
`
Led the society's initiatives in quantum computing education and outreach. Organized workshops, 
seminars, and networking events with industry professionals.
`




export const otherExperience = [
    {
        id: "other1",
        title: "Oxford Quantum Information Society",
        website: "https://www.oxfordquantum.org/",
        subtitle: "President",
        location: "Oxford, UK",
        dates: "2023 - Present",
        description: oqsDescription
    }
];




// #############################################
//              Skills
// #############################################



export const skills = {
    "Languages": [
        "Python",
        "Java",
        "JavaScript",
        "React",
        "C#",
        "C++",
        "CUDA"
    ],
    "Tools & Frameworks": [
        "Git",
        "Docker",
        "ASP.NET Core",
        "Entity Framework",
        "Node.js",
        "Azure DevOps"
    ],
    "Other Skills": [
        "Team Leadership",
        "Events",
        "Management",
        "Presentations"
    ]
};
