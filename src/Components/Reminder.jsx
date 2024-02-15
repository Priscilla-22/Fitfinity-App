import React from 'react';
import { NotificationManager } from 'react-notifications';

//function for Reminders
const Reminder = () => {
  const showReminder = () => {
    NotificationManager.info('Don\'t forget to workout today!');
  };

  return (
    <div>
      <button onClick={showReminder}>Show Reminder</button>
    </div>
  );
};

export default Reminder;
