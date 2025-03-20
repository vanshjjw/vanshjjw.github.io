export const education = [
    {
        id: "edu1",
        title: "University of Oxford",
        website: "https://www.ox.ac.uk/",
        subtitle: "Masters, Mathematical and Theoretical Physics\nBachelor of Arts, Physics",
        location: "Oxford, UK",
        dates: "2021 - 2025",
        description: "Completed a Bachelor's in Physics (2021-2023) with First Class Honours, ranking 21st out of 145 students. Currently pursuing a Master's specializing in quantum information, condensed matter, and computational algorithms.\n\nDissertation on 'ZX-calculus for quantum error-correction' under Professor Aleks Kissinger. Received the Fox Prize for ranking in the top 5% in 1st-year exams and multiple Academic Scholar Prizes for excellence in university exams."
    },
    {
        id: "edu2",
        subtitle: "Indian School Certificate",
        title: "La Martinere for Boys",
        website: "https://www.lamartinerieschool.com/",
        location: "Kolkata, India",
        dates: "2019 - 2021",
        description: "High school education with a strong academic record. Achieved top grades in Physics, Mathematics, and Computer Science. Participated in various academic competitions and extracurricular activities."
    }
];

export const workExperience = [
    {
        id: "exp1",
        title: "University College London",
        subtitle: "Research Intern",
        location: "London, UK",
        dates: "Jul - Sep 2024",
        description: "Investigated the structure of a novel 'bivariate bicyclic' quantum error correction code. Constructed an algorithm to improve code by examining connectivity graphs. Created a comprehensive codebase to optimise the search for useful correction codes, visualise their properties, and evaluate generalised versions. Published results on PyPI."
    },
    {
        id: "exp2",
        title: "Software Developer",
        subtitle: "Ghyston Ltd",
        location: "Bristol, UK",
        dates: "Jul - Sep 2023",
        description: "Worked across multiple projects, contributing full-stack components including database ETL pipelines and API endpoints."
    },
    {
        id: "exp3",
        title: "Student Entrepreneur",
        subtitle: "Oxford University Innovation Incubator",
        location: "Oxford, UK",
        dates: "Jul - Aug 2022",
        description: "Co-founded a startup to utilise quantum memristors as anti-counterfeiting devices."
    }
];

export const otherExperience = [
    {
        id: "other1",
        title: "Oxford Quantum Information Society",
        subtitle: "President",
        location: "Oxford, UK",
        dates: "2023 - Present",
        description: "Led the society's initiatives in quantum computing education and outreach. Organized workshops, seminars, and networking events with industry professionals."
    }
];


export const skills = {
    languages: {
        category: "Languages",
        items: [
            { name: "Python", specialty: "Qiskit, Django" },
            { name: "Java" },
            { name: "C/C++" },
            { name: "JavaScript/TypeScript", specialty: "React" },
            { name: "C#" },
            { name: "SQL" },
            { name: "CUDA" }
        ]
    },
    tools: {
        category: "Tools & Frameworks",
        items: [
            { name: "Git" },
            { name: "Docker" },
            { name: "Unix/Linux" },
            { name: "ASP.NET Core" },
            { name: "Entity Framework" },
            { name: "Node.js" },
            { name: "Azure DevOps" }
        ]
    },
    other: {
        category: "Other Skills",
        items: [
            { name: "Team Leadership", specialty: "President of Oxford Quantum Information Society" },
            { name: "Event Organization", specialty: "Workshops and seminars" },
            { name: "Project Management", specialty: "Research and development projects" },
            { name: "Academic Presentation", specialty: "Research presentations" },
            { name: "Technical Writing", specialty: "Research documentation" },
            { name: "Cross-functional Collaboration", specialty: "Working across disciplines" },
            { name: "Entrepreneurship", specialty: "Oxford University Innovation Incubator" },
            { name: "Networking", specialty: "Industry connections" }
        ]
    }
};
