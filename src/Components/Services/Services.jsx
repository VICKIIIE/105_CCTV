import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  return (
    <section className="services">
      <div className="services-hero">
        <h1><span className="highlight">Our Services</span></h1>
        <p><span className="highlight">At 105 CCTV, we deliver top-notch tech solutions to keep you safe, smart, and connected.</span></p>
      </div>

      <div className="service-cards">
        <div className="service-card">
          <div className="icon">🎥</div>
          <h3>CCTV Installation</h3>
          <p>
            - Home & Business Setups<br />
            - Night Vision & Remote View<br />
            - Neat Cable Management
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🖥️</div>
          <h3>POS System Setup</h3>
          <p>
            - Sales & Inventory Systems<br />
            - Training & Maintenance<br />
            - Reliable Support
          </p>
        </div>

        <div className="service-card">
          <div className="icon">🔧</div>
          <h3>Computer Repairs</h3>
          <p>
            - Virus Removal<br />
            - Upgrades & Fixes<br />
            - Performance Boost
          </p>
        </div>
      </div>

      <div className="services-list">
        <h2>What We Offer:</h2>
        <ul>
          <li>✅ CCTV System Planning</li>
          <li>✅ POS Configuration & Support</li>
          <li>✅ Laptop & Desktop Repairs</li>
          <li>✅ Networking & Cabling</li>
          <li>✅ 24/7 Support & Maintenance</li>
        </ul>
      </div>

      <div className="services-gallery-preview">
        <h4>See Our Work</h4>
        <button onClick={() => navigate('/gallery')} className="cta-btn">View Gallery</button>
      </div>

      <div className="testimonials-preview">
        <blockquote>“They installed our CCTV in hours. Clean, professional and secure.”</blockquote>
        <cite>- Satisfied Client</cite>
      </div>
    </section>
  );
};

export default Services;
