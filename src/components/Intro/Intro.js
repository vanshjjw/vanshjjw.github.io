import React, { useState } from 'react';
import './Intro.css';
import { personalDescription } from '../../assets/IntroData';
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
      </div>
    </div>
  );
};

export default Intro;
