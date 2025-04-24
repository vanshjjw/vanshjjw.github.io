import React, { useState } from 'react';
import './Intro.css';
import { personalDescription, ProfessionalLinks } from '../../assets/IntroData';
import {
  GithubIcon,
  LinkedInIcon,
  EmailIcon,
  SubstackIcon,
  LetterboxdIcon
} from '../../assets/Icons';
import ReactMarkdown from 'react-markdown';
import MarkdownRenderers from '../General/MarkdownRenderers';

const Intro = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const handleHelloClick = () => {
    setShowEasterEgg(true);
    // Hide the Easter egg after 3 seconds
    setTimeout(() => {
      setShowEasterEgg(false);
    }, 1000);
  };

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
          
          {/* Social Links Section */}
          <div className="intro-social-links">
            <div className="links-row">
              {ProfessionalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.isExternal ? "_blank" : undefined}
                  rel={link.isExternal ? "noopener noreferrer" : undefined}
                  className="intro-social-link"
                >
                  {renderIcon(link.iconType)}
                  <span className="link-name">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Intro;
