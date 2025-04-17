import React from 'react';
import './Garden.css';

// Extracted constants for easy maintenance

const Word =
`
This digital garden is currently under construction 🌱 
I'm still cultivating the ideas and structure for this space.
Come back soon to see what sprouts!
`

const Garden = () => {
  return (
    <div className="garden-container">
      
      <p className="garden-subtitle">
        {Word}
      </p>


    </div>
  );
};

export default Garden; 