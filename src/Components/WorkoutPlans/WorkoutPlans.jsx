//src/components/WorkoutPlans/WorkoutPlans.jsx
import React, { memo, useState } from 'react';
import { useNavigate } from 'react-router-dom';


const WorkoutPlan = memo(({ workoutPlan }) => {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

    const handleKickstart = () => {
      navigate(`/workout/${workoutPlan.id}`);
    };

  return (
    <div className='flex bg-white shadow-[0_35px_60px_-15px_rgba(0.5,0.5,0.5,0.5)] rounded-lg p-4 mb-4 relative'>
      <div className='w-1/3 mr-4'>
        <img
          src={workoutPlan.displayImage}
          alt={workoutPlan.name}
          className='mb-2'
          style={{ width: '300px', height: '200px' }}
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
          {expanded ? (
            <div
              onClick={toggleExpanded}
              style={{
                cursor: 'pointer',
                color: '#f04c0c',
                fontSize: '1.1rem',
              }}
            >
              Close
            </div>
          ) : (
            <div
              onClick={handleKickstart}
              style={{
                cursor: 'pointer',
                color: '#f04c0c',
                fontSize: '1.1rem',
              }}
            >
              Kick start the exercise ➔
            </div>
          )}
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
            {/* <h3 className='text-lg font-semibold mt-2'>Instructions:</h3> */}
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
    </div>
  );
})

export default WorkoutPlan;
