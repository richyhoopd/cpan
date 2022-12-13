
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
// const React = require('react');
// const ReactDOM = require('react-dom/client');
// require('./index.css');
// const App = require('./App.js');
// const reportWebVitals = require('./reportWebVitals.js');


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
