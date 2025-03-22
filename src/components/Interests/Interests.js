import React from 'react';
import './Interests.css';

const Interests = () => {
  return (
    <div className="card-container">
      <div className="business-card">
        <div className="phone">212.555.6342</div>
        <div className="company">
          <div className="company-name">PIERCE & PIERCE</div>
          <div className="company-description">MERGERS AND ACQUISITIONS</div>
        </div>
        <div className="name-section">
          <div className="name">VANSH SINGH</div>
          <div className="title">VICE PRESIDENT</div>
        </div>
        <div className="address">
          358 EXCHANGE PLACE NEW YORK, N.Y. 10099<br />
          FAX 212 555 6390 TELEX 10 4534
        </div>
      </div>
    </div>
  );
};

export default Interests;
