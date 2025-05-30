import React from 'react';

const MapEmbed = () => (
  <div className="map-section" data-aos="fade-up">
    <h2>📍 Find Us in Mois Bridge</h2>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127606.91168990747!2d34.95733469337484!3d0.6613926999999948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x178001ab164eabc9%3A0xf96d5e758ad1723b!2sMois%20Bridge!5e0!3m2!1sen!2ske!4v1716984900000!5m2!1sen!2ske" 
      width="100%"
      height="300"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="105 CCTV Location"
    />
  </div>
);

export default MapEmbed;
