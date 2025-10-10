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
            <div className="col">
              <div className="card card-product shadow">
                <div className="card-body">
                  {/* badge */}
                  <div className="text-center position-relative">
                    <Link to=''>
                      {/* img */}
                      <img
                        src='' className="mb-3 img-fluid" />
                    </Link>
                    {/* action btn */}
                  </div>
                  {/* heading */}
                  <h2 className="fs-6"><a href="shop-single.html" className="text-inherit text-decoration-none"></a></h2>
                  <div>
                    {/* rating */}

                  </div>
                  {/* price */}
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span className="text-dark">₹</span>
                    </div>
                    {/* btn */}
                    <div>
                      <a href="#!" className="btn btn-primary btn-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus">
                          <line x1={12} y1={5} x2={12} y2={19} />
                          <line x1={5} y1={12} x2={19} y2={12} />
                        </svg>
                        Add
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </main>
      <Footer />
    </>)
  }
}
export default WithHook(Product);