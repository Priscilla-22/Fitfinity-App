import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='max-w-7xl mx-2 py-4 px-2 sm:px-6 lg:px-2'>
        <h1 className='text-3xl font-bold text-gray-900'>
          <Link to='/'>
            FITFINITY
            {/* <span style={{ color: '#f04c0c' }}>APP</span> */}
          </Link>
        </h1>
        <span className='text-orange-500 font-bold text-3xl w-30 '>APP</span>
      </div>
    </header>
  );
};

export default Header;
