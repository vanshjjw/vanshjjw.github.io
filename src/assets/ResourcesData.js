// Text constants for Resources page

export const RESOURCES_INTRO = `
A curated collection of resources that have shaped my thinking and learning journey. 
These are books, articles, and tools I've found particularly valuable and return to frequently.`


const Physics = [
        {
            title: "Quantum Computing for the Very Curious",
            description: "An interactive essay introducing quantum computing concepts.",
            link: "https://quantum.country/qcvc"
        },
        {
            title: "Feynman Lectures on Physics",
            description: "The complete collection of Feynman's legendary lectures.",
            link: "https://www.feynmanlectures.caltech.edu/"
        },
        {
            title: "Arxiv Quantum Physics",
            description: "Latest research papers in quantum physics.",
            link: "https://arxiv.org/list/quant-ph/recent"
        }
    ]



const ComputerScience = [
    {
        title: "Teach Yourself CS",
        description: "A well-structured self-learning guide covering CS fundamentals.",
        link: "https://teachyourselfcs.com/"
    },
    {
        title: "CS Research Papers Everyone Should Read",
        description: "Collection of influential computer science papers.",
        link: "https://github.com/papers-we-love/papers-we-love"
    },
    {
        title: "Coding Interview University",
        description: "A complete computer science study plan for becoming a software engineer.",
        link: "https://github.com/jwasham/coding-interview-university"
    }
    
]       


const Startups = [
    {
        title: "Y Combinator Library",
        description: "Startup advice and resources from Y Combinator.",
        link: "https://www.ycombinator.com/library"
    },
    {
        title: "Paul Graham's Essays",
        description: "Essays on startups, programming, and other topics by Y Combinator founder.",
        link: "http://www.paulgraham.com/articles.html"
    },
    {
        title: "Indie Hackers",
        description: "Community of founders sharing their journeys and revenue numbers.",
        link: "https://www.indiehackers.com/"
    }
]




// Resource data organized by category
export const resourcesData = {
    "Physics": Physics,
    "Computer Science": ComputerScience,
    "Startups": Startups
}