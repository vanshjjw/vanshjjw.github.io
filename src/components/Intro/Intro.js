import React from 'react';
import './Intro.css';
import { GithubIcon, LinkedInIcon, EmailIcon } from '../../assets/Icons';
import { socialLinks, personalInfo } from '../../assets/IntroData';

const Intro = () => {
  // Helper function to render the correct icon based on type
  const renderIcon = (iconType) => {
    switch (iconType) {
      case 'github':
        return <GithubIcon />;
      case 'linkedin':
        return <LinkedInIcon />;
      case 'email':
        return <EmailIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="intro-container">
      <div className="intro-content">
        {/* Left-aligned greeting section */}
        <div className="intro-header">
          <div className="welcome-message">
            <h1 className="greeting">
              Hi, I am <span className="name">{personalInfo.name}</span>
            </h1>
            <p className="description">Software developer passionate about creating meaningful experiences.</p>
          </div>

          {/* Modular call-to-action sections */}
          <div className="action-modules">
            <div className="action-module">
              <h2 className="module-title">Explore</h2>
              <p className="module-text">Look around and discover my digital presence.</p>
              <div className="module-actions">
                <a href="#/projects" className="action-button">
                  <span>Projects</span>
                </a>
                <a href="#/garden" className="action-button">
                  <span>Digital Garden</span>
                </a>
                <a href="#/resume" className="action-button">
                  <span>Resume</span>
                </a>
              </div>
            </div>

            <div className="action-module">
              <h2 className="module-title">Work Together</h2>
              <p className="module-text">Interested in collaborating? Let's talk about something fun.</p>
              
              <div className="social-links-container">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target={link.isExternal ? "_blank" : undefined} 
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    className="social-link"
                    aria-label={link.name}
                  >
                    {renderIcon(link.iconType)}
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
