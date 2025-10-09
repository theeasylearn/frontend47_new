import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//create virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
let num1 = 10; 
let num2 = 3;
let name = "the easylearn academy";
let output = (<div>
    <h1>{name}</h1>
    <table border='1' align='center' cellpadding='10'>
        <tr>
            <td>Addition</td>
            <td>{num1 + num2}</td>
        </tr>
        <tr>
            <td>Subtraction</td>
            <td>{num1 - num2}</td>
        </tr>
        <tr>
            <td>Multiplication</td>
            <td>{num1 * num2}</td>
        </tr>
        <tr>
            <td>Division</td>
            <td>{num1 / num2}</td>
        </tr>
        
    </table>
</div>)
root.render(output);
