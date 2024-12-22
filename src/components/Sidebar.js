// Sidebar Component
import React, { useState } from 'react';
import '../App.css';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <nav className="sidebar-nav">
                <a href="#about">About Me</a>
                <a href="#resume">Resume</a>
                <a href="#blog">Blog</a>
                <a href="#garden">Digital Garden</a>
                <a href="#resources">Resources</a>
            </nav>
        </div>
    );
};

export default Sidebar;