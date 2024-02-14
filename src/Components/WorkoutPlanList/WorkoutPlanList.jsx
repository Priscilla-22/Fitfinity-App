import React, { useState, useEffect } from 'react';
import WorkoutPlan from '../WorkoutPlans/WorkoutPlans';

const WorkoutPlanList = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);

  useEffect(() => {
    fetchWorkoutPlans();
  }, []);

  const fetchWorkoutPlans = async () => {
    try {
      const response = await fetch('http://localhost:3000/workoutPlans');
      const data = await response.json();
      setWorkoutPlans(data);
    } catch (error) {
      console.error('Error fetching workout plans:', error);
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto'>
      <h1 className='text-4xl font-bold mb-8'>Workout Plans</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {workoutPlans &&
          workoutPlans.map((workoutPlan) => (
            <WorkoutPlan key={workoutPlan.id} workoutPlan={workoutPlan} />
          ))}
      </div>
    </div>
  );
};

export default WorkoutPlanList;
