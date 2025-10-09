import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
//create class components 
class Team extends React.Component {
    //create constructor
    constructor(props)
    {
        super(props);
        //create property variable
        this.name = props.name;
        this.flag = props.flag;
    }
    render() {
        return (<div className="col-lg-4 mb-3">
            <div className="card shadow">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-3">
                            <img src={this.flag} alt />
                        </div>
                        <div className="col-lg-9">
                            <h2 className="fs-4 text-uppercase">{this.name}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
class Cricket extends React.Component {
    render() {
        return (<div className="container mt-4">
            <div className="row">
                <div className="col-12 border-bottom my-3">
                    <h1>Cricket Teams</h1>
                </div>
                <Team name="India" flag="https://flagsapi.com/IN/flat/64.png" />
                <Team name="Australia" flag="https://flagsapi.com/AU/flat/64.png" />
                <Team name="England" flag="https://flagsapi.com/GB/flat/64.png" />
                <Team name="South Africa" flag="https://flagsapi.com/ZA/flat/64.png" />
                <Team name="New Zealand" flag="https://flagsapi.com/NZ/flat/64.png" />
                <Team name="Pakistan" flag="https://flagsapi.com/PK/flat/64.png" />
                <Team name="Sri Lanka" flag="https://flagsapi.com/LK/flat/64.png" />
                <Team name="Bangladesh" flag="https://flagsapi.com/BD/flat/64.png" />
                <Team name="Afghanistan" flag="https://flagsapi.com/AF/flat/64.png" />
                <Team name="Zimbabwe" flag="https://flagsapi.com/ZW/flat/64.png" />
                <Team name="Ireland" flag="https://flagsapi.com/IE/flat/64.png" />
                <Team name="Scotland" flag="https://flagsapi.com/GB/flat/64.png" />
                <Team name="Netherlands" flag="https://flagsapi.com/NL/flat/64.png" />
                <Team name="Nepal" flag="https://flagsapi.com/NP/flat/64.png" />
                <Team name="United Arab Emirates" flag="https://flagsapi.com/AE/flat/64.png" />
                <Team name="Namibia" flag="https://flagsapi.com/NA/flat/64.png" />
                <Team name="United States" flag="https://flagsapi.com/US/flat/64.png" />
                <Team name="Canada" flag="https://flagsapi.com/CA/flat/64.png" />
                <Team name="Oman" flag="https://flagsapi.com/OM/flat/64.png" />
            </div>
        </div>
        );
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cricket />)