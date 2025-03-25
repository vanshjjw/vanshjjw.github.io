import React from 'react';
import './Intro.css';
import { 
  GithubIcon, 
  LinkedInIcon, 
  EmailIcon,
  ExternalLinkIcon,
  SubstackIcon,
  LetterboxdIcon
} from '../../assets/Icons';
import { personalInfo, links } from '../../assets/IntroData';

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
      case 'externalLink':
        return <ExternalLinkIcon />;
      case 'substack':
        return <SubstackIcon />;
      case 'letterboxd':
        return <LetterboxdIcon />;
      default:
        return null;
    }
  };

  // Group links by category
  const connectLinks = links.filter(link => link.category === 'connect');
  const interestLinks = links.filter(link => link.category === 'interests');

  return (
    <div className="intro-container">
      <div className="intro-content">
        <div className="intro-header">
          <h1 className="greeting">
            Hi, I am <span className="name">{personalInfo.name}</span>
          </h1>
          <p className="description">{personalInfo.description}</p>
        </div>

        <div className="intro-links">
          <div className="links-section">
            <span className="links-label">Connect:</span>
            <div className="links-row">
              {connectLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target={link.isExternal ? "_blank" : undefined} 
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="link-item"
                  aria-label={link.name}
                >
                  {renderIcon(link.iconType)}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="links-section">
            <span className="links-label">Interests:</span>
            <div className="links-row">
              {interestLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url} 
                  target={link.isExternal ? "_blank" : undefined} 
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="link-item"
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
  );
};

export default Intro;
