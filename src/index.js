import React from 'react';
import ReactDOM from 'react-dom';
import { NotificationContainer } from 'react-notifications';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <NotificationContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
