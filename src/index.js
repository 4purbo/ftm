/*
File name: index.js

Description: Creates a root element and renders the App component inside it.
The root component is wrapped in strict mode for enhanced error detection during development.
The code at last calls the function reportWebVitals() for measuring performance in the app.
Briefly, this code sets up the main entry point of a React application.
*/
// !!NOTE: Nothing is responsible yet, so run the website only on big screens like laptop or pc.

import App from './app/App';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();