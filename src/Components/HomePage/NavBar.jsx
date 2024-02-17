import React from 'react';
import {Link, useLocation } from 'react-router-dom';
import ImageSlider from '../ImageSlider/ImageSlider';

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className={`navbar ${isHomePage ? 'home-navbar' : ''}`}>
      {!isHomePage && <ImageSlider />}
     <div>
            <ul className='flex space-x-4 '>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/workout-plans'>Workout Plans</Link>
              </li>
              <li>
                <Link to='/fittype'>Fit Type</Link>
              </li>
              <li>
                <Link to='/progress-tracker'>Progress Tracker</Link>
              </li>
              <li>
                <Link to='/exercise-tracker'>Exercise Tracker</Link>
              </li>
            </ul>
          </div>
    </div>
  );
};

export default Navbar;
