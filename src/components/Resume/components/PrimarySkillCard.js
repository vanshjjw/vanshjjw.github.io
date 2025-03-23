import React from 'react';
import '../Resume.css';

// Simple Primary Skill Card component
const PrimarySkillCard = ({ skill, isSelected, onClick }) => {
    return (
        <div 
            className={`primary-skill-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onClick(skill.id)}
            id={`skill-${skill.id}`}
        >
            <h3>{skill.name}</h3>
            {isSelected && <div className="connection-dot connection-dot-right"></div>}
        </div>
    );
};

export default PrimarySkillCard; 