import React from 'react';

const Features = () => {
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-orange-600 font-semibold tracking-wide uppercase'>
            Our Features
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            A better way to track your fitness.
          </p>
          <p className='mt-4 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus quia, tenetur minus voluptate odio placeat quod ea
            molestias, repellat veritatis corrupti explicabo officia itaque fuga
            asperiores repellat.
          </p>
        </div>

        <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <svg
                    className='h-6 w-6 text-orange-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Workout Planner
                  </h3>
                  <p className='text-base text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <svg
                    className='h-6 w-6 text-orange-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M10 21h7a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                    />
                  </svg>
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Progress Tracker
                  </h3>
                  <p className='text-base text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <div className='flex items-center'>
                <div className='flex-shrink-0'>
                  <svg
                    className='h-6 w-6 text-orange-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 15l-2 5L9 9l11 4-4 2L5 14l6-4 6 4z'
                    />
                  </svg>
                </div>
                <div className='ml-4'>
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    Exercise Tracker
                  </h3>
                  <p className='text-base text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer nec odio. Praesent libero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
