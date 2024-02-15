import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FitType from './components/FitType.jsx';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<FitType />} />
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
