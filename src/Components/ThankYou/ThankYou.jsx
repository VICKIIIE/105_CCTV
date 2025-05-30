import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <section className="thankyou-section">
      <div className="thankyou-box">
        <h1 className="thankyou-title">✅ Message Sent!</h1>
        <p className="thankyou-message">
          Thank you for reaching out to <span className="highlight">105 CCTV</span>. We'll get back to you as soon as possible.
        </p>
        <Link to="/" className="back-home">← Back to Home</Link>
      </div>
    </section>
  );
};

export default ThankYou;
