import React from 'react';
import ReactDOM from 'react-dom/client';

// Router
import Router from './route';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
