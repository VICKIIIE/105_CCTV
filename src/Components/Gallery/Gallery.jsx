import React from 'react';
import './Gallery.css';
import CCTV_1 from '../../assets/CCTV_1.jpeg';
import CCTV_5 from '../../assets/CCTV_2.jpg';
import CCTV_3 from '../../assets/CCTV_3.jpg';
import CCTV_4 from '../../assets/CCTV_4.jpeg';
import CCTV_6 from '../../assets/CCTV_6.jpg';
import CCTV_7 from '../../assets/CCTV_7.jpeg';
import CCTV_8 from '../../assets/CCTV_8.jpeg';
import CCTV_9 from '../../assets/CCTV_9.jpeg'


import CCTV_Video from '../../assets/CCTV_Video.mp4'; 

const mediaItems = [
  { type: 'image', src: CCTV_3, title: 'Office CCTV Setup' },
  { type: 'image', src: CCTV_1, title: 'Night Vision Test' },
  { type: 'image', src: CCTV_4, title: 'Outdoor Installation' },
  { type: 'video', src: CCTV_Video, title: 'Installation Demo' },
  { type: 'image', src: CCTV_6, title: 'Control Room Setup' },
  { type: 'image', src: CCTV_7, title: 'Retail Security Grid' },
  {type: 'image', src: CCTV_8, title: 'Solar Powered Cameras' },
  {type:'image', src:CCTV_9, title:'PTZ Camera Installation'}
];

const Gallery = () => {
  return (
    <section className="gallery-section">
      <h2 className="gallery-title">
        Our <span className="highlight">Gallery</span>
      </h2>
      <div className="gallery-container">
        {mediaItems.map((item, index) => (
          <div className="gallery-card" key={index}>
            {item.type === 'image' ? (
              <img src={item.src} alt={item.title} className="gallery-img" />
            ) : (
              <video className="gallery-img" controls>
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
            <div className="overlay">
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
