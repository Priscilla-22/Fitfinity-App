import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Homepage from './Components/HomePage/HomePage.jsx';
import FitType from './Components/FitType.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';
import WorkoutPlanDetails from './Components/WorkoutPlanDetails/WorkoutPlanDetails.jsx';
import ProgressTracker from './Components/ProgressTracker';
import ExerciseTracker from './Components/ExerciseTracker';
import Navbar from './Components/HomePage/NavBar.jsx';
import './Components/ImageSlider/ImageSlider.css'
import './index.css';


const App = () => {

  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/workout-plans' element={<WorkoutPlanList />} />
          <Route path='/workout/:id' element={<WorkoutPlanDetails />} />
          <Route path='/fittype' element={<FitType />} />
          <Route path='/progress-tracker' element={<ProgressTracker />} />
          <Route path='/exercise-tracker' element={<ExerciseTracker />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
