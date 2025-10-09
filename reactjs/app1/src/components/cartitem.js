import React from "react";
class CartItem extends React.Component {
    constructor(props) {
        super(props);
        //create property variable
        this.name = props.name;
        this.description = props.description;
        this.price = props.price;
        this.photo = props.photo;
        //if variable's value change and then if you use it in render method then it should state 
        this.state = {
            quantity: props.quantity
        }
    }
    //event handling function (must be created as arrow function)
    updateQuantity = (mode) => {
        switch (mode) {
            case '+':
                this.setState({
                    quantity: parseInt(this.state.quantity) + 1
                });
                break;

            case '-':
                if (parseInt(this.state.quantity) > 1) {
                    this.setState({
                        quantity: parseInt(this.state.quantity) - 1
                    });
                }
                break;
        }
    }
    render() {
        return (<div className="row align-items-center">
            <div className="col-2">
                <img src={this.photo} alt="Pizza Oven" className="item-img" />
            </div>
            <div className="col-2">
                <h5 className="card-title">{this.name}</h5>
                <p className="text-muted">{this.description}</p>
            </div>
            <div className="col-2 text-center">
                <p className="card-text">
                    {this.price}
                </p>
            </div>
            <div className="col-2">
                <div className="input-group">
                    <button className="btn btn-outline-secondary" type="button"
                        onClick={() => this.updateQuantity('-')}>-</button>
                    <input type="text" className="form-control text-center" value={this.state.quantity} readOnly />
                    <button className="btn btn-outline-secondary" type="button"
                        onClick={() => this.updateQuantity('+')}>+</button>
                </div>
            </div>
            <div className="col-2 text-end">
                <p className="card-text fw-bold">
                    {this.price * this.state.quantity}
                </p>
            </div>
            <div className="col-2">
                <button className="btn btn-danger">Delete</button>
            </div>
        </div>);
    }
}
export default CartItem; //required