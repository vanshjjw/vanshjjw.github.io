import React, { useState, useEffect } from 'react';
import './Resume.css';
import ReactMarkdown from 'react-markdown';

// Import components
import PrimarySkillCard from './PrimarySkillCard';
import ExperienceCard from './ExperienceCard';
import ConnectionLines from './ConnectionLines';

import { 
    DownloadIcon, 
    EducationIcon, 
    WorkExperienceIcon, 
    OtherExperienceIcon,
    SkillsIcon } from '../../assets/Icons';

// Import data
import { software, research, leadership } from '../../assets/SkillGraphData';
import {experiencesData, ResumeIntroduction} from '../../assets/ExperiencesData';


// Main Resume Component
const Resume = () => {
    const primarySkills = [research, software,leadership];
    
    const [selectedSkillId, setSelectedSkillId] = useState(null);
    const [activeExperienceIds, setActiveExperienceIds] = useState([]);
    const [hoveredExperienceId, setHoveredExperienceId] = useState(null);
    const [expandedCards, setExpandedCards] = useState([]);
    
    // Get the selected skill
    const selectedSkill = primarySkills.find(skill => skill.id === selectedSkillId);
    
    // Handler for skill selection
    const handleSkillClick = (skillId) => {
        if (selectedSkillId === skillId) {
            // Deselect the skill
            setSelectedSkillId(null);
            setActiveExperienceIds([]);
        } else {
            // Select a skill
            setSelectedSkillId(skillId);
            
            // Get all experience IDs connected to this skill
            const skill = primarySkills.find(s => s.id === skillId);
            if (skill) {
                // Use direct connections from the restructured data
                setActiveExperienceIds(skill.connections);
            }
        }
    };

    // Experience hover handler - only manages hover state
    const handleExperienceHover = (experienceId, isHovering) => {
        setHoveredExperienceId(isHovering ? experienceId : null);
    };

    // Handler for card expansion
    const handleCardExpand = (cardId, isExpanded) => {
        // Track expanded cards
        if (isExpanded) {
            setExpandedCards(prev => [...prev.filter(id => id !== cardId), cardId]);
        } else {
            setExpandedCards(prev => prev.filter(id => id !== cardId));
        }
        
        // Force a redraw of connection lines after the card animation completes
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 300);
    };
    
    // Determine if an experience should be highlighted (active or hovered)
    const isExperienceHighlighted = (experienceId) => {
        return activeExperienceIds.includes(experienceId) || hoveredExperienceId === experienceId;
    };

    // Force re-render when activeExperienceIds changes
    useEffect(() => {
        // Force a redraw of connection lines after experiences are highlighted
        if (activeExperienceIds.length > 0 || hoveredExperienceId !== null) {
            window.dispatchEvent(new Event('resize'));
        }
    }, [activeExperienceIds, hoveredExperienceId]);

    // Experience Break Icons
    const ExperienceBreak = ({ icon: Icon }) => (
        <div className="experience-break">
            <Icon width={28} height={28} />
        </div>
    );

    return (
        <div className="resume-container">
            {/* Introduction section */}
            <div className="resume-introduction">
                <p className="resume-introduction-text">{ResumeIntroduction}</p>
            </div>
            
            <div className="resume-layout">
                {/* Left Pane - Primary Skills */}
                <div className="pane primary-skills-pane">
                    <div className="primary-skills-container">
                        <div className="skills-header">
                            <SkillsIcon width={28} height={28} />
                        </div>
                        {primarySkills.map(skill => (
                            <PrimarySkillCard
                                key={skill.id}
                                skill={skill}
                                isSelected={selectedSkillId === skill.id}
                                onClick={handleSkillClick}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Pane - Experiences */}
                <div className="pane experiences-pane">
                    <div className="experiences-container">
                        {experiencesData.map((experience, index) => (
                            <React.Fragment key={experience.id}>
                                {/* Add Education icon before first experience */}
                                {index === 0 && <ExperienceBreak icon={EducationIcon} />}
                                
                                {/* Add Work icon before second experience (index 1) */}
                                {index === 1 && <ExperienceBreak icon={WorkExperienceIcon} />}
                                
                                {/* Add Other icon before fifth experience (index 4) */}
                                {index === 4 && <ExperienceBreak icon={OtherExperienceIcon} />}
                                
                                <ExperienceCard
                                    item={experience}
                                    isConnected={isExperienceHighlighted(experience.id)}
                                    isConnectable={selectedSkill && activeExperienceIds.includes(experience.id)}
                                    onExpand={handleCardExpand}
                                    onHover={handleExperienceHover}
                                />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* SVG Overlay for connection lines */}
                {selectedSkill && (
                    <ConnectionLines
                        selectedSkill={selectedSkill}
                        activeExperiences={activeExperienceIds}
                    />
                )}
            </div>

            <div className="download-resume-container">
                <a
                    href="https://drive.google.com/file/d/1rG4W4Y-c83xxfJYRDF5pRr5yVRkeMcbE/view?usp=drive_link"
                    className="download-resume-button"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <DownloadIcon/>
                    <span>Download PDF</span>
                </a>
            </div>
        </div>
    );
};

export default Resume; 