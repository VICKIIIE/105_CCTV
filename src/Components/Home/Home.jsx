import Athena from '../../assets/pexels-athena-2582931.jpeg'
import React, { useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="home" style={{ backgroundImage: `url(${Athena})` }}>
      <div className="home-overlay">
        <div className="home-content" data-aos="fade-up">
          <h1 className="highlight">At 105 CCTV, Your Security is Our Top Priority</h1>
          <p className="highlight">
            We specialize in professional CCTV installation, POS system setup, and reliable computer repairs for homes and businesses.
          </p>
          <div className="home-buttons">
            <button className="cta-btn" onClick={() => navigate('/contact')}>
              📞 Book a Service
            </button>
            <button className="outline-btn" onClick={() => navigate('/about')}>
              ℹ️ Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
