import React from 'react';
import './Garden.css';

// Extracted constants for easy maintenance

const Word =
`
This page is under construction—I am still figuring out how best to use it
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