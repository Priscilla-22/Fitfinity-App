import React, { useState } from 'react';

const ProgressTracker = () => {
  const [weight, setWeight] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [progress, setProgress] = useState([]);

  const handleAddProgress = () => {
    const newProgressEntry = { weight, bodyFat };
    setProgress([...progress, newProgressEntry]);
    setWeight('');
    setBodyFat('');
  };

  return (
    <div className='max-w-screen-md mx-auto p-4 border border-gray-200 rounded-lg shadow-md mt-10'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>
        Progress Tracker
      </h2>
      <div className='mb-4'>
        <label className='block mb-2'>Weight:</label>
        <input
          type='number'
          className='w-full p-2 border border-gray-300 rounded-md'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2'>Body Fat %:</label>
        <input
          type='number'
          className='w-full p-2 border border-gray-300 rounded-md'
          value={bodyFat}
          onChange={(e) => setBodyFat(e.target.value)}
        />
      </div>
      <button
        className='bg-orange-600 hover:bg-orange-300 text-white py-2 px-4 rounded-md'
        onClick={handleAddProgress}
      >
        Add Progress
      </button>
      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-4'>Progress History</h3>
        <ul className='divide-y divide-gray-200'>
          {progress.map((entry, index) => (
            <li key={index} className='py-2'>
              <span className='font-semibold'>Weight:</span> {entry.weight} kg,{' '}
              <span className='font-semibold'>Body Fat:</span> {entry.bodyFat}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
