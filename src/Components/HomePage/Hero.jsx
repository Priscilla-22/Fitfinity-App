import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import SignUpForm from '../SignupLoginFeatures/SignUpForm';
import LogInForm from '../SignupLoginFeatures/LoginForm';

const Hero = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLogInForm, setShowLogInForm] = useState(false);

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
    setShowLogInForm(false);
  };

  const toggleLogInForm = () => {
    setShowLogInForm(!showLogInForm);
    setShowSignUpForm(false);
  };

  const handleCloseForm = () => {
    setShowSignUpForm(false);
    setShowLogInForm(false);
  };
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
            <ul className='flex space-x-4 font-semibold text-white px-4'>
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
        <div className='text-center'>
          <h2 className='text-4xl font-bold text-white'>
            Get Fit and Stay Healthy
          </h2>
        </div>
        <div className='flex justify-center items-center mt-5'>
          <button
            onClick={toggleSignUpForm}
            className='bg-orange-600 hover:bg-orange-400 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline mr-4'
          >
            Sign Up
          </button>
          <button
            onClick={toggleLogInForm}
            className='bg-orange-600 hover:bg-orange-400 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline'
          >
            Log In
          </button>
        </div>
        {showSignUpForm && (
          <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='mr-4 bg-white px-4 py-3'>
              <h3 className='text-lg font-bold text-orange-600 mb-2 flex justify-center items-center'>
                Sign Up
              </h3>
              <SignUpForm onClose={handleCloseForm} />
            </div>
          </div>
        )}

        {showLogInForm && (
          <div className='fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50'>
            <div className='bg-white px-4 py-3'>
              <h3 className='text-lg font-bold  text-orange-600 mb-2 flex justify-center items-center'>
                Log In
              </h3>
              <LogInForm onClose={handleCloseForm} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
