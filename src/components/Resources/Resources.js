import React from 'react';
import './Resources.css';
import { RESOURCES_INTRO, resourcesList } from '../../assets/ResourcesData';

const ResourceItem = ({ resource }) => (
    <li className="resource-item">
        <a 
            href={resource.link} 
            className="resource-title"
            target="_blank"
            rel="noopener noreferrer"
        >
            {resource.title}
        </a>
        <span className="resource-description">{resource.description}</span>
    </li>
);

const ResourcesList = ({ resources }) => (
    <ul className="resources-list">
        {resources.map((resource, index) => (
            <ResourceItem key={index} resource={resource} />
        ))}
    </ul>
);

const Resources = () => {
    return (
        <div className="resources-container">
            <p className="resources-intro-text">
                {RESOURCES_INTRO}
            </p>
            
            <div className="resources-sections">
                {Object.entries(resourcesList).map(([category, resources]) => (
                    <div key={category} className="resource-section">
                        <h2 className="resource-section-heading">{category}</h2>
                        <ResourcesList resources={resources} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Resources;
