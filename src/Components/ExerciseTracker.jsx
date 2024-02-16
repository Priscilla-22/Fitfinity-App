
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
    <div className="exercise-container">
      <h2 className="exercise-heading">Exercise Tracker</h2>
      <div>
        <label>
          Exercise:
          <input type="text" className="exercise-input" value={exercise} onChange={(e) => setExercise(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Duration (minutes):
          <input type="number" className="exercise-input" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
      </div>
      <button className="exercise-button" onClick={handleAddExercise}>Add Exercise</button>
      <div className="exercise-history">
        <h3>Exercise History</h3>
        <ul className="exercise-list">
          {exercises.map((entry, index) => (
            <li className="exercise-list-item" key={index}>
              Exercise: {entry.exercise}, Duration: {entry.duration} minutes
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ExerciseTracker;
