//Importing React
import React from 'react';
// NOT SURE WHAT THIS DOES?
import ReactDOM from 'react-dom';
//Importing BrowserRouter to navigate between pages
import { BrowserRouter } from "react-router-dom";
//Importing styles sheet
import './index.css';
//Importing info on the App page, which holds what shows on site
import App from './App';
//Importing this page - not sure what it does
import reportWebVitals from './reportWebVitals';

//Function that has control over site navigation
//Houses the App component (which houses the content)... I think..?
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

