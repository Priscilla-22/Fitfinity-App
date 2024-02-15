import React, { useState } from 'react';

// Progress tracking component
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
    <div>
      <h2>Progress Tracker</h2>
      <div>
        <label>
          Weight:
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Body Fat %:
          <input type="number" value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
        </label>
      </div>
      <button onClick={handleAddProgress}>Add Progress</button>
      <div>
        <h3>Progress History</h3>
        <ul>
          {progress.map((entry, index) => (
            <li key={index}>
              Weight: {entry.weight} kg, Body Fat: {entry.bodyFat}%
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProgressTracker;
