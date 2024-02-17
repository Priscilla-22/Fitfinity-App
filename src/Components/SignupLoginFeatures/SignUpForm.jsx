import React, { useState } from 'react';

const SignUpForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).catch((err) => console.error('Error:', err));
        setFormData({ username:'',email: '', password: '' });

  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-sm'>
      <div className='mb-4'>
        <label
          htmlFor='username'
          className='block text-gray-700 font-bold mb-2'
        >
          Username
        </label>
        <input
          type='text'
          id='username'
          name='username'
          value={formData.username}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
          Email
        </label>
        <input
          type='email'
          id='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          htmlFor='password'
          className='block text-gray-700 font-bold mb-2'
        >
          Password
        </label>
        <input
          type='password'
          id='password'
          name='password'
          value={formData.password}
          onChange={handleChange}
          className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
          required
        />
      </div>
      <div className='flex items-center justify-between'>
        <button
          type='submit'
          className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded focus:outline-none focus:shadow-outline'
        >
          Submit
        </button>
        <span
          onClick={onClose}
          className='text-orange-600 hover:text-orange-300 font-xs px-2 cursor-pointer'
        >
          Close
          <hr className='border-orange-500' />
        </span>
      </div>
    </form>
  );
};

export default SignUpForm;
