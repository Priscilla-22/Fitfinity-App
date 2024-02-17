import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const Hero = () => {
  return (
    <div
      className='bg-cover bg-center mt-0'
      style={{
        backgroundImage: `url('/path/to/hero-image.jpg')`,
        marginTop: 0,
      }}
    >
      <div className='bg-black bg-opacity-90 pb-3'>
        <div className='flex justify-between w-full h-14 max-w-screen-lg mx-1 mb-12 px-6 py-3'>
          <Header />
          <div>
            <ul className='flex space-x-4  font-semibold text-white px-4'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/workout-plans'>Workout-Plans</Link>
              </li>
              <li>
                <Link to='/fittype'>Fit-Type</Link>
              </li>
              <li>
                <Link to='/progress-tracker'>Progress-Tracker</Link>
              </li>
              <li>
                <Link to='/exercise-tracker'>Exercise-Tracker</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='text-center '>
          <h2 className='text-4xl font-bold text-white'>
            Get Fit and Stay Healthy
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
