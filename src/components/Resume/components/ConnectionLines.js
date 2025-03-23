import React, { useState, useEffect } from 'react';
import '../Resume.css';

// Basic SVG Connection Lines Component
const ConnectionLines = ({ selectedSkill, subSkills, selectedSubSkills, connectedExperiences }) => {
    const [paths, setPaths] = useState([]);
    
    // Draw connections whenever dependencies change
    useEffect(() => {
        // Skip if nothing to connect
        if (!selectedSkill || !subSkills.length) {
            setPaths([]);
            return;
        }
        
        // Draw connections immediately and after a short delay (for DOM to settle)
        const drawConnections = () => {
            const resumeLayout = document.querySelector('.resume-layout');
            if (!resumeLayout) return;
            
            const layoutRect = resumeLayout.getBoundingClientRect();
            const newPaths = [];
            
            // Get element position relative to resume layout
            const getPosition = (id) => {
                const element = document.getElementById(id);
                if (!element) return null;
                
                const rect = element.getBoundingClientRect();
                return {
                    left: rect.left - layoutRect.left,
                    right: rect.right - layoutRect.left,
                    centerX: (rect.left + rect.width / 2) - layoutRect.left,
                    centerY: (rect.top + rect.height / 2) - layoutRect.top
                };
            };
            
            // Get primary skill position
            const skillPos = getPosition(`skill-${selectedSkill.id}`);
            if (!skillPos) return;
            
            // Draw connections from primary skill to each subskill
            subSkills.forEach(subSkill => {
                const subSkillPos = getPosition(`subskill-${subSkill.id}`);
                if (!subSkillPos) return;
                
                // Primary to sub-skill path
                const dx = subSkillPos.left - skillPos.right;
                const controlX = skillPos.right + dx / 2;
                
                newPaths.push({
                    id: `skill-to-sub-${subSkill.id}`,
                    d: `M ${skillPos.right} ${skillPos.centerY} 
                        C ${controlX} ${skillPos.centerY}, 
                          ${controlX} ${subSkillPos.centerY}, 
                          ${subSkillPos.left} ${subSkillPos.centerY}`,
                    stroke: '#8d6e63',
                    strokeWidth: 2
                });
                
                // Only connect selected subskills to experiences
                if (selectedSubSkills[subSkill.id] && 
                    (selectedSubSkills[subSkill.id].state === 0 || selectedSubSkills[subSkill.id].state === 1)) {
                    
                    // Draw paths to connected experiences, but only for this subskill's connections
                    subSkill.connections.forEach(expId => {
                        // Make sure this experience is actually in the list of connectable experiences
                        if (connectedExperiences.includes(expId)) {
                            const expPos = getPosition(`experience-${expId}`);
                            if (!expPos) return;
                            
                            const expDx = expPos.left - subSkillPos.right;
                            const expControlX = subSkillPos.right + expDx / 2;
                            
                            newPaths.push({
                                id: `sub-${subSkill.id}-to-exp-${expId}`,
                                d: `M ${subSkillPos.right} ${subSkillPos.centerY} 
                                    C ${expControlX} ${subSkillPos.centerY}, 
                                      ${expControlX} ${expPos.centerY}, 
                                      ${expPos.left} ${expPos.centerY}`,
                                stroke: '#a89080',
                                strokeWidth: 2,
                                strokeDasharray: '5,3'
                            });
                        }
                    });
                }
            });
            
            setPaths(newPaths);
        };

        // Draw initially
        drawConnections();
        
        // And again after a short delay to ensure DOM is updated
        const drawTimer = setTimeout(drawConnections, 100);
        
        // Add resize handler to update lines when window size changes
        const handleResize = () => {
            drawConnections();
        };
        
        window.addEventListener('resize', handleResize);
        
        // Clean up on unmount
        return () => {
            clearTimeout(drawTimer);
            window.removeEventListener('resize', handleResize);
        };
    }, [selectedSkill, subSkills, selectedSubSkills, connectedExperiences]);
    
    // Don't render anything if there are no paths
    if (!paths.length) return null;
    
    return (
        <svg 
            className="connections-svg" 
            style={{ 
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 5,
                overflow: 'visible'
            }}
        >
            {paths.map(path => (
                <path
                    key={path.id}
                    d={path.d}
                    stroke={path.stroke}
                    strokeWidth={path.strokeWidth}
                    fill="none"
                    strokeDasharray={path.strokeDasharray || ''}
                />
            ))}
        </svg>
    );
};

export default ConnectionLines; 