import React from 'react';

const FeatureBox = ({ icon, title, description }) => (
  <div className="feature-box" data-aos="fade-up">
    <h3>{icon} {title}</h3>
    <p>{description}</p>
  </div>
);

export default FeatureBox;
