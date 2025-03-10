export const education = [
    {
        id: "edu1",
        degree: "Masters in Mathematical and Theoretical Physics",
        institution: "University of Oxford",
        location: "Oxford, UK",
        dates: "2021 - 2025",
        description: "Specialising in quantum information, condensed matter, and computational algorithms. Dissertation on 'ZX-calculus for quantum error-correction' under Professor Aleks Kissinger.",
        awards: ["Fox Prize for ranking in the top 5% in 1st-year exams", "Academic Scholar Prize (x3) for sustained excellence in university exams"],
        highlights: ["Ranked 21st out of 145 in BA Physics", "First Class Honours"]
    },
    {
        id: "edu2",
        degree: "Indian School Certificate",
        institution: "La Martinere for Boys",
        location: "Kolkata, India",
        dates: "2019 - 2021",
        description: "High school education with a strong academic record."
    }
];

export const experience = [
    {
        id: "exp1",
        role: "Research Intern",
        company: "University College London",
        location: "London, UK",
        dates: "Jul - Sep 2024",
        description: "Investigated the structure of a novel ‘bivariate bicyclic’ quantum error correction code.",
        responsibilities: [
            "Constructed an algorithm to improve a given code by examining the underlying connectivity graphs.",
            "Created a comprehensive codebase to optimise the search for useful correction codes, visualise their properties, and evaluate generalised versions.",
            "Published results on PyPI."
        ],
        technologies: ["Python", "Graph Theory", "Quantum Error Correction"]
    },
    {
        id: "exp2",
        role: "Software Developer",
        company: "Ghyston Ltd",
        location: "Bristol, UK",
        dates: "Jul - Sep 2023",
        description: "Worked across multiple projects, contributing full-stack components including database ETL pipelines and API endpoints.",
        responsibilities: [
            "Designed and deployed robust web scrapers with Python and Docker.",
            "Enhanced front-end elements and incorporated features like proxy handling, JavaScript rendering, and headless browsing."
        ],
        technologies: ["Python", "Docker", "JavaScript", "Web Scraping"]
    },
    {
        id: "exp3",
        role: "Student Entrepreneur",
        company: "Oxford University Innovation Incubator",
        location: "Oxford, UK",
        dates: "Jul - Aug 2022",
        description: "Co-founded a startup to utilise quantum memristors as anti-counterfeiting devices.",
        responsibilities: [
            "Successfully pitched and secured offers of collaboration from industry experts and venture capitalists.",
            "Conducted an in-depth market analysis and constructed business models based on circuit design, cybersecurity, and global supply chains."
        ],
        technologies: ["Quantum Computing", "Cybersecurity", "Business Strategy"]
    }
];

export const projects = [
    {
        id: "proj1",
        title: "Supernova Early Warning System",
        description: "Developed a custom algorithm and GPU-accelerated implementation to solve a speed bottleneck in a supernova detection method.",
        dates: "Dec - Mar 2024",
        link: "",
        github: "",
        technologies: ["Python", "CUDA", "GPUs", "Statistical Analysis"],
        highlights: [
            "Achieved a 900x speed-up (25 hours to 2 minutes)",
            "Validated algorithm inference and confidence intervals through extensive statistical analyses."
        ]
    },
    {
        id: "proj2",
        title: "Quantum Backtracking Algorithm",
        description: "Implemented and benchmarked a proposed quantum backtracking algorithm to solve constrained search problems.",
        dates: "Oct - Jan 2024",
        link: "",
        github: "",
        technologies: ["Quantum Computing", "Python"],
        highlights: [
            "Benchmarked against classical analogues and quantified quantum advantage.",
            "Validated predicted complexity and identified optimisation areas."
        ]
    }
];

export const skills = {
    technical: [
        { category: "Programming Languages", items: ["Python (Qiskit, Django)", "Java", "C/C++", "C#", "CUDA", "React", "TypeScript", "SQL"] },
        { category: "Frameworks & Tools", items: ["Docker", "Git", "Unix", "ASP.NET Core", "Entity Framework", "Node.js", "Azure DevOps"] }
    ],
    extracurriculars: [
        { category: "Leadership & Student Committees", items: ["President, Oxford Quantum Information Society", "Oxford Entrepreneurs", "CapitOx Consulting Group", "Corpus Christi College JCR"] }
    ]
};
