import React from 'react';
import './Resources.css';
import { ExternalLinkIcon } from '../../assets/Icons';
import { RESOURCES_INTRO, resourcesData } from '../../assets/ResourcesData';

const ResourceItem = ({ resource }) => (
    <div className="resource-item">
        <a 
            href={resource.link} 
            className="resource-link"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className="resource-bullet">•</span>
            <div className="resource-content">
                <span className="resource-name">{resource.title}: </span>
                <span className="resource-description">{resource.description}</span>
                <ExternalLinkIcon width={12} height={12} />
            </div>
        </a>
    </div>
);

const ResourceCategory = ({ title, items }) => (
    <div className="resource-category">
        <h2 className="category-title">{title}</h2>
        <div className="resources-list">
            {items.map((resource, index) => (
                <ResourceItem key={index} resource={resource} />
            ))}
        </div>
    </div>
);

const Resources = () => {
    return (
        <div className="resources-container">
            <div className="resources-intro">
                <p>{RESOURCES_INTRO}</p>
            </div>
            
            <div className="resources-content">
                {Object.entries(resourcesData).map(([category, items]) => (
                    <ResourceCategory key={category} title={category} items={items} />
                ))}
            </div>
        </div>
    );
};

export default Resources;
