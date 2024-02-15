import React, { useState } from 'react';

const FilterBar = ({ onFilterChange, workoutPlanNames }) => {
  const [filters, setFilters] = useState({
    difficulty: [],
    bodyPart: [],
    equipment: [],
  });

  const handleFilterChange = (event) => {
    const { name, value, checked } = event.target;
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
    onFilterChange(name, value, checked);
  };

  return (
    <div className='bg-white shadow-md p-4 mb-4'>
      <h2 className='text-xl font-bold mb-2'>Filter</h2>
      <div className='mb-4 flex justify-between'>
        <div className='mr-5'>
          <h3 className='text-lg font-bold mb-1'>Difficulty</h3>
          <label htmlFor='beginner' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='difficulty'
              value='beginner'
              onChange={handleFilterChange}
              id='beginner'
              className='form-checkbox mr-2'
            />
            Beginner
          </label>
          <label htmlFor='intermediate' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='difficulty'
              value='intermediate'
              onChange={handleFilterChange}
              id='intermediate'
              className='form-checkbox mr-2'
            />
            Intermediate
          </label>
          <label htmlFor='expert' className='inline-block'>
            <input
              type='checkbox'
              name='difficulty'
              value='expert'
              onChange={handleFilterChange}
              id='expert'
              className='form-checkbox mr-2'
            />
            Expert
          </label>
        </div>
        <div className='mr-5'>
          <h3 className='text-lg font-bold mb-1'>Body Part</h3>
          <label htmlFor='chest' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='bodyPart'
              value='chest'
              onChange={handleFilterChange}
              id='chest'
              className='form-checkbox mr-1'
            />
            Chest
          </label>
          <label htmlFor='back' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='bodyPart'
              value='back'
              onChange={handleFilterChange}
              id='back'
              className='form-checkbox mr-1'
            />
            Back
          </label>
          <label htmlFor='waist' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='bodyPart'
              value='waist'
              onChange={handleFilterChange}
              id='waist'
              className='form-checkbox mr-1'
            />
            Waist
          </label>
          <label htmlFor='upper legs' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='bodyPart'
              value='upper legs'
              onChange={handleFilterChange}
              id='upper legs'
              className='form-checkbox mr-1'
            />
            Upper Legs
          </label>
          <label htmlFor='lower legs' className='inline-block '>
            <input
              type='checkbox'
              name='bodyPart'
              value='lower legs'
              onChange={handleFilterChange}
              id='lower legs'
              className='form-checkbox mr-1'
            />
            Lower Legs
          </label>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-1'>Equipment</h3>
          <label htmlFor='body weight' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='equipment'
              value='body weight'
              onChange={handleFilterChange}
              id='body weight'
              className='form-checkbox mr-1'
            />
            Body Weight
          </label>
          <label htmlFor='barbell' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='equipment'
              value='barbell'
              onChange={handleFilterChange}
              id='barbell'
              className='form-checkbox mr-1'
            />
            Barbell
          </label>
          <label htmlFor='dumbbell' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='equipment'
              value='dumbbell'
              onChange={handleFilterChange}
              id='dumbbell'
              className='form-checkbox mr-1'
            />
            Dumbbell
          </label>
          <label htmlFor='cable' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='equipment'
              value='cable'
              onChange={handleFilterChange}
              id='cable'
              className='form-checkbox mr-1'
            />
            Cable
          </label>
          <label htmlFor='machine' className='inline-block mr-3'>
            <input
              type='checkbox'
              name='equipment'
              value='machine'
              onChange={handleFilterChange}
              id='machine'
              className='form-checkbox mr-1'
            />
            Machine
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
