import React from 'react';
import { NotificationManager } from 'react-notifications';

//function for Reminders
const Reminder = () => {
  const showReminder = () => {
    NotificationManager.info('Don\'t forget to workout today!');
  };

  return (
    <div>
      <button className="reminder-button" onClick={showReminder}> Click here!

      </button>
    </div>
  );
};

export default Reminder;
