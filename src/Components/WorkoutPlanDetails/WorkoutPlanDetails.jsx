import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import workoutPlansData from '../data/db.json'; // Adjust the path as necessary

const WorkoutPlanDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const workoutPlan = workoutPlansData.find((plan) => plan.id === Number(id));

  if (!workoutPlan) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1 className='text-4xl font-bold text-center mt-12 mb-3'>
        My Exercise Plan
      </h1>
      <hr
        className='mx-auto w-auto'
        style={{ borderTop: '3px dotted #f04c0c', width: '220px' }}
      />
      <div className='flex bg-white shadow-[0_35px_60px_-15px_rgba(0.5,0.5,0.5,0.5)] rounded-lg p-4 my-2 relative'>
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
            <p className='text-gray-600' style={{ fontSize: '16px' }}>
              Difficulty:{' '}
              <span className='font-bold ml-1'>{workoutPlan.difficulty}</span>
            </p>
            <p className='text-gray-600' style={{ fontSize: '16px' }}>
              Body Part:{' '}
              <span className='font-bold ml-1'>{workoutPlan.bodyPart}</span>
            </p>
            <p className='text-gray-600' style={{ fontSize: '16px' }}>
              Equipment:{' '}
              <span className='font-bold ml-1'>{workoutPlan.equipment}</span>
            </p>
          </div>
          {workoutPlan.type && (
            <p className='text-gray-600' style={{ fontSize: '16px' }}>
              Type: <span className='font-bold'>{workoutPlan.type}</span>
            </p>
          )}
          {workoutPlan.muscle && (
            <p className='text-gray-600' style={{ fontSize: '16px' }}>
              Muscle:{' '}
              <span className='font-bold ml-3'>{workoutPlan.muscle}</span>
            </p>
          )}
          <h3
            className='text-lg font-semibold ml-20 mt-8'
            style={{ cursor: 'pointer', color: '#f04c0c', fontSize: '1.1rem' }}
          >
            INSTRUCTIONS
          </h3>
          <ul className='list-disc pl-6'>
            {workoutPlan.instructions.map((instruction, index) => (
              <li
                key={index}
                className='text-gray-700'
                style={{ fontSize: '16px' }}
              >
                {instruction}
              </li>
            ))}
          </ul>
          <div className='text-center my-4'>
            <button
              onClick={() => navigate(-1)}
              className=' text-white-800 font-bold  px-2 rounded'
              style={{ backgroundColor: '#f04c0c', color: 'white' }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutPlanDetails;
