import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';
import AppRouter from './Components/Registration/AppRouter';
import Navigation from './Components/Registration/Navigation.jsx';


const App = () => {
  return (
    <Router>
      <div>
        <ImageSlider/>
        <WorkoutPlanList/>
        <Navigation />
        <AppRouter />
      </div>
    </Router>

  );
};


export default App;