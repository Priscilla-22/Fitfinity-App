import React from 'react';
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
