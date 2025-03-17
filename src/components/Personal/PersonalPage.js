import React, { useState, useEffect } from 'react';
import './Personal.css';
import { tabs, taylorLevels } from './PersonalData';

// Login credentials (in a real app, these would be stored securely)
const CORRECT_USERNAME = "vansh";
const CORRECT_PASSWORD = "personalpage";

const LoginScreen = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
            onLogin();
            // Store authentication state in sessionStorage
            sessionStorage.setItem('isAuthenticated', 'true');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Personal Page Login</h2>
                {error && <div className="error-message">{error}</div>}
                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
};

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

const Personal = () => {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const [activeLevel, setActiveLevel] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Check if user is already authenticated
        return sessionStorage.getItem('isAuthenticated') === 'true';
    });

    useEffect(() => {
        if (activeLevel !== null) {
            const content = document.querySelector('.taylor-level-content');
            if (content) {
                content.classList.add('visible');
            }
        }
    }, [activeLevel]);

    if (!isAuthenticated) {
        return <LoginScreen onLogin={() => setIsAuthenticated(true)} />;
    }

    return (
        <div className="about-container">
            <div className="header-container">
                <h1 className="about-name">Vansh Jhunjhunwala</h1>
                <button 
                    className="logout-button"
                    onClick={() => {
                        setIsAuthenticated(false);
                        sessionStorage.removeItem('isAuthenticated');
                    }}
                >
                    Logout
                </button>
            </div>

            {/* Tab Buttons */}
            <div className="about-menu">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                        onClick={() => {
                            setActiveTab(tab.id);
                            setActiveLevel(null);
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

export default Personal;