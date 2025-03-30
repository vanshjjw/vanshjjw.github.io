import React, { useState } from 'react';
import './Resume.css';

// Enhanced Primary Skill Card component with conditional toggle
const PrimarySkillCard = ({ skill, isSelected, onClick }) => {
    const [viewMode, setViewMode] = useState('subskills'); // 'subskills' or 'tools'
    
    // Check if skill has both tools and subskills
    const hasTools = skill.tools && skill.tools.length > 0;
    const hasSubskills = skill.subskills && skill.subskills.length > 0;
    const showToggle = hasTools && hasSubskills;
    
    // Handle main card click - simply select/deselect the skill
    const handleClick = () => {
        onClick(skill.id);
    };
    
    // Handle view mode toggle
    const handleToggleViewMode = (e) => {
        e.stopPropagation(); // Prevent triggering the card click
        setViewMode(viewMode === 'subskills' ? 'tools' : 'subskills');
    };
    
    // Determine the class names - selected cards are always expanded
    const cardClasses = `primary-skill-card ${isSelected ? 'selected expanded' : ''}`;
    
    return (
        <div className="skill-card-wrapper">
            <div 
                className={cardClasses}
                onClick={handleClick}
                id={`skill-${skill.id}`}
            >
                <div className="card-content">
                    <p className="skill-title">{skill.name}</p>
                </div>
                
                {isSelected && <div className="connection-dot connection-dot-right"></div>}
            </div>
            
            {isSelected && (
                <div className="skill-description-container">
                    <div className="skill-description">
                        {showToggle && (
                            <div className="skill-view-toggle">
                                <button 
                                    className={`toggle-btn ${viewMode === 'subskills' ? 'active' : ''}`}
                                    onClick={handleToggleViewMode}
                                >
                                    Specialisations
                                </button>
                                <button 
                                    className={`toggle-btn ${viewMode === 'tools' ? 'active' : ''}`}
                                    onClick={handleToggleViewMode}
                                >
                                    Tools
                                </button>
                            </div>
                        )}
                        
                        {/* Always show subskills if there's no toggle or if in subskills mode */}
                        {(!showToggle || viewMode === 'subskills') && hasSubskills && (
                            <div className="skill-subskills">
                                <ul>
                                    {skill.subskills.map((subskill, index) => (
                                        <li key={index}>{subskill}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        {/* Only show tools if there's a toggle and in tools mode */}
                        {showToggle && viewMode === 'tools' && hasTools && (
                            <div className="skill-tools">
                                <div className="tool-tags">
                                    {skill.tools.map((tool, index) => (
                                        <span key={index} className="tool-tag">{tool}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PrimarySkillCard; 