import React, { useState } from 'react';
import './Intro.css';
import { 
  GithubIcon, 
  LinkedInIcon, 
  EmailIcon,
  SubstackIcon,
  LetterboxdIcon,
  LocationIcon
} from '../../assets/Icons';

import { personalDescription, ProfessionalLinks } from '../../assets/IntroData';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderers from '../General/MarkdownRenderers';

const Intro = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

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

  const handleHelloClick = () => {
    setShowEasterEgg(true);
    // Hide the Easter egg after 3 seconds
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 1000);
  };

  return (
    <div className="intro-container">
      <div className="intro-content">

        {/* Greeting and Name */}
        <header className="intro-header">
          {showEasterEgg && (
            <div className="easter-egg"> My regards, General Kenobi!</div>
          )}
          <p className="intro-name">
            <span className="name-a clickable" onClick={handleHelloClick}> Hello There, </span>
            <span className="name-a"> I'm </span>
            <span className="name-b"> Vansh Jhunjhunwala </span>
          </p>
          
          <div className="description-container">
            <ReactMarkdown components={MarkdownRenderers}>
              {personalDescription}
            </ReactMarkdown>
          </div>
        </header>

        {/* Location section - inline layout */}
        <div className="links-section">
          <div className="links-row">
            <p className="links-message">Based in: </p>
            
            <div className="all-links">
              <div className="location-item">
                <LocationIcon width={20} height={20} />
                <span>Oxford, UK</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links section - inline layout */}
        <div className="links-section">
          <div className="links-row">
            <p className="links-message">Find me Online:</p>
            
            <div className="all-links">
              {ProfessionalLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target={link.isExternal ? "_blank" : undefined} 
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="link-item"
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
  );
};

export default Intro;
