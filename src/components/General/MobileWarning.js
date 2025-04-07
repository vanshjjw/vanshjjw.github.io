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
          src="/images/general/download-5.webp" // <<<--- CONFIRM/ADJUST THIS PATH
          alt="BB-8 indicating mobile view isn't ready"
          className="bb8-image"
        />

        {/* Holographic Projection Text */}
        <div className="hologram-projection">
          <h2>*Happy Beep Boop*</h2> 
          <p>
            Mobile interface calculations incomplete. Recommend switching to desktop viewport for optimal data retrieval.
          </p>
        </div>

      </div>
    </div>
  );
};

export default MobileWarning; 