import React from 'react';
import NavBar from './NavBar';
import Header from './Header';

const Hero = () => {
  return (
    <div
      className='bg-cover bg-center h-140'
      style={{ backgroundImage: `url('/path/to/hero-image.jpg')` }}
    >
      <div className='bg-gray-900 bg-opacity-50 h-140 items-center justify-center'>
        <div className='flex justify-between w-full h-14 max-w-screen-lg mx-1 mb-12 px-6 py-4'>
          <Header />
          <NavBar />
        </div>
        <div className='text-center '>
          <h2 className='text-4xl font-bold text-white'>
            Get Fit and Stay Healthy
          </h2>
          <p className='text-xl text-white mt-4'>
            Sign up now and start your fitness journey with us!
          </p>
          <button className='bg-white text-gray-900 font-bold py-2 px-4 rounded-lg mt-5 mb-5 hover:bg-gray-200'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
