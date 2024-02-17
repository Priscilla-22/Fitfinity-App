import React from 'react';

const Testimonials = () => {
  return (
    <div className='py-12 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='lg:text-center'>
          <h2 className='text-base text-orange-600 font-semibold tracking-wide uppercase'>
            Testimonials
          </h2>
          <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
            What our users are saying.
          </p>
        </div>

        <div className='mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <p className='text-gray-500'>
                &ldquo;This app has completely changed my fitness journey. I
                love the workout planner and progress tracker. Highly
                recommend!&rdquo;
              </p>
              <div className='mt-4'>
                <div className='text-sm font-medium text-gray-900'>
                  Priscilla Wakahia 🦋
                </div>
                <div className='text-sm text-gray-500'>Kenya, Meru</div>
              </div>
            </div>
          </div>

          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <p className='text-gray-500'>
                &ldquo;I've been using this app for a few months now and I'm
                amazed at the results. The exercise tracker is so
                helpful.&rdquo;
              </p>
              <div className='mt-4'>
                <div className='text-sm font-medium text-gray-900'>
                  Joshua Al'Gore 🤎
                </div>
                <div className='text-sm text-gray-500'>Kenya, Ronga</div>
              </div>
            </div>
          </div>

          <div className='bg-white overflow-hidden shadow rounded-lg'>
            <div className='p-5'>
              <p className='text-gray-500'>
                &ldquo;I love the reminders and motivational quotes. This app
                has made working out so much more enjoyable.&rdquo;
              </p>
              <div className='mt-4'>
                <div className='text-sm font-medium text-gray-900'>
                  Linda Rono ❤️
                </div>
                <div className='text-sm text-gray-500'>Kenya, Ruiru</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
