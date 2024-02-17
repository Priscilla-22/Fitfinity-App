import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black bg-opacity-100  text-white py-8'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>Company</h3>
            <ul>
              <li>
                <a href='/about' className='text-white hover:text-gray-400'>
                  About Us
                </a>
              </li>
              <li>
                <a
                  href='/contact'
                  className='text-white hover:text-gray-```400'
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href='/terms' className='text-white hover:text-gray-400'>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href='/privacy' className='text-white hover:text-gray-400'>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Products</h3>
            <ul>
              <li>
                <a href='/product1' className='text-white hover:text-gray-400'>
                  Product 1
                </a>
              </li>
              <li>
                <a href='/product2' className='text-white hover:text-gray-400'>
                  Product 2
                </a>
              </li>
              {/* Add more product links as needed */}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold mb-4'>Follow Us</h3>
            <ul>
              <li>
                <a
                  href='https://www.facebook.com/'
                  className='text-white hover:text-gray-400'
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/'
                  className='text-white hover:text-gray-400'
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href='https://www.instagram.com/'
                  className='text-white hover:text-gray-400'
                >
                  Instagram
                </a>
              </li>
              {/* Add more social media links as needed */}
            </ul>
          </div>
        </div>
      </div>
      <div className='mt-8 text-center border-t border-gray-700 pt-4'>
        <p className='text-gray-400'>
          &copy; {new Date().getFullYear()} My Fitness App. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
