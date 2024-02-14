import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';

const ImageSlider = () => {
  const [exerciseImages, setExerciseImages] = useState([]);

  useEffect(() => {
    fetchExerciseImages();
  }, []);

  const fetchExerciseImages = async () => {
    try {
      const response = await fetch('http://localhost:3000/exerciseImageSet');
      const data = await response.json();
      setExerciseImages(data);
    } catch (error) {
      console.error('Error fetching exercise images:', error);
    }
  };

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
          <div key={image.id} className='px-4 py-2'>
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
