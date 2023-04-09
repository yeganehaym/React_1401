import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DisplayOrders from './Orders/DisplayOrders';
import reportWebVitals from './reportWebVitals';
import Counter from "./Counter/Counter";
import Counters from "./Counter/Counters";
import ProductBox from "./Products/ProductBox";
import ProductList from "./Products/ProductList";
import Signup from "./Joi/Signup";
import DisplayProducts from "./Hooks/DisplayProducts";
import Calendar from "./Calendar/Calendar";
import Movies from "./Calendar/Movies";
import {TopMovies} from "./SFC/TopMovies";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
   <TopMovies />
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
