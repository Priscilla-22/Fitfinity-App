import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-white shadow-md'>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900'>
          <Link to='/'>My Fitness App</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
