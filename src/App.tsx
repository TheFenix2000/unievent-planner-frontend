import React from 'react';

import { Toaster } from 'react-hot-toast';
/**
 * The Toaster component from react-hot-toast is used to display popup notifications.
 * It is placed at the root level to ensure that toast notifications can be triggered
 * from anywhere in the application. For further reference check https://react-hot-toast.com/
 */

import { CalendarView } from './screens/calendarView/calendarView';

const App = () => {
  return (
    <>
      <Toaster position="top-right" />
      <h1>Univent Planner</h1>
      <CalendarView />
    </>
  );
};

export default App;
