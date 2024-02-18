import React, { useState } from 'react';

const ProgressTracker = () => {
  const [weight, setWeight] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [progress, setProgress] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleAddProgress = () => {
    if (
      isNaN(weight) ||
      weight < 0 ||
      weight > 500 ||
      isNaN(bodyFat) ||
      bodyFat < 0 ||
      bodyFat > 100
    ) {
      alert('Please enter a valid weight and body fat percentage.');
      return;
    }

    const newProgressEntry = { weight, bodyFat, date: selectedDate };
    setProgress([newProgressEntry, ...progress]);
    setWeight('');
    setBodyFat('');
  };

  return (
    <div className='max-w-screen-md mx-auto p-4 border border-gray-200 rounded-lg shadow-md mt-10'>
      <h2 className='text-2xl text-orange-600 font-semibold mb-4 text-center'>
        Progress Tracker
      </h2>
      <div className='mb-4'>
        <label className='block mb-2'>Date:</label>
        <input
          type='date'
          className='w-full p-2 border border-gray-300 rounded-md'
          value={selectedDate.toISOString().slice(0, 10)}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2'>Weight:</label>
        <input
          type='number'
          step='0.1'
          min='0'
          max='500'
          className='w-full p-2 border border-gray-300 rounded-md'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2'>Body Fat %:</label>
        <input
          type='number'
          step='0.1'
          min='0'
          max='100'
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
              <span className='font-semibold'>Date:</span>{' '}
              {entry.date.toLocaleDateString()},{' '}
              <span className='font-semibold'>Weight:</span>{' '}
              {Number(entry.weight).toFixed(1)} kg,{' '}
              <span className='font-semibold'>Body Fat:</span>{' '}
              {Number(entry.bodyFat).toFixed(1)}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
