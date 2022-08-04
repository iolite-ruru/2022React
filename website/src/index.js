import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './website/Main';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
