import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    difficulty: '',
    bodyPart: '',
    equipment: '',
  });

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    onFilterChange(name, value);
  };

  return (
    <div className='bg-white shadow-md p-4 mb-4'>
      <h2 className='text-xl font-bold mb-2'>Filter</h2>
      <div className='mb-4'>
        <div className='mb-3'>
          <h3 className='text-lg font-bold mb-1'>Difficulty</h3>
          <select
            name='difficulty'
            value={filters.difficulty}
            onChange={handleFilterChange}
            className='border border-gray-300 rounded-md px-2 py-1 block w-full'
          >
            <option value=''>All</option>
            <option value='beginner'>Beginner</option>
            <option value='intermediate'>Intermediate</option>
            <option value='expert'>Expert</option>
          </select>
        </div>
        <div className='mb-3'>
          <h3 className='text-lg font-bold mb-1'>Body Part</h3>
          <select
            name='bodyPart'
            value={filters.bodyPart}
            onChange={handleFilterChange}
            className='border border-gray-300 rounded-md px-2 py-1 block w-full'
          >
            <option value=''>All</option>
            <option value='chest'>Chest</option>
            <option value='back'>Back</option>
            <option value='waist'>Waist</option>
            <option value='upper legs'>Upper Legs</option>
            <option value='lower legs'>Lower Legs</option>
          </select>
        </div>
        <div>
          <h3 className='text-lg font-bold mb-1'>Equipment</h3>
          <select
            name='equipment'
            value={filters.equipment}
            onChange={handleFilterChange}
            className='border border-gray-300 rounded-md px-2 py-1 block w-full'
          >
            <option value=''>All</option>
            <option value='body weight'>Body Weight</option>
            <option value='barbell'>Barbell</option>
            <option value='dumbbell'>Dumbbell</option>
            <option value='cable'>Cable</option>
            <option value='machine'>Machine</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
