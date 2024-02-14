import React, { useState } from 'react';

const WorkoutPlan = ({ workoutPlan }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='bg-white shadow-[0_35px_60px_-15px_rgba(1.0,1.0,1.0,1.3)] rounded-lg p-4 mb-4 relative'>
      <img src={workoutPlan.gifUrl} alt={workoutPlan.name} className='mb-2' />
      <div className='mb-2'>
        <h2 className='text-2xl font-bold'>{workoutPlan.name}</h2>
        <p className='text-gray-600'>
          Difficulty:{' '}
          <span className='font-bold'>{workoutPlan.difficulty}</span>
        </p>
      </div>
      {!expanded && (
        <button
          onClick={toggleExpanded}
          className='absolute bottom-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
        >
          Learn More
        </button>
      )}
      {expanded && (
        <div>
          <p className='text-gray-600'>
            Body Part: <span className='font-bold'>{workoutPlan.bodyPart}</span>
          </p>
          <p className='text-gray-600'>
            Equipment:{' '}
            <span className='font-bold'>{workoutPlan.equipment}</span>
          </p>
          <p className='text-gray-600'>
            Target: <span className='font-bold'>{workoutPlan.target}</span>
          </p>
          <p className='text-gray-600'>
            Secondary Muscles:{' '}
            <span className='font-bold'>
              {workoutPlan.secondaryMuscles &&
                workoutPlan.secondaryMuscles.join(', ')}
            </span>
          </p>
          <h3 className='text-xl font-bold mt-2'>Instructions:</h3>
          <ul className='list-disc list-inside text-gray-600'>
            {Array.isArray(workoutPlan.instructions) &&
              workoutPlan.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
          </ul>
          <button
            onClick={toggleExpanded}
            className='mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlan;
