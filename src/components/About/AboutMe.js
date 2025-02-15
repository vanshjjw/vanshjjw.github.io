import React, { useState } from 'react';
import './AboutMe.css';

const tabs = [
    { id: 'taylor', label: 'Taylor Approximation', content: 'This is the Taylor approximation of my life!' },
    { id: 'interests', label: 'Interests', content: 'I love physics, movies, and entrepreneurship.' },
    { id: 'fun', label: 'Fun Facts', content: 'Fun Fact: I once organized an event for 200 students!' },
    { id: 'quotes', label: 'Quotes', content: '"Carpe Diem. Seize the day!" - Dead Poets Society' },
];

const AboutMe = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    return (
        <div className="about-container">
            <h1 className="about-name">Vansh Jhunjhunwala</h1>
            <div className="about-menu">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="about-content">
                {tabs.map(
                    (tab) =>
                        activeTab === tab.id && (
                            <div key={tab.id} className="tab-content">
                                <p>{tab.content}</p>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default AboutMe;
