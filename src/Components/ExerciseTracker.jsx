import React, { useState } from 'react';
import './ExerciseTracker.css';
const ExerciseTracker = () => {
    const [exercise, setExercise] = useState('');
    const [duration, setDuration] = useState('');
    const [exercises, setExercises] = useState([]);
  
    const handleAddExercise = () => {
      const newExerciseEntry = { exercise, duration };
      setExercises([...exercises, newExerciseEntry]);
      setExercise('');
      setDuration('');
    };
  
    return (
      <div>
        <h2>Exercise Tracker</h2>
        <div>
          <label>
            Exercise:
            <input type="text" value={exercise} onChange={(e) => setExercise(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            Duration (minutes):
            <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
          </label>
        </div>
        <button onClick={handleAddExercise}>Add Exercise</button>
        <div>
          <h3>Exercise History</h3>
          <ul>
            {exercises.map((entry, index) => (
              <li key={index}>
                Exercise: {entry.exercise}, Duration: {entry.duration} minutes
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  export default ExerciseTracker