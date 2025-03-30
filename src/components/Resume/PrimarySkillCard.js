import React, { useState, useEffect } from 'react';
import './Resume.css';

// Enhanced Primary Skill Card component with expandable description and toggle
const PrimarySkillCard = ({ skill, isSelected, onClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [viewMode, setViewMode] = useState('subskills'); // 'subskills' or 'tools'
    
    // Reset expanded state when card is deselected
    useEffect(() => {
        if (!isSelected) {
            setIsExpanded(false);
        }
    }, [isSelected]);
    
    // Handle main card click - select the skill
    const handleClick = () => {
        if (isSelected) {
            // If already selected, toggle expanded state
            setIsExpanded(!isExpanded);
        } else {
            // When selecting a new card, tell parent to select this card
            onClick(skill.id);
            // Default to expanded when first selected
            setIsExpanded(true);
        }
    };
    
    // Handle view mode toggle
    const handleToggleViewMode = (e) => {
        e.stopPropagation(); // Prevent triggering the card click
        setViewMode(viewMode === 'subskills' ? 'tools' : 'subskills');
    };
    
    return (
        <div className="skill-card-wrapper">
            <div 
                className={`primary-skill-card ${isSelected ? 'selected' : ''} ${isExpanded && isSelected ? 'expanded' : ''}`}
                onClick={handleClick}
                id={`skill-${skill.id}`}
            >
                <div className="card-content">
                    <h3 className="skill-title">{skill.name}</h3>
                    
                    {isSelected && (
                        <div className="skill-expand-indicator">
                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                            </svg>
                        </div>
                    )}
                </div>
                
                {isSelected && <div className="connection-dot connection-dot-right"></div>}
            </div>
            
            {isSelected && isExpanded && (
                <div className="skill-description-container">
                    <div className="skill-description">
                        <div className="skill-view-toggle">
                            <button 
                                className={`toggle-btn ${viewMode === 'subskills' ? 'active' : ''}`}
                                onClick={handleToggleViewMode}
                            >
                                Specializations
                            </button>
                            <button 
                                className={`toggle-btn ${viewMode === 'tools' ? 'active' : ''}`}
                                onClick={handleToggleViewMode}
                            >
                                Tools
                            </button>
                        </div>
                        
                        {viewMode === 'subskills' && skill.subskills && skill.subskills.length > 0 && (
                            <div className="skill-subskills">
                                <ul>
                                    {skill.subskills.map((subskill, index) => (
                                        <li key={index}>{subskill}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        
                        {viewMode === 'tools' && skill.tools && skill.tools.length > 0 && (
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