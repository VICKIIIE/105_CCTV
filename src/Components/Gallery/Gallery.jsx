import React from 'react';
import './Gallery.css';
import CCTV_1 from '../../assets/CCTV_1.jpg'
import CCTV_5 from '../../assets/CCTV_2.jpg'
import CCTV_3 from '../../assets/CCTV_3.jpg'
import CCTV_4 from '../../assets/CCTV_4.jpg'
import CCTV_2 from '../../assets/CCTV_5.jpg'
import CCTV_6 from '../../assets/CCTV_6.jpg'



const images = [
  { src: CCTV_3, title: 'Office CCTV Setup' },
  { src: CCTV_1, title: 'Night Vision Test' },
  { src: CCTV_4, title: 'Outdoor Installation' },
  { src: CCTV_6, title: 'Control Room Setup' },
  { src: CCTV_2, title: 'Client Demonstration' },
  { src: CCTV_5, title: 'Retail Security Grid' },
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">Our <span className="highlight">Gallery</span></h2>
      <div className="gallery-container">
        {images.map((img, index) => (
          <div className="gallery-card" key={index}>
            <img src={img.src} alt={img.title} className="gallery-img" />
            <div className="overlay">
              <p>{img.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
