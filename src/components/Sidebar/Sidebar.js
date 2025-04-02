import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  GithubIcon, 
  LinkedInIcon, 
  EmailIcon,
  SubstackIcon,
  LetterboxdIcon
} from '../../assets/Icons';
import { ProfessionalLinks } from '../../assets/IntroData';
import './Sidebar.css';

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

    // Helper function to render the correct icon based on type
    const renderIcon = (iconType) => {
        switch (iconType) {
            case 'github':
                return <GithubIcon />;
            case 'linkedin':
                return <LinkedInIcon />;
            case 'email':
                return <EmailIcon />;
            case 'substack':
                return <SubstackIcon />;
            case 'letterboxd':
                return <LetterboxdIcon />;
            default:
                return null;
        }
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'open' : ''}`}>
            <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                {isCollapsed ? '→' : '←'}
            </button>
            
            <div className="profile-pic">
                <img src="/images/general/sidebar-photo.ico" alt="Vansh Jhunjhunwala"/>
            </div>
            
            <nav className="sidebar-nav">
                <Link to="/intro" className={isActive('/intro')}>Intro</Link>
                <Link to="/resume" className={isActive('/resume')}>Resume</Link>
                <Link to="/projects" className={isActive('/projects')}>Projects</Link>
                <Link to="/digital-garden" className={isActive('/digital-garden')}>Digital Garden</Link>
                {/* <Link to="/resources" className={isActive('/resources')}>Resources</Link> */}
            </nav>

            <div className="sidebar-social">
                <div className="social-links">
                    {ProfessionalLinks.map((link, index) => (
                        <a 
                            key={index}
                            href={link.url} 
                            target={link.isExternal ? "_blank" : undefined} 
                            rel={link.isExternal ? "noopener noreferrer" : undefined}
                            className="social-icon"
                        >
                            {renderIcon(link.iconType)}
                            <span className="hover-text">{link.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;