import React, { useState, useEffect } from 'react';
import '../Resume.css';

// Updated Connection Lines Component for direct connections
const ConnectionLines = ({ selectedSkill, activeExperiences }) => {
    const [paths, setPaths] = useState([]);
    
    // Draw connections whenever dependencies change
    useEffect(() => {
        // Skip if nothing to connect
        if (!selectedSkill || !activeExperiences.length) {
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
            
            // Draw direct connections from primary skill to each experience
            activeExperiences.forEach(expId => {
                const expPos = getPosition(`experience-${expId}`);
                if (!expPos) return;
                
                // Calculate distance for bezier curve control points
                const dx = expPos.left - skillPos.right;
                const controlX = skillPos.right + dx / 2;
                
                newPaths.push({
                    id: `skill-to-exp-${expId}`,
                    d: `M ${skillPos.right} ${skillPos.centerY} 
                        C ${controlX} ${skillPos.centerY}, 
                          ${controlX} ${expPos.centerY}, 
                          ${expPos.left} ${expPos.centerY}`,
                    stroke: '#8d6e63',
                    strokeWidth: 2
                });
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
    }, [selectedSkill, activeExperiences]);
    
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
                />
            ))}
        </svg>
    );
};

export default ConnectionLines; 