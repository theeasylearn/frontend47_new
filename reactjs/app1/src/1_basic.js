import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//create virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
let output = <div><h1>welcome to the reactjs world</h1><p>the easylearn academy</p></div>
root.render(output);
