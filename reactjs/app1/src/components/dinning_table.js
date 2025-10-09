import React from "react";
class DinningTable extends React.Component {
    constructor(props) {
        super(props); //required 
        // console.log('constructor called....')
        //property variable
        this.name = props.name;
        this.tableno = props.tableno;
        this.thaliPrice = 100;
        this.chasPrice = 7;
        this.rotiPrice = 5;
        this.sweetPrice = 13;
        this.papadPrice = 11;
        //state object
        this.state = {
            thali: 0,
            roti: 0,
            chas: 0,
            papad: 0,
            sweet: 0,
            total: 0
        }
    }

    componentWillMount() {
        // console.log('componentWillMount method called...');
    }
    componentDidMount() {
        // console.log('componentDidMount method called...');
    }

    shouldComponentUpdate(nextProp, nextState) {
        // console.log('shouldComponentUpdate method called...');
        // console.log(nextState);
        if (nextState.thali === this.state.thali || nextState.thali <= 5) {
            return true;
        }
        else {
            this.setState({
                thali: 5
            });
            return false;
        }

    }
    componentWillUpdate(nextProp, nextState) {
        // console.log('componentWillUpdate method called...');
        // console.log(nextState);
    }
    //arrow function
    updateThali = () => {
        // this.state.thali = this.state.thali + 1 won't work because thali is state
        this.setState({
            thali: this.state.thali + 1,
            // 
        });
    }

    updateRoti = () => {
        this.setState({
            roti: this.state.roti + 1
        });
    }

    updateChas = () => {
        this.setState({
            chas: this.state.chas + 1
        });
    }

    updateSweet = () => {
        this.setState({
            sweet: this.state.sweet + 1
        });
    }

    updatePapad = () => {
        this.setState({
            papad: this.state.papad + 1
        });
    }

    CloseTable = () => {
        // alert(this.tableno);
        this.props.tableClose(this.tableno);
    }
    render() {
        // console.log('render method called...');
        return (<div className="col-lg-3">
            <div className="card shadow">
                <div className="card-header d-flex justify-content-between">
                    <span className="fw-bold">{this.name}</span>
                    <span className="badge bg-primary">{this.tableno}</span>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 mb-3">
                            <button type="button" className="btn btn-primary w-100"
                                onClick={this.updateThali}>
                                Thali <span className="badge text-bg-light">{this.state.thali}</span>
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <button type="button" className="btn btn-danger w-100" onClick={this.updateRoti}>
                                Roti <span className="badge text-bg-light">{this.state.roti}</span>
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-info w-100" onClick={this.updateChas}>
                                Chas <span className="badge text-bg-light">{this.state.chas}</span>
                            </button>
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col">
                            <button type="button" className="btn btn-warning w-100" onClick={this.updateSweet}>
                                Sweet <span className="badge text-bg-light">{this.state.sweet}</span>
                            </button>
                        </div>
                        <div className="col">
                            <button type="button" className="btn btn-dark w-100" onClick={this.updatePapad}>
                                Papad <span className="badge text-bg-light">{this.state.papad}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <h6>Total {this.state.total}</h6>
                    <button onClick={this.CloseTable} type="button" className="btn btn-danger btn-sm">close table</button>
                </div>
            </div>
        </div>);
    }

    componentDidUpdate(prevProp, prevState) {
        
        // console.log('componentDidUpdate method called...');
        // console.log(prevState);
        // here state variable must be updated conditionally
        if (prevState.thali != this.state.thali ||
            prevState.chas != this.state.chas ||
            prevState.roti != this.state.roti ||
               prevState.sweet != this.state.sweet ||
            prevState.papad != this.state.papad

        ) {
            this.setState({
                total: (this.thaliPrice * this.state.thali) +
                    (this.chasPrice * this.state.chas) +
                    (this.rotiPrice * this.state.roti) +
                    (this.sweetPrice * this.state.sweet) +
                    (this.papadPrice * this.state.papad)
            });
        }
    }
}
export default DinningTable