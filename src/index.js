import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyRouter from './Component/MyRouter';
import Header from './Component/Header';


import reportWebVitals from './reportWebVitals';
import axios from "axios";
axios.defaults.baseURL="http://localhost:8000/api/";
ReactDOM.render(
  <React.StrictMode>
    <MyRouter/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
