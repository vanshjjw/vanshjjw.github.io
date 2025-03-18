import React from 'react';
import './Garden.css';

// Extracted constants for easy maintenance

const Foreword = `Welcome to my digital garden—a space where ideas grow organically and thoughts evolve over time. 
    Unlike traditional blogs with polished posts, this is a living workspace where I cultivate concepts, 
    share learning journeys, and document explorations across various domains.`;

const ComingSoon = `Hello`;


const Garden = () => {
  return (
    <div className="garden-container">
      
      <p className="garden-subtitle">
        {Foreword}
        <br />
        <br />
        <br />
        {ComingSoon}
      </p>


    </div>
  );
};

export default Garden; 