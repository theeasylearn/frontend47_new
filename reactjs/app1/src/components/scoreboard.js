import React from "react";
export default class Scoreboard extends React.Component {

    constructor(props) {
        super(props);
        //create state variable
        this.state = {
            zero: 0,
            one: 0,
            two: 0,
            three: 0,
            four: 0,
            six: 0,
            runs: 0,
            ball: 0,
            strike: 0
        }
    }
    updateScore = (value) => {
        console.log(value);
        switch (value) {
            case 0:
                this.setState({
                    zero: this.state.zero + 1
                });
                break;
            case 1:
                this.setState({
                    one: this.state.one + 1
                });
                break;
            case 2:
                this.setState({
                    two: this.state.two + 1
                });
                break;
            case 3:
                this.setState({
                    three: this.state.three + 1
                });
                break;
            case 4:
                this.setState({
                    four: this.state.four + 1
                });
                break;
            case 6:
                this.setState({
                    six: this.state.six + 1
                });
                break;

        }
    }
    render() {
        return (<div className="container mt-5">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card text-center">
                        <div className="card-header bg-primary text-white">
                            <h2>Virat Kohli</h2>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Match Statistics</h5>
                            <p className="card-text"><strong>Runs:</strong> 100</p>
                            <p className="card-text"><strong>Balls:</strong> 20</p>
                            <p className="card-text"><strong>Strike Rate:</strong> 100</p>
                            <hr />
                            <h6 className="card-subtitle mb-2 text-muted">Runs per Over</h6>
                            <div className="row">
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5" onClick={() => this.updateScore(0)}>0 X <span className="badge bg-warning text-dark">{this.state.zero}</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5" onClick={() => this.updateScore(1)}>1 X <span className="badge bg-warning text-dark">{this.state.one}</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5" onClick={() => this.updateScore(2)} >2 X <span className="badge bg-warning text-dark">{this.state.two}</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5" onClick={() => this.updateScore(3)}>3 X <span className="badge bg-warning text-dark">{this.state.three}</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5" onClick={() => this.updateScore(4)}>4 X <span className="badge bg-warning text-dark">{this.state.four}</span></button></div>
                                <div className="col-2 border"><button type="button" className="btn w-100 btn-primary fs-5" onClick={() => this.updateScore(6)}>6 X <span className="badge bg-warning text-dark">{this.state.six}</span></button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}