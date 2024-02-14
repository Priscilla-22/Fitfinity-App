import React from 'react';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';

function App() {
  return (
    <div className='App'>
      <ImageSlider />
     <h1 className='text-4xl font-bold text-center my-12'>My Exercise Plan</h1>
      <WorkoutPlanList />
    </div>
  );
}

export default App;