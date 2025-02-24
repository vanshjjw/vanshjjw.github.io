import React, { useState } from 'react';
import './Siderbar.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('sidebar-open', isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? '→' : '←'}
            </button>
            <div className="profile-pic">
                <img src="favicon.ico" alt={"Vansh Jhunjhunwala"}/>
            </div>
            <nav className="sidebar-nav">
                <a href="/#/intro">About Me</a>
                <a href="/#/resume">Resume</a>
                <a href="/#/blog">Blog</a>
                <a href="/#/garden">Digital Garden</a>
                <a href="/#/resources">Resources</a>
            </nav>
        </div>
    );
};

export default Sidebar;