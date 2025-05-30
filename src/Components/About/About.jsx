import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FeatureBox from './FeatureBox';
import CTASection from './CTASection';
import MapEmbed from './MapEmbed';
import WhyChooseUs from './WhyChooseUs';
import Testimonials from './Testimonials';
import './About.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about">
      <div className="about-overlay">
        <div className="about-content">
          <h1><span className="highlight">Who We Are</span></h1>
          <p><span className="highlight">
            At 105 CCTV, we are passionate about keeping your home and business secure. With years of experience in tech services, our goal is to provide the most reliable security installations and IT solutions in Mois Bridge and beyond.
          </span></p>

          <div className="features">
            <FeatureBox icon="🛠️" title="Professional Installation" description="Expertly installed CCTV systems with a focus on coverage, clarity, and accessibility." />
            <FeatureBox icon="📍" title="Our Location" description="Based in Mois Bridge, we serve clients across surrounding areas with on-site and remote services." />
            <FeatureBox icon="📞" title="Support" description="Dedicated support whenever you need us — because your safety doesn’t sleep." />
            <FeatureBox icon="🧠" title="Skilled Team" description="Our technicians are certified, experienced, and passionate about delivering the best." />
          </div>

          <WhyChooseUs />
          <Testimonials />
          <MapEmbed />
          <CTASection />
        </div>
      </div>
    </section>
  );
};

export default About;
