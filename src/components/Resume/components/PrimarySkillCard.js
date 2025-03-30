import React, { useState } from 'react';
import '../Resume.css';

// Enhanced Primary Skill Card component with tools and subskills display
const PrimarySkillCard = ({ skill, isSelected, onClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Toggle expanded state when card is selected
    const handleClick = () => {
        onClick(skill.id);
        setIsExpanded(!isExpanded);
        
        // If deselecting, also collapse
        if (isSelected) {
            setIsExpanded(false);
        }
    };
    
    return (
        <div 
            className={`primary-skill-card ${isSelected ? 'selected' : ''}`}
            onClick={handleClick}
            id={`skill-${skill.id}`}
        >
            <h3>{skill.name}</h3>
            
            {isSelected && (
                <div className="skill-details">
                    {skill.subskills && skill.subskills.length > 0 && (
                        <div className="skill-subskills">
                            <h4>Specializations</h4>
                            <ul>
                                {skill.subskills.map((subskill, index) => (
                                    <li key={index}>{subskill}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    
                    {skill.tools && skill.tools.length > 0 && (
                        <div className="skill-tools">
                            <h4>Tools & Technologies</h4>
                            <div className="tool-tags">
                                {skill.tools.map((tool, index) => (
                                    <span key={index} className="tool-tag">{tool}</span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
            
            {isSelected && <div className="connection-dot connection-dot-right"></div>}
        </div>
    );
};

export default PrimarySkillCard; 