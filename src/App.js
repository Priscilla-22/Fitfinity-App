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
        <h1 className='text-4xl font-bold text-center my-12'>
          My Exercise Plan
        </h1>
        <Routes>
          <Route path='/' element={<WorkoutPlanList />} />
          <Route path='/workout/:id' element={<WorkoutPlanDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
