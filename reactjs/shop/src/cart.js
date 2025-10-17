import React from 'react'
import Header from './header';
import Footer from './footer';
import WithHook from './hoc';
import getBase, { getImageBase } from './common';
import axios from 'axios';
import { showError, showMessage, showNetworkError } from './message';
import { ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom';
class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            cartTotal: 0
        }
    }
    componentDidMount() {
        //https://theeasylearnacademy.com/shop/ws/cart.php?usersid=100
        //[{"error":"input is missing"}]
        //[{"error":"no"},{"total":0}]
        /* [
        {"error":"no"},
        {"total":4},
        {"id":"3","cartid":"138","title":"IPhone 15","price":"125000","quantity":"2","weight":"1000","size":"big","photo":"Untitled.jpeg","detail":"seal packed finished product"},
        {"id":"1","cartid":"139","title":"Acer Laptop","price":"100","quantity":"2","weight":"1000","size":"15 inch","photo":"acer.jpg","detail":"WINDOWS 10 4 GB DDR3 RAM 128 gb ssd hard disk"},{"id":"2","cartid":"140","title":"dell laptop","price":"200","quantity":"1","weight":"1000","size":"15 inch","photo":"dell.jpg","detail":"WINDOWS 10 8 GB DDR3 RAM 512 gb ssd hard disk"},{"id":"6","cartid":"141","title":"one shampoo","price":"500","quantity":"1","weight":"1000","size":"small","photo":"shampoo.jpg","detail":"clinic plus shampoo"}] */
        let id = this.props.cookies['id'];
        let apiAddress = getBase() + "cart.php?usersid=" + id;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress,
        }).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no')
                alert(error)
            {
                let total = response.data[1]['total'];
                if (total === 0)
                    alert('cart is empty');
                else {
                    //cart is not empty 
                    //delete 1st 2 items
                    response.data.splice(0, 2);
                    //calculate cart total
                    let temp = 0;
                    response.data.map((product) => {
                        temp += (product.price * product.quantity)
                    });
                    //copy remaining data into state array
                    this.setState({
                        items: response.data,
                        cartTotal: temp
                    });
                }
            }
        });

    }
    deleteFromCart = (cartID) => {
        //https://theeasylearnacademy.com/shop/ws/delete_from_cart.php?cartid=1
        //[{"error":"no"},{"message":"product removed from cart"}]
        //[{"error":"input is missing"}]
        let apiAddress = getBase() + "delete_from_cart.php?cartid=" + cartID;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress,
        }).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error);
            else {
                let message = response.data[1]['message'];
                showMessage(message);
                
                //remove item from state array
                let filteredItems = this.state.items.filter((item) => {
                    if (item.cartid !== cartID) {
                        return item;
                    }
                });
                //calculate new cart total
                let temp = 0;
                filteredItems.map((product) => {
                    temp += (product.price * product.quantity)
                });
                this.setState({
                    items: filteredItems,
                    cartTotal: temp
                });
            }
        }).catch((error) => {
            showNetworkError();
        });
    }
    render() {
        return (<>
            <Header />
            <main>
                <section className="mb-lg-14 mb-8 mt-8">
                    <div className="container">
                        <ToastContainer />
                        {/* row */}
                        <div className="row">
                            <div className="col-12">
                                {/* card */}
                                <div className="card py-1 border-0 mb-8">
                                    <div>
                                        <h1 className="fw-bold">Shop Cart</h1>
                                        <p className="mb-0">Shopping in 382480</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* row */}
                        <div className="row">
                            <div className="col-lg-8 col-md-7">
                                <div className="py-3">
                                    {/* alert */}
                                    <div className="alert alert-danger p-2" role="alert">
                                        You’ve got FREE delivery. Start
                                        <Link to="/checkout" className="alert-link">checkout now!</Link>
                                    </div>
                                    <ul className="list-group list-group-flush">
                                        {this.state.items.map((item) => {
                                            return (<li className="list-group-item py-3 ps-0 border-top">
                                                {/* row */}
                                                <div className="row align-items-center">
                                                    <div className="col-6 col-md-6 col-lg-7">
                                                        <div className="d-flex">
                                                            <img src='http://picsum.photos/200' className="icon-shape icon-xxl" />
                                                            <div className="ms-3">
                                                                <h6>{item.title}</h6>

                                                                {/* text */}
                                                                <div className="mt-2 small lh-1">
                                                                    <span
                                                                        onClick={(e) => this.deleteFromCart(item.cartid)}
                                                                        className="text-decoration-none text-inherit" >
                                                                        <span className="me-1 align-text-bottom">
                                                                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2 text-success">
                                                                                <polyline points="3 6 5 6 21 6" />
                                                                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                                                                <line x1={10} y1={11} x2={10} y2={17} />
                                                                                <line x1={14} y1={11} x2={14} y2={17} />
                                                                            </svg>
                                                                        </span>
                                                                        <span className="text-muted">Remove</span>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* input group */}
                                                    <div className="col-4 col-md-4 col-lg-3">
                                                        {item.price} X {item.quantity}
                                                    </div>
                                                    {/* price */}
                                                    <div className="col-2 text-lg-end text-start text-md-end col-md-2">
                                                        <span className="fw-bold">
                                                            {item.price * item.quantity}
                                                        </span>
                                                    </div>
                                                </div>
                                            </li>)
                                        })}
                                    </ul>
                                    {/* btn */}
                                    <div className="d-flex justify-content-between mt-4">
                                        <a href="#!" className="btn btn-primary">Continue Shopping</a>
                                    </div>
                                </div>
                            </div>
                            {/* sidebar */}
                            <div className="col-12 col-lg-4 col-md-5">
                                {/* card */}
                                <div className="mb-5 card mt-6">
                                    <div className="card-body p-6">
                                        {/* heading */}
                                        <h2 className="h5 mb-4">Summary</h2>
                                        <div className="card mb-2">
                                            {/* list group */}
                                            <ul className="list-group list-group-flush">
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Item</div>
                                                    </div>
                                                    <span>₹ {this.state.cartTotal}</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div>Service Fee</div>
                                                    </div>
                                                    <span>₹0.00</span>
                                                </li>
                                                {/* list group item */}
                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                    <div className="me-auto">
                                                        <div className="fw-bold">Subtotal</div>
                                                    </div>
                                                    <span className="fw-bold">₹ {this.state.cartTotal}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="d-grid mb-1 mt-4">
                                            {/* btn */}
                                            <Link to="/checkout" className="btn btn-primary btn-lg d-flex justify-content-between align-items-center">
                                                Go to Checkout
                                                <span className="fw-bold">₹{this.state.cartTotal}</span>
                                            </Link>
                                        </div>
                                        {/* text */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></section>
            </main>
            <Footer />
        </>);
    }
}
export default WithHook(Cart);