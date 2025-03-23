import React from 'react';
import '../Resume.css';

// Sub-skill Card Component
const SubSkillCard = ({ subSkill, isSelected, clickState, onClick }) => {
    // Determine what to display based on click state
    let content;
    if (clickState === 1) {
        // On second click, show tags
        content = (
            <div className="subskill-tags">
                {subSkill.tags && subSkill.tags.length > 0 ? (
                    subSkill.tags.map((tag, index) => (
                        <span key={index} className="subskill-tag">{tag}</span>
                    ))
                ) : (
                    <span className="subskill-tag">No tags available</span>
                )}
            </div>
        );
    } else {
        // On first/third click, show name
        content = <h4>{subSkill.name}</h4>;
    }

    return (
        <div 
            className={`sub-skill-card ${isSelected ? 'selected' : ''} ${clickState === 1 ? 'showing-tags' : ''}`} 
            id={`subskill-${subSkill.id}`}
            onClick={() => onClick(subSkill.id)}
        >
            {content}
            <div className="connection-dot connection-dot-left"></div>
            <div className="connection-dot connection-dot-right"></div>
        </div>
    );
};

export default SubSkillCard; 