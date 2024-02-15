import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';
import WorkoutPlanDetails from './Components/WorkoutPlanDetails/WorkoutPlanDetails.jsx';

function App() {
  return (
    <Router>
      <div className='App'>
        <ImageSlider />
        <h1 className='text-4xl font-bold text-center mt-12 mb-3'>
          My Exercise Plan
        </h1>
        <hr className='mx-auto w-auto' style={{borderTop:'3px dotted #f04c0c', width:'220px'}} />
        <Routes>
          <Route path='/' element={<WorkoutPlanList />} />
          <Route path='/workout/:id' element={<WorkoutPlanDetails />} />
        </Routes>
      </div>
    </Router>

import './App.css';
import ProgressTracker from './components/ProgressTracker';
import ExerciseTracker from './components/ExerciseTracker';
function App() {
  return (
    <div className="App">
      <ProgressTracker />
      <ExerciseTracker />
    </div>
    

  );
}

export default App;
