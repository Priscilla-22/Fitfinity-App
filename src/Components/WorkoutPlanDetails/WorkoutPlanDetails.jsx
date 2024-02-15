import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const WorkoutPlanDetails = () => {
  const { id } = useParams();
  const [workoutPlan, setWorkoutPlan] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/workoutPlans/${id}`)
      .then((r) => r.json())
      .then((data) => setWorkoutPlan(data));
  }, [id]);

  if (!workoutPlan) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex bg-white shadow-[0_35px_60px_-15px_rgba(0.5,0.5,0.5,0.5)] rounded-lg p-4 mb-4 relative'>
      <div className='w-1/3 mr-4'>
        <img
          src={workoutPlan.gifUrl}
          alt={workoutPlan.name}
          className='mb-2'
          style={{ maxWidth: '300px' }}
        />
      </div>
      <div className='w-2/3 flex flex-col justify-between'>
        <div className='mb-auto'>
          <h2 className='text-2xl font-bold'>
            {workoutPlan.name.toUpperCase()}
          </h2>
          <p className='text-gray-600'>
            Difficulty:{' '}
            <span className='font-bold'>{workoutPlan.difficulty}</span>
          </p>
          <p className='text-gray-600'>
            Body Part: <span className='font-bold'>{workoutPlan.bodyPart}</span>
          </p>
          <p className='text-gray-600'>
            Equipment:{' '}
            <span className='font-bold'>{workoutPlan.equipment}</span>
          </p>
        </div>
        <div className='text-center my-2'>
          <div
            style={{ cursor: 'pointer', color: '#f04c0c', fontSize: '1.1rem' }}
          >
             INSTRUCTIONS
          </div>
        </div>
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
        <h3 className='text-lg font-semibold mt-2'>Instructions:</h3>
        <ul className='list-disc pl-6'>
          {workoutPlan.instructions.map((instruction, index) => (
            <li key={index} className='text-gray-700'>
              {instruction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkoutPlanDetails;
