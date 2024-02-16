
import React, { useState } from 'react';
import './ProgressTracker.css';

const ProgressTracker = () => {
  const [weight, setWeight] = useState('');
  const [bodyFat, setBodyFat] = useState('');
  const [progress, setProgress] = useState([]);

  const handleAddProgress = () => {
    const newProgressEntry = { weight, bodyFat };
    setProgress([...progress, newProgressEntry]);
    setWeight('');
    setBodyFat('');
  };

  return (
    <div className="progress-container">
      <h2 className="progress-heading">Progress Tracker</h2>
      <div>
        <label>
          Weight:
          <input type="number" className="progress-input" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Body Fat %:
          <input type="number" className="progress-input" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
        </label>
      </div>
      <button className="progress-button" onClick={handleAddProgress}>Add Progress</button>
      <div className="progress-history">
        <h3>Progress History</h3>
        <ul className="progress-list">
          {progress.map((entry, index) => (
            <li className="progress-list-item" key={index}>
              <span>Weight:</span> {entry.weight} kg, <span>Body Fat:</span> {entry.bodyFat}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
