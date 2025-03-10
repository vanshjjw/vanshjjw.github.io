import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import { tabs, taylorLevels } from './AboutData';

const renderTabContent = (tabId, activeLevel, setActiveLevel) => {
    if (tabId === 'taylor') {
        // Create a modified version of taylorLevels with the 5th level renamed to "Convergence"
        const modifiedTaylorLevels = [...taylorLevels];
        if (modifiedTaylorLevels.length >= 5) {
            modifiedTaylorLevels[4] = {
                ...modifiedTaylorLevels[4],
                label: 'Convergence'
            };
        }
        
        return (
            <div className="taylor-horizontal-container">
                {/* Vertical Timeline UI for Taylor Approximation */}
                <div className="taylor-timeline">
                    {modifiedTaylorLevels.map((level, index) => {
                        // Add the separator before the last level (Convergence)
                        if (index === 4) {
                            return (
                                <React.Fragment key={level.id}>
                                    <div className="timeline-separator">
                                        <div className="separator-dot"></div>
                                        <div className="separator-dot"></div>
                                        <div className="separator-dot"></div>
                                    </div>
                                    <div 
                                        className={`timeline-point ${index === activeLevel ? 'active' : ''}`}
                                        onClick={() => setActiveLevel(index === activeLevel ? null : index)}
                                        aria-label={level.label}
                                    >
                                        <span className="timeline-label">{level.label}</span>
                                    </div>
                                </React.Fragment>
                            );
                        }
                        
                        return (
                            <div 
                                key={level.id} 
                                className={`timeline-point ${index === activeLevel ? 'active' : ''}`}
                                onClick={() => setActiveLevel(index === activeLevel ? null : index)}
                                aria-label={level.label}
                            >
                                <span className="timeline-label">{level.label}</span>
                            </div>
                        );
                    })}
                </div>
                
                {/* Selected level content */}
                {activeLevel !== null && (
                    <div className={`taylor-level-content ${activeLevel !== null ? 'visible' : ''}`}>
                        <div className="taylor-level-title">
                            {modifiedTaylorLevels[activeLevel].label}
                        </div>
                        <p>{modifiedTaylorLevels[activeLevel].content}</p>
                    </div>
                )}
            </div>
        );
    }

    const tab = tabs.find((t) => t.id === tabId);
    return tab ? <div className="tab-content"><p>{tab.content}</p></div> : null;
};

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [activeLevel, setActiveLevel] = useState(null); // Stores the active Taylor level
    
    // Effect to handle animation timing when changing levels
    useEffect(() => {
        if (activeLevel !== null) {
            const content = document.querySelector('.taylor-level-content');
            if (content) {
                content.classList.add('visible');
            }
        }
    }, [activeLevel]);

    return (
        <div className="about-container">
            <h1 className="about-name">Vansh Jhunjhunwala</h1>

            {/* Tab Buttons */}
            <div className="about-menu">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab(tab.id);
                            setActiveLevel(null); // Reset active Taylor level when switching tabs
                        }}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="about-content">{renderTabContent(activeTab, activeLevel, setActiveLevel)}</div>
        </div>
    );
};

export default AboutMe;