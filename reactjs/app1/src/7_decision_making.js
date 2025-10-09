import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";

//create virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
function Member(person) {
    let prefix;
    if(person.gender === true)
    {
        prefix = "Mr. ";
    }    
    else 
    {
        prefix = "Miss/Mrs. ";
    }
    return (<div className="col-md-4 mb-4">
        <div className="card">
            <div className="card-header">
                <h5 className="card-title">{prefix} {person.name}</h5>
            </div>
            <div className="card-body">
                <p className="card-text"><strong>Date of Birth:</strong> {person.dob}</p>
                <p className="card-text"><strong>Weight:</strong> {person.weight} kg</p>
                <p className="card-text"><strong>Education:</strong> {person.degree}</p>
            </div>
        </div>
    </div>);
}
let person1 = {
    name: 'Ankit Patel',
    dob:'12-07-1985',
    gender:true,
    weight:75.99,
    degree:'mca'
}
//create user defined function 
function Family() {
    return (<div className="container my-5">
        <h1 className="text-center mb-4">Family Members</h1>
        <div className="row">
            {Member(person1)}
        </div>
    </div>
    )
}
root.render(Family());