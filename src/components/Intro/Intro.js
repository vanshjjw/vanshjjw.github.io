import React from 'react';
import './Intro.css';
import { GithubIcon, LinkedInIcon, EmailIcon } from '../../assets/Icons';
import { bioParagraphs, socialLinks, personalInfo } from '../../assets/IntroData';

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
      <h1 className="intro-name">{personalInfo.name}</h1>
      
      <div className="intro-bio">
        {bioParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      
      <div className="contact-section">
        {/* <h2 className="section-title">{personalInfo.greetingText}</h2> */}
        <div className="contact-links">
          {socialLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url} 
              target={link.isExternal ? "_blank" : undefined} 
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="contact-link"
            >
              {renderIcon(link.iconType)} {link.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro; 