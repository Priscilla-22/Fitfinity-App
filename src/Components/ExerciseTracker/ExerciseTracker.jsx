import React, { useState } from 'react';

const ExerciseTracker = () => {
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [exercises, setExercises] = useState([]);

  const handleAddExercise = () => {
    const newExerciseEntry = { exercise, duration, notes };
    setExercises([...exercises, newExerciseEntry]);
    setExercise('');
    setDuration('');
    setNotes('');
  };

  const handleDeleteExercise = (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    setExercises(updatedExercises);
  };

  const totalDuration = exercises.reduce(
    (total, entry) => total + parseInt(entry.duration, 10),
    0
  );

  return (
    <div className='max-w-screen-md mx-auto p-4 border border-gray-200 rounded-lg shadow-md mt-8'>
      <h2 className='text-2xl text-orange-600 font-semibold mb-4 text-center'>
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
      <div className='mb-4'>
        <label className='block mb-2'>Notes:</label>
        <textarea
          className='w-full p-2 border border-gray-300 rounded-md'
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
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
            <li key={index} className='flex justify-between py-2'>
              <span>
                <span className='font-semibold'>Exercise:</span>{' '}
                {entry.exercise},
                <span className='font-semibold'>Duration:</span>{' '}
                {entry.duration}
                minutes
              </span>
              <button
                className='bg-red-600 hover:bg-red-300 text-white py-1 px-2 rounded-md'
                onClick={() => handleDeleteExercise(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className='mt-4'>
          <span className='font-semibold'>Total Duration:</span> {totalDuration}{' '}
          minutes
        </div>
      </div>
      <button
        className='bg-gray-600 hover:bg-gray-300 text-white py-2 px-4 rounded-md mt-4'
        onClick={() => setExercises([])}
      >
        Reset
      </button>
    </div>
  );
};

export default ExerciseTracker;
