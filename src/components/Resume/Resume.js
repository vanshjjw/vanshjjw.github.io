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
} from './Icons';
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

// Skill Card component with proficiency bars
const SkillCard = ({ category, items }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Helper function to get proficiency level description
    const getProficiencyLabel = (level) => {
        switch(level) {
            case 1: return 'Beginner';
            case 2: return 'Basic';
            case 3: return 'Intermediate';
            case 4: return 'Advanced';
            case 5: return 'Expert';
            default: return 'Intermediate';
        }
    };
    
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
                    {items.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-item-header">
                                <span className="skill-name">{skill.name}</span>
                                {skill.specialty && (
                                    <span className="skill-specialty">({skill.specialty})</span>
                                )}
                                {skill.context && (
                                    <span className="skill-context">{skill.context}</span>
                                )}
                            </div>
                            <div className="skill-proficiency">
                                <div className="proficiency-bar-container">
                                    <div 
                                        className="proficiency-bar" 
                                        style={{ width: `${skill.proficiency * 20}%` }}
                                        title={getProficiencyLabel(skill.proficiency)}
                                    ></div>
                                </div>
                                <span className="proficiency-label">{getProficiencyLabel(skill.proficiency)}</span>
                            </div>
                        </div>
                    ))}
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