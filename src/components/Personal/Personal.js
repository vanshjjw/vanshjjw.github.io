import React, { useState } from 'react';
import './Personal.css';

const Personal = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Replace these with your actual credentials
        const validUsername = "vansh";
        const validPassword = "password";

        if (credentials.username === validUsername && credentials.password === validPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (!isAuthenticated) {
        return (
            <div className="login-container">
                <div className="login-box">
                    <h2>Authentication Required</h2>
                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={credentials.username}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        {error && <div className="error-message">{error}</div>}
                        <button type="submit" className="login-button">Login</button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="personal-container">
            <h1>Network Visualizer</h1>
            <div className="content">
                {/* Your network visualizer content will go here */}
                <p>Network visualization content coming soon...</p>
            </div>
        </div>
    );
};

export default Personal; 