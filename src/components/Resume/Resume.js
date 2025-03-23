import React, { useState, useEffect } from 'react';
import './Resume.css';

// Import components
import PrimarySkillCard from './components/PrimarySkillCard';
import SubSkillCard from './components/SubSkillCard';
import ExperienceCard from './components/ExperienceCard';
import ConnectionLines from './components/ConnectionLines';

// Import data
import { software, research, leadership, entrepreneurship } from '../../assets/GraphicalData/SkillGraphData';
import experiencesData from '../../assets/GraphicalData/ExperiencesData';

// Main Resume Component
const Resume = () => {
    const primarySkills = [software, research, leadership, entrepreneurship];
    const [selectedSkillId, setSelectedSkillId] = useState(null);
    
    // All possible connections for the selected skill (used for drawing lines)
    const [connectedExperienceIds, setConnectedExperienceIds] = useState([]);
    
    // Experiences that should be highlighted (connected to selected subskills)
    const [activeExperienceIds, setActiveExperienceIds] = useState([]);
    
    // Hover state for temporary highlighting
    const [hoveredExperienceId, setHoveredExperienceId] = useState(null);
    
    const [expandedCards, setExpandedCards] = useState([]);
    const [selectedSubSkills, setSelectedSubSkills] = useState({});
    
    // Get the selected skill and its subskills
    const selectedSkill = primarySkills.find(skill => skill.id === selectedSkillId);
    const subSkills = selectedSkill ? selectedSkill.subSkills : [];
    
    // Handler for skill selection
    const handleSkillClick = (skillId) => {
        if (selectedSkillId === skillId) {
            // Deselect the skill
            setSelectedSkillId(null);
            setConnectedExperienceIds([]);
            setActiveExperienceIds([]);
            setSelectedSubSkills({});
        } else {
            // Select a skill
            setSelectedSkillId(skillId);
            
            // Get all experience IDs connected to any sub-skill (for connection drawing)
            const skill = primarySkills.find(s => s.id === skillId);
            if (skill) {
                // Collect all possible connections for this skill
                const allConnections = [];
                skill.subSkills.forEach(subSkill => {
                    subSkill.connections.forEach(expId => {
                        if (!allConnections.includes(expId)) {
                            allConnections.push(expId);
                        }
                    });
                });
                
                // Set the complete list of possible connections
                setConnectedExperienceIds(allConnections);
                
                // No active experiences until a subskill is selected
                setActiveExperienceIds([]);
                
                // Reset subskill selection state
                setSelectedSubSkills({});
            }
        }
    };
    
    // Update active experience IDs whenever selected subskills change
    useEffect(() => {
        // No skill selected = no active experiences
        if (!selectedSkill) {
            setActiveExperienceIds([]);
            return;
        }
        
        // Get all selected subskill IDs
        const selectedSubSkillIds = Object.keys(selectedSubSkills).map(id => parseInt(id, 10));
        
        // If no subskills are selected, no active experiences
        if (selectedSubSkillIds.length === 0) {
            setActiveExperienceIds([]);
            return;
        }
        
        // Collect all active experiences connected to selected subskills
        const activeExperiences = [];
        selectedSubSkillIds.forEach(subSkillId => {
            const subSkill = subSkills.find(s => s.id === subSkillId);
            if (subSkill && subSkill.connections) {
                subSkill.connections.forEach(expId => {
                    if (!activeExperiences.includes(expId)) {
                        activeExperiences.push(expId);
                    }
                });
            }
        });
        
        // Update active experiences
        setActiveExperienceIds(activeExperiences);
    }, [selectedSkill, subSkills, selectedSubSkills]);
    
    // Handler for subskill selection - update selected subskills
    const handleSubSkillClick = (subSkillId) => {
        setSelectedSubSkills(prev => {
            const newState = { ...prev };
            
            // If not selected, select it (first click)
            if (!newState[subSkillId]) {
                newState[subSkillId] = { state: 0 }; // State 0: selected, show connections
                return newState;
            }
            
            // If already selected, cycle through states
            const currentState = newState[subSkillId].state;
            if (currentState === 0) {
                // First click → second click: show tags (keep same connections)
                newState[subSkillId] = { state: 1 };
            } else if (currentState === 1) {
                // Second click → third click: reset
                delete newState[subSkillId]; // Remove from selected
            }
            
            return newState;
        });
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

    return (
        <div className="resume-container">
            <div className="resume-layout">
                {/* Left Pane - Primary Skills */}
                <div className="pane primary-skills-pane">
                    <div className="primary-skills-container">
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

                {/* Middle Pane - Sub-Skills */}
                <div className="pane middle-pane">
                    <div className="sub-skills-container">
                        {subSkills.map(subSkill => (
                            <SubSkillCard 
                                key={subSkill.id} 
                                subSkill={subSkill}
                                isSelected={!!selectedSubSkills[subSkill.id]}
                                clickState={selectedSubSkills[subSkill.id]?.state || 0}
                                onClick={handleSubSkillClick}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Pane - Experiences */}
                <div className="pane experiences-pane">
                    <div className="experiences-container">
                        {experiencesData.map(experience => (
                            <ExperienceCard 
                                key={experience.id} 
                                item={experience} 
                                isConnected={isExperienceHighlighted(experience.id)}
                                isConnectable={connectedExperienceIds.includes(experience.id)}
                                onExpand={handleCardExpand}
                                onHover={handleExperienceHover}
                            />
                        ))}
                    </div>
                </div>
                
                {/* SVG Overlay for connection lines */}
                {selectedSkill && (
                    <ConnectionLines 
                        selectedSkill={selectedSkill} 
                        subSkills={subSkills}
                        selectedSubSkills={selectedSubSkills}
                        connectedExperiences={connectedExperienceIds}
                    />
                )}
            </div>
        </div>
    );
};

export default Resume; 