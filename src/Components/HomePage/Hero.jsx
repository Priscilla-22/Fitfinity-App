import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'

const Hero = () => {
  return (
    <div
      className='bg-cover bg-center h-60'
      style={{ backgroundImage: `url('/path/to/hero-image.jpg')` }}
    >
      <div className='bg-gray-900 bg-opacity-50 h-60 items-center justify-center'>
              <div className='flex justify-between w-full max-w-screen-lg mx-auto px-4'>
                  <Header />
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
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white'>
            Get Fit and Stay Healthy
          </h2>
          <p className='text-xl text-white mt-4'>
            Sign up now and start your fitness journey with us!
          </p>
          <button className='bg-white text-gray-900 font-bold py-2 px-4 rounded-lg mt-8 hover:bg-gray-200'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
