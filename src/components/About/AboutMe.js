import React, { useState } from 'react';
import './AboutMe.css';
import { tabs, taylorLevels } from './AboutData';


const renderTabContent = (tabId, activeLevel, setActiveLevel) => {
    if (tabId === 'taylor') {
        return (
            <div className="taylor-container">
                {taylorLevels.map((level, index) => (
                    <div key={level.id} className="taylor-level">
                        <button
                            className={`level-button ${index === activeLevel ? 'active' : ''}`}
                            onClick={() => setActiveLevel(index === activeLevel ? null : index)}
                        >
                            {level.label}
                        </button>
                        {index === activeLevel && <p className="level-content">{level.content}</p>}
                    </div>
                ))}
            </div>
        );
    }

    const tab = tabs.find((t) => t.id === tabId);
    return tab ? <p>{tab.content}</p> : null;
};




const AboutMe = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [activeLevel, setActiveLevel] = useState(null); // Stores the active Taylor level

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

