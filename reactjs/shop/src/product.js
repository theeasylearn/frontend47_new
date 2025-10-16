import React from "react";
import Header from "./header";
import Footer from "./footer";
import WithHook from "./hoc";
import axios from 'axios';
import getBase, { getImageBase } from "./common";
import { showError, showNetworkError, showMessage } from "./message";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
class Product extends React.Component {

  constructor(props) {
    super(props);
    //create state object
    this.state = {
      //create state array
      products: []
    }
  }

  addToCart = (productid) => {
    let userid = this.props.cookies['id'];
    //alert(userid);
    //https://theeasylearnacademy.com/shop/ws/add_to_cart.php?productid=1&usersid=1
    //[{"error":"input is missing"}]
    //[{"error":"no"},{"message":"product added into cart"}]
    let apiAddress = getBase() + "add_to_cart.php?productid=" + productid + "&usersid=" + userid;
    //alert(apiAddress);
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress
    }).then((response) => {
      let error = response.data[0]['error'];
      if (error !== 'no')
        alert(error)
      else {
        alert(response.data[1]['message']);
      }
    }).catch((error) => {
      alert("oops something went wrong.");
    })
  }
  componentDidMount() {
    //create variable to store categoryid of the product 
    let { categoryid } = this.props.params;
    let apiAddress = getBase() + "product.php?categoryid=" + categoryid;
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
            products: response.data
          });
        }
      }
    }).catch((error) => {
      alert('could not load products');
    })
  }
  display = (item) => {
    return (<div className="col my-3">
      <div className="card card-product shadow">
        <div className="card-body">
          <div className="text-center position-relative">
            <Link to={"/product/id/" + item.id}>
              <img
                src={getImageBase() + "product/" + item.photo} className="mb-3 img-fluid" />
            </Link>
          </div>
          <h2 className="fs-6">
            <Link to={"/product/id/" + item.id} className="text-inherit text-decoration-none">
              {item.title}
            </Link>
          </h2>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div>
              <span className="text-dark">₹ {item.price}</span>
            </div>
            <div>
              <button onClick={() => this.addToCart(item.id)} type="button" className="btn btn-primary btn-sm">
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
    </div>);
  }
  render() {
    return (<>
      <Header />
      <main>
        <div className="container">
          <ToastContainer />
          <div className="row">
            <div className="col-12">
              <h3 className="py-3"></h3>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
            {this.state.products.map((item) => this.display(item))}


          </div>
        </div>
      </main>
      <Footer />
    </>)
  }
}
export default WithHook(Product);