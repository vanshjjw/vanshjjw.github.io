import React, { useState } from 'react';
import { education, workExperience, otherExperience, skills } from './ResumeData';
import {
    FlipIcon,
    RightArrowIcon,
    LocationIcon,
    DownloadIcon,
    EducationIcon,
    WorkExperienceIcon,
    OtherExperienceIcon,
    SkillsIcon
} from '../../assets/Icons';
import './Resume.css';



// Helper function to format text with line breaks
const formatTextWithLineBreaks = (text) => {
    return text.split('\n\n').map((paragraph, index) => (
        <React.Fragment key={index}>
            {index > 0 && <br />}
            {paragraph}
        </React.Fragment>
    ));
};

// Replace FlipCard with ExpandableCard
const ExpandableCard = ({ item }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Helper function to format subtitle with line breaks
    const formatSubtitle = (subtitle) => {
        return subtitle.split('\n').map((line, index) => (
            <div key={index} className="subtitle-line">
                {line}
            </div>
        ));
    };
    
    return (
        <div className={`expandable-card ${isExpanded ? 'expanded' : ''}`} onClick={() => setIsExpanded(!isExpanded)}>
            <div className="card-front">
                <h3 className="card-title">{item.title}</h3>
                <div className="card-subtitle">
                    {formatSubtitle(item.subtitle)}
                </div>
                <div className="card-location"><LocationIcon />{item.location}</div>
                <span className="card-dates">{item.dates}</span>
                <div className="card-hover-hint">
                    <RightArrowIcon />
                </div>
            </div>
            <div className="card-description-panel">
                <p className="card-description">{formatTextWithLineBreaks(item.description)}</p>
            </div>
        </div>
    );
};

// Update ResumeSection to use new card style
const ResumeSection = ({ title, icon: Icon, data }) => {
    return (
        <div className="resume-section">
            <div className="section-header">
                <div className="section-icon">
                    <Icon />
                </div>
                <h2 className="section-title">{title}</h2>
            </div>
            
            <div className="cards-container">
                {data.map(item => (
                    <ExpandableCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

// Skill Card component with skills displayed as tags
const SkillCard = ({ category, items }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    return (
        <div className="skill-card-container">
            <div 
                className={`skill-card ${isExpanded ? 'expanded' : ''}`} 
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <div className="skill-card-front">
                    <h3 className="skill-title">{category}</h3>
                    <div className="skill-count">{items.length} {items.length === 1 ? 'skill' : 'skills'}</div>
                    <div className="skill-hover-hint">
                        <RightArrowIcon />
                    </div>
                </div>
            </div>
            <div className={`skill-content-panel ${isExpanded ? 'expanded' : ''}`}>
                <div className="skill-content">
                    <div className="skill-tags-container">
                        {items.map((skill, index) => (
                            <span key={index} className="skill-tag">
                                {skill.name}
                                {skill.specialty && (
                                    <span className="skill-specialty-tag"> ({skill.specialty})</span>
                                )}
                                {skill.context && (
                                    <span className="skill-specialty-tag"> ({skill.context})</span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

// Updated Skills Section with simplified data structure
const SkillsSection = () => {
    return (
        <div className="resume-section">
            <div className="section-header">
                <div className="section-icon">
                    <SkillsIcon />
                </div>
                <h2 className="section-title">Skills</h2>
            </div>
            
            <div className="skills-container">
                <SkillCard 
                    key="languages" 
                    category={skills.languages.category} 
                    items={skills.languages.items} 
                />
                
                <SkillCard 
                    key="tools" 
                    category={skills.tools.category} 
                    items={skills.tools.items} 
                />
                
                <SkillCard 
                    key="other" 
                    category={skills.other.category} 
                    items={skills.other.items} 
                />
            </div>
        </div>
    );
};

// Main Resume Component
const Resume = () => {
    return (
        <div className="resume-container">
            <ResumeSection title="Education" icon={EducationIcon} data={education} />
            <ResumeSection title="Work Experience" icon={WorkExperienceIcon} data={workExperience} />
            <ResumeSection title="Other Experience" icon={OtherExperienceIcon} data={otherExperience} />
            
            <SkillsSection />
            
            <div className="download-resume-container">
                <a 
                    href="https://drive.google.com/file/d/1rG4W4Y-c83xxfJYRDF5pRr5yVRkeMcbE/view?usp=drive_link" 
                    className="download-resume-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DownloadIcon />
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default Resume; 