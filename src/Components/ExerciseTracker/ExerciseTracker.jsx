import React, { useState } from 'react';

const ExerciseTracker = () => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleAddExercise = () => {
    const newExerciseEntry = { exercise, duration };
    setExercises([...exercises, newExerciseEntry]);
    setExercise('');
    setDuration('');
  };

  return (
    <div className='max-w-screen-md mx-auto p-4 border border-gray-200 rounded-lg shadow-md mt-8'>
      <h2 className='text-2xl font-semibold mb-4 text-center'>
        Exercise Tracker
      </h2>
      <div className='mb-4'>
        <label className='block mb-2'>Exercise:</label>
        <input
          type='text'
          className='w-full p-2 border border-gray-300 rounded-md'
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />
      </div>
      <div className='mb-4'>
        <label className='block mb-2'>Duration (minutes):</label>
        <input
          type='number'
          className='w-full p-2 border border-gray-300 rounded-md'
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button
        className='bg-orange-600 hover:bg-orange-300 text-white py-2 px-4 rounded-md'
        onClick={handleAddExercise}
      >
        Add Exercise
      </button>
      <div className='mt-8'>
        <h3 className='text-xl font-semibold mb-4'>Exercise History</h3>
        <ul className='divide-y divide-gray-200'>
          {exercises.map((entry, index) => (
            <li key={index} className='py-2'>
              <span className='font-semibold'>Exercise:</span> {entry.exercise},
              <span className='font-semibold'>Duration:</span> {entry.duration}
              minutes
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseTracker;
