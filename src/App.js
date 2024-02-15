import React from 'react';

import Reminder from './Components/Reminder.jsx'
import './index.css'; 


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

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ImageSlider from './Components/ImageSlider/ImageSlider.jsx';
import WorkoutPlanList from './Components/WorkoutPlanList/WorkoutPlanList.jsx';
import WorkoutPlanDetails from './Components/WorkoutPlanDetails/WorkoutPlanDetails.jsx';



const App = () => {
  return (

    <div style = {{marginLeft:"75%"}}>
      <h1>Reminders!</h1>
      <Reminder />
    </div>
 
  );
};

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
};



export default App;