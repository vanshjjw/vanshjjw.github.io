import React, { useState } from 'react';
import './Resume.css';
import { LocationIcon, RightArrowIcon } from '../../assets/Icons';

// Import data
import { software, research, leadership, entrepreneurship } from '../../assets/GraphicalData/SkillGraphData';
import experiencesData from '../../assets/GraphicalData/ExperiencesData';

// Helper function to format text with line breaks
const formatTextWithLineBreaks = (text) => {
    return text.split('\n\n').map((paragraph, index) => (
        <React.Fragment key={index}>
            {index > 0 && <br />}
            {paragraph}
        </React.Fragment>
    ));
};

// Keeping the same card structure from the original Resume component
const ExperienceCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasDescription = item.description && item.description.trim().length > 0;
    
    // Helper function to format subtitle with line breaks
    const formatSubtitle = (subtitle) => {
        if (!subtitle) return null;
        return subtitle.split('\n').map((line, index) => (
            <div key={index} className="subtitle-line">
                {line}
            </div>
        ));
    };
    
    const title = item.website ? (
        <a 
            href={item.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            onClick={(e) => e.stopPropagation()}
            className="card-title-link"
        >
            {item.title}
        </a>
    ) : (
        item.title
    );
    
    return (
        <div className="card-wrapper">
            <div 
                className={`resume-card ${isExpanded ? 'expanded' : ''} ${!hasDescription ? 'no-description' : ''}`} 
                onClick={() => hasDescription && setIsExpanded(!isExpanded)}
            >
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <div className="card-subtitle">
                        {formatSubtitle(item.subtitle)}
                    </div>
                    <div className="card-meta">
                        <div className="card-location"><LocationIcon />{item.location}</div>
                        <div className="card-dates">{item.dates}</div>
                    </div>
                    {hasDescription && (
                        <div className="card-expand-indicator">
                            <RightArrowIcon />
                        </div>
                    )}
                </div>
            </div>
            
            {hasDescription && isExpanded && (
                <div className="card-description-container">
                    <div className="card-description">
                        {formatTextWithLineBreaks(item.description)}
                    </div>
                </div>
            )}
        </div>
    );
};

// Simple Primary Skill Card component
const PrimarySkillCard = ({ skill }) => {
    return (
        <div className="primary-skill-card">
            <h3>{skill.name}</h3>
        </div>
    );
};

// Main Resume Component with 3-pane layout
const Resume = () => {
    const primarySkills = [software, research, leadership, entrepreneurship];

    return (
        <div className="resume-container">
            <div className="resume-layout">
                {/* Left Pane - Primary Skills */}
                <div className="pane primary-skills-pane">
                    <div className="primary-skills-container">
                        {primarySkills.map(skill => (
                            <PrimarySkillCard key={skill.id} skill={skill} />
                        ))}
                    </div>
                </div>

                {/* Middle Pane - Reserved for future use */}
                <div className="pane middle-pane">
                    {/* This pane is intentionally left empty */}
                </div>

                {/* Right Pane - Experiences */}
                <div className="pane experiences-pane">
                    <div className="experiences-container">
                        {experiencesData.map(experience => (
                            <ExperienceCard key={experience.id} item={experience} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume; 