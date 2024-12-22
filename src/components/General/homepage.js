import React from 'react';
import './Siderbar.css';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="sidebar homepage-sidebar">
                <div className="profile-pic">
                    <img src="/favicon.ico" alt="Your Name" />
                </div>
                <nav className="sidebar-nav">
                    <a href="/intro">About Me</a>
                    <a href="/resume">Resume</a>
                    <a href="/blog">Blog</a>
                    <a href="/garden">Digital Garden</a>
                    <a href="/resources">Resources</a>
                </nav>
            </div>
        </div>
    );
};

export default HomePage;
