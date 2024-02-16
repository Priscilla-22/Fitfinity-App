import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-bold text-gray-900'>
          <Link to='/'>
            FITFINITY <span style={{color:'#f04c0c'}}>APP</span>
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
