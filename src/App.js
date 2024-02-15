import React from 'react';
import Reminder from './Components/Reminder.jsx'
import './index.css'; 


const App = () => {
  return (
    <div style = {{marginLeft:"75%"}}>
      <h1>Reminders!</h1>
      <Reminder />
    </div>
 
  );
};

export default App;
