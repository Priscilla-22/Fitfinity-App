import React, { useState } from 'react';

const WorkoutPlan = ({ workoutPlan }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='bg-white shadow-[0_35px_60px_-15px_rgba(1.0,1.0,1.0,1.3)] rounded-lg p-4 mb-4 relative'>
      <img
        src={workoutPlan.gifUrl}
        alt={workoutPlan.name}
        className='mb-2'
        style={{ maxWidth: '300px' }}
      />
      <div className='mb-2'>
        <h2 className='text-2xl font-bold'>{workoutPlan.name.toUpperCase()}</h2>
        <p className='text-gray-600'>
          Difficulty:{' '}
          <span className='font-bold'>{workoutPlan.difficulty}</span>
        </p>
        <div
          className='text-center mt-2'
          onClick={toggleExpanded}
          style={{ cursor: 'pointer', color: '#f04c0c', fontSize: '1.1rem' }}
        >
          Learn More ➔
        </div>
      </div>
      {expanded && (
        <div>
          {workoutPlan.type && (
            <p className='text-gray-600'>
              Type: <span className='font-bold'>{workoutPlan.type}</span>
            </p>
          )}
          {workoutPlan.muscle && (
            <p className='text-gray-600'>
              Muscle: <span className='font-bold'>{workoutPlan.muscle}</span>
            </p>
          )}
          {workoutPlan.bodyPart && (
            <p className='text-gray-600'>
              Body Part:{' '}
              <span className='font-bold'>{workoutPlan.bodyPart}</span>
            </p>
          )}
          {workoutPlan.equipment && (
            <p className='text-gray-600'>
              Equipment:{' '}
              <span className='font-bold'>{workoutPlan.equipment}</span>
            </p>
          )}
          <h3 className='text-lg font-semibold mt-2'>Instructions:</h3>
          <ul className='list-disc pl-6'>
            {workoutPlan.instructions.map((instruction, index) => (
              <li key={index} className='text-gray-700'>
                {instruction}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WorkoutPlan;
