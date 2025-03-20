
const oxfordDescription =
`
Masters (Ongoing): Specialising in Quantum Information, Condensed Matter and Computational Algorithms. \n\n\n

Bachelors: Achieved First-Class Honours (Ranked 21 out of 145)
`

const lmbDescription =
`
High School Diploma with 98.5% Aggregate.
`



export const education = [
    {
        id: "edu1",
        title: "University of Oxford",
        website: "https://www.ox.ac.uk/",
        subtitle: "Masters, Mathematical and Theoretical Physics\nBachelor of Arts, Physics",
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

export const workExperience = [
    {
        id: "exp1",
        title: "University College London",
        website: "https://www.ucl.ac.uk/",
        subtitle: "Research Intern",
        location: "London, UK",
        dates: "Jul - Sep 2024",
        description: "Investigated the structure of a novel 'bivariate bicyclic' quantum error correction code. Constructed an algorithm to improve code by examining connectivity graphs. Created a comprehensive codebase to optimise the search for useful correction codes, visualise their properties, and evaluate generalised versions. Published results on PyPI."
    },
    {
        id: "exp2",
        title: "Ghyston Ltd",
        website: "https://www.ghyston.com/",
        subtitle: "Software Developer",
        location: "Bristol, UK",
        dates: "Jul - Sep 2023",
        description: "Worked across multiple projects, contributing full-stack components including database ETL pipelines and API endpoints."
    },
    {
        id: "exp3",
        title: "Oxford University Innovation Incubator",
        website: "https://innovation.ox.ac.uk/",
        subtitle: "Student Entrepreneur",
        location: "Oxford, UK",
        dates: "Jul - Aug 2022",
        description: "Co-founded a startup to utilise quantum memristors as anti-counterfeiting devices."
    }
];

export const otherExperience = [
    {
        id: "other1",
        title: "Oxford Quantum Information Society",
        website: "https://www.oxfordquantum.org/",
        subtitle: "President",
        location: "Oxford, UK",
        dates: "2023 - Present",
        description: "Led the society's initiatives in quantum computing education and outreach. Organized workshops, seminars, and networking events with industry professionals."
    }
];


export const skills = {
    "Languages": [
        "Python (Qiskit, Django)",
        "Java",
        "C/C++",
        "JavaScript/TypeScript (React)",
        "C#",
        "SQL",
        "CUDA"
    ],
    "Tools & Frameworks": [
        "Git",
        "Docker",
        "Unix/Linux",
        "ASP.NET Core",
        "Entity Framework",
        "Node.js",
        "Azure DevOps"
    ],
    "Other Skills": [
        "Team Leadership",
        "Event Organization",
        "Project Management",
        "Academic Presentation",
        "Technical Writing",
        "Cross-functional Collaboration",
        "Entrepreneurship",
        "Networking"
    ]
};
