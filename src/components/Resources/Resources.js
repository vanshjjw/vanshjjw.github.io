import React from 'react';
import './Resources.css';
import { ExternalLinkIcon } from '../../assets/Icons';

// Resource data structure
const resources = {
    "Learning Resources": [
        {
            title: "CS Learning Path",
            description: "A curated collection of computer science learning resources and roadmaps.",
            link: "https://github.com/jwasham/coding-interview-university",
            tags: ["Computer Science", "Learning", "Programming"]
        },
        {
            title: "Machine Learning Resources",
            description: "Comprehensive guide to machine learning concepts and implementations.",
            link: "https://github.com/josephmisiti/awesome-machine-learning",
            tags: ["ML", "AI", "Data Science"]
        }
    ],
    "Tools & Software": [
        {
            title: "Development Tools",
            description: "Essential tools and software for modern software development.",
            link: "https://github.com/sindresorhus/awesome",
            tags: ["Development", "Tools", "Software"]
        }
    ],
    "Interesting Reads": [
        {
            title: "Tech Blogs",
            description: "Collection of insightful tech blogs and articles.",
            link: "https://medium.com/topic/technology",
            tags: ["Technology", "Blogs", "Articles"]
        }
    ]
};

const ResourceCard = ({ resource }) => (
    <div className="resource-card">
        <h3 className="resource-title">{resource.title}</h3>
        <p className="resource-description">{resource.description}</p>
        <div className="resource-tags">
            {resource.tags.map((tag, index) => (
                <span key={index} className="resource-tag">
                    {tag}
                </span>
            ))}
        </div>
        <a 
            href={resource.link} 
            className="resource-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            Visit Resource
            <ExternalLinkIcon width={16} height={16} />
        </a>
    </div>
);

const Resources = () => {
    return (
        <div className="resources-container">
            <div className="resources-header">
                <h1>Resources & Recommendations</h1>
                <p className="resources-intro">
                    A curated collection of valuable resources, tools, and interesting content that I find helpful and worth sharing.
                </p>
            </div>
            
            <div className="resources-content">
                {Object.entries(resources).map(([category, items]) => (
                    <div key={category} className="resource-category">
                        <h2 className="category-title">{category}</h2>
                        <div className="resource-grid">
                            {items.map((resource, index) => (
                                <ResourceCard key={index} resource={resource} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
