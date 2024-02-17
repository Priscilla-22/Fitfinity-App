import React from 'react';
import { useLocation } from 'react-router-dom';
import ImageSlider from '../ImageSlider/ImageSlider';
import '../ImageSlider/ImageSlider.css'

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`navbar ${isHomePage ? 'home-navbar' : ''}`}>
      {!isHomePage && <ImageSlider />}
     
    </div>
  );
};

export default Navbar;
