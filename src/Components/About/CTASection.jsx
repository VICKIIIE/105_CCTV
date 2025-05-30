import React from 'react';
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <div className="cta-box" data-aos="zoom-in">
      <h2>Ready to Secure Your Property?</h2>
      <p>Contact us today to schedule your free consultation or get a custom quote.</p>
      <button className="cta-button" onClick={() => navigate('/contact')}>📩 Contact Us</button>
    </div>
  );
};

export default CTASection;
