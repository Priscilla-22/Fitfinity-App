import React, { useState } from 'react';

const SortFilterBar = ({ onSortChange, onFilterChange }) => {
  const [sortBy, setSortBy] = useState('name');
  const [filters, setFilters] = useState({
    difficulty: [],
    bodyPart: [],
    equipment: [],
  });

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    onSortChange(event.target.value);
  };

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
      <h2 className='text-xl font-bold mb-2'>Sort and Filter</h2>
      <div className='mb-4'>
        <label
          htmlFor='sortBy'
          className='block text-gray-700 font-bold mb-1 mr-5'
        >
          Sort by:
        </label>
        <select
          id='sortBy'
          value={sortBy}
          onChange={handleSortChange}
          className='w-full border rounded-md py-1 px-2 '
        >
          <option value='name'>Name</option>
          <option value='difficulty'>Difficulty</option>
          <option value='bodyPart'>Body Part</option>
          <option value='equipment'>Equipment</option>
        </select>
      </div>
      <div className='mb-4'>
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
      <div className='mb-4'>
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
      <div className='mb-4'>
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
        <label htmlFor='machine' className='inline-block'>
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
  );
};

export default SortFilterBar;
