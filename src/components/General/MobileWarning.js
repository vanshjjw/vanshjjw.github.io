import React from 'react';
// FaRobot import removed
import './MobileWarning.css';

const MobileWarning = () => {
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) return null;

  // Using image file now

  return (
    <div className="mobile-warning-overlay">
      <div className="mobile-warning-content">
        
        {/* Remove SVG block */}
        {/* <svg className="bb8-svg-graphic" ... </svg> */}

        {/* BB-8 Image - Adjust path as necessary */}
        <img 
          src="/images/general/mobile-warning.webp"
          alt="BB-8 looking sad about mobile view"
          className="bb8-image"
        />

        {/* Holographic Projection Text */}
        <div className="hologram-projection">
          <h2>*Sad beep boop*</h2> 
          <p>
            Vansh still needs to design mobile interface. 
            Please use a bigger screen, or switch to desktop mode in the meantime.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MobileWarning; 