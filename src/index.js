import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyRouter from './Component/MyRouter';
import Header from './Component/Header';
import {BrowserRouter} from "react-router-dom";


import reportWebVitals from './reportWebVitals';
import axios from "axios";
axios.defaults.baseURL="https://react-sports-site-laravel.herokuapp.com/api/";
var myRoute =(
  <MyRouter></MyRouter>

)
ReactDOM.render(myRoute,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
