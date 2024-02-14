import React, { useState, useEffect } from 'react';
import WorkoutPlan from '../WorkoutPlans/WorkoutPlans';
import SortFilterBar from '../SortFilterBar/SortFilterBar';

const WorkoutPlanList = () => {
  const [workoutPlans, setWorkoutPlans] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [filters, setFilters] = useState({
    difficulty: [],
    bodyPart: [],
    equipment: [],
  });

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

  const handleSortChange = (sortBy) => {
    setSortBy(sortBy);
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

  const sortedWorkoutPlans = filteredWorkoutPlans.sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'difficulty') {
      return a.difficulty.localeCompare(b.difficulty);
    } else if (sortBy === 'bodyPart') {
      return a.bodyPart.localeCompare(b.bodyPart);
    } else if (sortBy === 'equipment') {
      return a.equipment.localeCompare(b.equipment);
    }
    return 0;
  });

  return (
    <div className='max-w-screen-xl mx-auto'>
      <SortFilterBar
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {sortedWorkoutPlans.map((workoutPlan) => (
          <WorkoutPlan key={workoutPlan.id} workoutPlan={workoutPlan} />
        ))}
      </div>
    </div>
  );
};

export default WorkoutPlanList;
