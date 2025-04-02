import React from 'react';
import { FaDesktop } from 'react-icons/fa';
import './MobileWarning.css';

const MobileWarning = () => {
  const isMobile = window.innerWidth <= 768;

  if (!isMobile) return null;

  return (
    <div className="mobile-warning-overlay">
      <div className="mobile-warning-content">
        <FaDesktop className="desktop-icon" />
        <h2>Desktop View Recommended</h2>
        <p> Please visit us on a larger screen for the best experience.</p>
      </div>
    </div>
  );
};

export default MobileWarning; 