//src/components/WorkoutPlanList/WorkoutPlanList.jsx
import React, { useState, useEffect } from 'react';
import WorkoutPlan from '../WorkoutPlans/WorkoutPlans';
import FilterBar from '../FilterBar/FilterBar';

const WorkoutPlanList = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [filters, setFilters] = useState({
    difficulty: '',
    bodyPart: '',
    equipment: '',
  });

 useEffect(() => {
   import('../../data/db.json').then((data) => {
     setWorkoutPlans(data.workoutPlans);
   });
 }, []);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredWorkoutPlans = workoutPlans.filter((workoutPlan) => {
    if (
      filters.difficulty !== '' &&
      filters.difficulty !== workoutPlan.difficulty
    ) {
      return false;
    }
    if (filters.bodyPart !== '' && filters.bodyPart !== workoutPlan.bodyPart) {
      return false;
    }
    if (
      filters.equipment !== '' &&
      filters.equipment !== workoutPlan.equipment
    ) {
      return false;
    }
    return true;
  });

  return (
    <>
      <div className='text-4xl font-bold text-center mt-12 mb-3'>
        My Exercise Plan
      </div>
      <hr
        className='mx-auto w-auto'
        style={{ borderTop: '3px dotted #f04c0c', width: '220px' }}
      />
      <div className='max-w-screen-xl mx-auto flex'>
        <div className='w-1/4 mr-4'>
          <FilterBar onFilterChange={handleFilterChange} />
        </div>
        <div className='w-3/4'>
          {filteredWorkoutPlans.map((workoutPlan) => (
            <WorkoutPlan key={workoutPlan.id} workoutPlan={workoutPlan} />
          ))}
        </div>
      </div>
    </>
  );
};

export default WorkoutPlanList;
