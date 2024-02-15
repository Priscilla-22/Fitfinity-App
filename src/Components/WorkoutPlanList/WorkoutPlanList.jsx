import React, { useState, useEffect } from 'react';
import WorkoutPlan from '../WorkoutPlans/WorkoutPlans';
import SortFilterBar from '../FilterBar/FilterBar';

const WorkoutPlanList = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [filters, setFilters] = useState({
    difficulty: [],
    bodyPart: [],
    equipment: [],
  });

  useEffect(() => {
    fetchWorkoutPlans();
  }, []);

  const fetchWorkoutPlans = () => {
   fetch('http://localhost:3000/workoutPlans')
      .then((r) => r.json())
      .then((data)=>
      setWorkoutPlans(data))
     .catch( (err) =>  console.error('Error fetching workout plans:', err));
  };

  const handleFilterChange = (name, value, checked) => {
    if (checked) {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: [...prevFilters[name], value],
      }));
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: prevFilters[name].filter((f) => f !== value),
      }));
    }
  };

  const filteredWorkoutPlans = workoutPlans.filter((workoutPlan) => {
    if (
      filters.difficulty.length > 0 &&
      !filters.difficulty.includes(workoutPlan.difficulty)
    ) {
      return false;
    }
    if (
      filters.bodyPart.length > 0 &&
      !filters.bodyPart.includes(workoutPlan.bodyPart)
    ) {
      return false;
    }
    if (
      filters.equipment.length > 0 &&
      !filters.equipment.includes(workoutPlan.equipment)
    ) {
      return false;
    }
    return true;
  });

  return (
    <div className='max-w-screen-xl mx-auto'>
      <SortFilterBar
        onFilterChange={handleFilterChange}
        workoutPlanNames={workoutPlans.map((plan) => plan.name)}
      />
      {filteredWorkoutPlans.map((workoutPlan) => (
        <WorkoutPlan key={workoutPlan.id} workoutPlan={workoutPlan} />
      ))}
    </div>
  );
};

export default WorkoutPlanList;
