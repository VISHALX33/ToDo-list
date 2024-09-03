import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This is optional if you have an index.css file
import App from './App'; // This assumes you have an App component in an App.js file
import './tailwind.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
