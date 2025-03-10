import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Siderbar.css';

const Sidebar = () => {
    // Start with sidebar expanded (not open class)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const location = useLocation();
    
    // Toggle sidebar state
    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
        document.querySelector('.app-layout').classList.toggle('sidebar-open', !isCollapsed);
    };
    
    // Set active class for current route
    const isActive = (path) => {
        return (location.pathname === path || 
               (path === '/intro' && location.pathname === '/')) ? 'active' : '';
    };
    
    // Initialize sidebar state on component mount
    useEffect(() => {
        document.querySelector('.app-layout').classList.toggle('sidebar-open', isCollapsed);
    }, []);

    return (
        <div className={`sidebar ${isCollapsed ? 'open' : ''}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                {isCollapsed ? '→' : '←'}
            </button>
            
            <div className="profile-pic">
                <img src="/favicon.ico" alt="Vansh Jhunjhunwala"/>
            </div>
            
            <nav className="sidebar-nav">
                <Link to="/aboutme" className={isActive('/intro')}>About Me</Link>
                <Link to="/resume" className={isActive('/resume')}>Resume</Link>
                <Link to="/blog" className={isActive('/blog')}>Blog</Link>
                <Link to="/garden" className={isActive('/garden')}>Digital Garden</Link>
                <Link to="/resources" className={isActive('/resources')}>Resources</Link>
            </nav>
        </div>
    );
};

export default Sidebar;