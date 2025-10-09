import React from "react"
export default class InterestCalculater extends React.Component {
    constructor(props) {
        //create state variable for each input
        super(props);
        this.state = {
            result: 0,
        }
    }
    updateInput(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    calculateResult = () => {
        console.log(this.state);
        if (this.state.amount !== undefined && this.state.rate !== undefined && this.state.year !== undefined) {
            this.setState({
                result: (this.state.amount * this.state.rate * this.state.year) / 100
            });
        }

    }
    render() {
        return (<div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow">
                        <div className="card-header text-bg-primary text-center">
                            <h4>
                                Simple Interest Calculator ₹
                            </h4>
                        </div>
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4" />
                            <form >
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="amount" placeholder="Principal Amount" required name="amount"
                                            onInput={this.updateInput} value={this.state.amount} />
                                        <label htmlFor="amount">Principal Amount ( ₹ )</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="rate" placeholder="Interest Rate" required name="rate"
                                            onInput={this.updateInput} value={this.state.rate} />
                                        <label htmlFor="rate">Interest Rate (%)</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="form-floating">
                                        <input type="number" className="form-control" id="year" placeholder="Time Period" required name="year"
                                            onInput={this.updateInput} value={this.state.year} />
                                        <label htmlFor="year">Time Period (Years)</label>
                                    </div>
                                </div>

                            </form>
                            <div className="mt-4 text-center">
                                <h5>Result</h5>
                                <p id="result" className="fw-bold">Simple Interest: ₹ {this.state.result}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}