import React from 'react';
import './Garden.css';

// Extracted constants for easy maintenance

const Word =
`
One of these days, I will write something here.
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