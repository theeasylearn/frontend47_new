import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "./digital_clock.css";

//Component function
function DigitalClock() {
    //create Date class object
    var now = new Date();
    return (<div className="container clock-container">
        <div className="clock" id="clock">{now.getHours()}:{now.getMinutes()}:{now.getSeconds()}</div>
    </div>
    );
}
//normal function
function updateTime()
{
    root.render(DigitalClock());
}
//i want to call DigitalClock function at every seconds
setInterval(updateTime,1000);
const root = ReactDOM.createRoot(document.getElementById('root'));
