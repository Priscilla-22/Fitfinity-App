// src/components/ImageSlider/ImageSlider.jsx
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import data from '../../data/db.json'; 

const ImageSlider = () => {
  const [exerciseImages, setExerciseImages] = useState([]);

  useEffect(() => {
    // Initialize exercise images from the imported data
    setExerciseImages(data.exerciseImageSet);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <Slider {...settings}>
        {exerciseImages.map((image) => (
          <div key={image.id} className='slider-item'>
            <div className='slider-description'>
              {image.description.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={index % 2 === 0 ? 'white' : 'orange'}
                >
                  {word}{' '}
                </span>
              ))}
            </div>
            <img
              src={image.url}
              alt={image.description}
              className='slider-image'
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
