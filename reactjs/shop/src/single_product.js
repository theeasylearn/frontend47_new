import React from "react";
import Header from "./header";
import Footer from "./footer";
import WithHook from "./hoc";
import axios from 'axios';
import getBase, { getImageBase } from "./common";
import { showError, showNetworkError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import product from "./product";

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {},
            items: [],
            categoryid: 0
        }
    }
    getSingleProduct = () => {
        let { productid } = this.props.params;
        let apiAddress = getBase() + "product.php?productid=" + productid;
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                alert(error)
            }
            else {
                let total = response.data[0]['total'];
                if (total === 0)
                    alert('product not found');
                else {
                    //delete 2 objects
                    response.data.splice(0, 2);
                    //store remaining objects into state array
                    this.setState({
                        product: response.data[0],
                        categoryid: response.data[0]['categoryid']
                    },()=>{
                        this.getRelatedProducts();
                    });
                }
            }
        }).catch((error) => {
            alert('could not load products');
        })
    }

    getRelatedProducts = () => {
        let apiAddress = getBase() + "product.php?categoryid=" + this.state.categoryid;
        console.log(apiAddress);
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            let error = response.data[0]['error'];
            if (error !== 'no') {
                alert(error)
            }
            else {
                let total = response.data[0]['total'];
                if (total === 0)
                    alert('no product found in category');
                else {
                    //delete 2 objects
                    response.data.splice(0, 2);
                    //store remaining objects into state array
                    this.setState({
                        items: response.data
                    });
                }
            }
        }).catch((error) => {
            alert('could not load products');
        })
    }
    componentDidMount() {
        this.getSingleProduct();
        
    }
    render() {
        return (<> <div className="row">
            <div className="col-lg-6">
                {/* img slide */}
                <div className="product productModal" id="productModal">
                    <div className="zoom" onmousemove="zoom(event)" style={{}}>
                        {/* img */}
                        <img src={getImageBase() + "product/" + this.state.product.photo} alt />
                    </div>
                </div>
                {/* product tools */}
            </div>
            <div className="col-lg-6">
                <div className="ps-lg-8 mt-6 mt-lg-0">
                    <Link className="mb-4 d-block"></Link>
                    <h2 className="mb-1 h1">{this.state.product.title}</h2>
                    <div className="fs-4">
                        <span className="fw-bold text-dark">₹ {this.state.product.price}</span>

                    </div>
                    <hr className="my-6" />
                    <div>
                        {/* input */}
                        {/* input */}
                    </div>
                    <div className="mt-3 row justify-content-start g-2 align-items-center">
                        <div className="col-lg-4 col-md-5 col-6 d-grid">
                            {/* button */}
                            {/* btn */}
                            <button type="button" className="btn btn-primary"
                                onClick={this.updateCart}>
                                <i className="feather-icon icon-shopping-bag me-2" />
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <hr className="my-6" />
                    <div>
                        <table className="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>Product Code:</td>
                                    <td>{this.state.product.id}</td>
                                </tr>
                                <tr>
                                    <td>Stock:</td>
                                    <td>{this.state.product.stock}</td>
                                </tr>
                                <tr>
                                    <td>Size:</td>
                                    <td>{this.state.product.size}</td>
                                </tr>
                                <tr>
                                    <td>Weight</td>
                                    <td>{this.state.product.weight}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
            <div className="row my-2">
                <div className="col-12">
                    <span className="fw-bold">Description</span>
                    <p></p>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <h3>You may also like this</h3>
                </div>
            </div>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6 mb-3">
                {this.state.items.map((item) => {
                    return (<div className="col">
                        <a href={"/product/id/"}>
                            {/* card */}
                            <div className="card card-product shadow">
                                <div className="card-body">
                                    {/* badge */}
                                    <div className="text-center position-relative">

                                        <img src={getImageBase() + "product/" + item.photo} className="mb-3 img-fluid" />

                                        {/* action btn */}
                                    </div>
                                    {/* heading */}
                                    <h2 className="fs-6">{item.title}</h2>

                                    {/* price */}
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <div>
                                            <span className="text-dark">₹ </span>
                                        </div>
                                        {/* btn */}
                                        <div>
                                            <button className="btn btn-primary btn-sm">
                                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                                                    <line x1={12} y1={5} x2={12} y2={19} />
                                                    <line x1={5} y1={12} x2={19} y2={12} />
                                                </svg>
                                                Add
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>);
                })}
            </div></>)
    }
}
export default WithHook(SingleProduct);