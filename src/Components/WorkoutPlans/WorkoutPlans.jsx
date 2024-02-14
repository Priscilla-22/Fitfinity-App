import React from 'react';

const WorkoutPlan = ({ workoutPlan }) => {
  return (
    <div className='bg-white shadow-md rounded-lg p-4 mb-4'>
      <h2 className='text-2xl font-bold mb-2'>{workoutPlan.name}</h2>
      <p className='text-gray-600 mb-2'>
        Body Part: <span className='font-bold'>{workoutPlan.bodyPart}</span>
      </p>
      <p className='text-gray-600 mb-2'>
        Equipment: <span className='font-bold'>{workoutPlan.equipment}</span>
      </p>
      <p className='text-gray-600 mb-2'>
        Target: <span className='font-bold'>{workoutPlan.target}</span>
      </p>
      <p className='text-gray-600 mb-2'>
        Difficulty: <span className='font-bold'>{workoutPlan.difficulty}</span>
      </p>
      <p className='text-gray-600 mb-2'>
        Secondary Muscles:{' '}
        <span className='font-bold'>
          {workoutPlan.secondaryMuscles &&
            workoutPlan.secondaryMuscles.join(', ')}
        </span>
      </p>
      <h3 className='text-xl font-bold mb-2'>Instructions:</h3>
      <ul className='list-disc list-inside text-gray-600'>
        {Array.isArray(workoutPlan.instructions) &&
          workoutPlan.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
      </ul>
    </div>
  );
};

export default WorkoutPlan;
