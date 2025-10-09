import { Link } from "react-router-dom";
import Menu from "./menu";
import NavBar from "./Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBaseUrl, getImageUrl } from "./common";
import axios from "axios";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";
export default function AdminViewProduct() {
    let { productid } = useParams();
    //create state object
    let [product, setProduct] = useState(); //empty object
    useEffect(() => {
        if (product === undefined) {
            //execute once after return statement execute 
            console.log(productid);
            let apiAddress = getBaseUrl() + "product.php?productid=" + productid;
            console.log(apiAddress);
            axios({
                'method': 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                /*
                [   
                    0 {"error":"no"},
                    1 {"total":1},
                    2 {"id":"6","categoryid":"6","title":"one shampoo","price":"500","stock":"44","weight":"1000","size":"small","photo":"shampoo.jpg","detail":"clinic plus shampoo","islive":"1","isdeleted":"0","categorytitle":"shampoo"}
                ]
                */
                let error = response.data[0]['error'];
                if (error != 'no')
                    showError(error);
                else {
                    let total = response.data[1]['total'];
                    if (total === 0)
                        showError('no product found')
                    else {
                        response.data.splice(0, 2);
                        //store remaining data into object
                        setProduct(response.data[0]);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError();
            });
        }
    });
    if (product !== undefined) {
        //object destructring 
        const { id, categoryid, title, price, stock, weight, size, photo, detail, islive, isdeleted, categorytitle } = product;
        return (<div id="wrapper">
            <Menu />
            <div id="content-wrapper" className="d-flex flex-column">
                {/* Main Content */}
                <div id="content">
                    <NavBar />
                    <div className="container-fluid">
                        <ToastContainer />
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 d-flex justify-content-between">
                                        <h5 className="m-0 font-weight-bold text-primary">
                                            Products (view detail)</h5>
                                        <Link to='/product' className="btn btn-primary btn-sm">Back
                                        </Link>
                                    </div>
                                    <div className="card-body">
                                        <table className="table table-bordered">
                                            <tbody><tr>
                                                <td width="25%">
                                                    <img src={getImageUrl() + "product/" + photo} className="img-fluid" />
                                                </td>
                                                <td>
                                                    <table className="table table-striped table-sm">
                                                        <tbody><tr>
                                                            <td>Name</td>
                                                            <td>{title}</td>
                                                        </tr>
                                                            <tr>
                                                                <td>Category</td>
                                                                <td>{categorytitle}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Price</td>
                                                                <td>{price}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Stock</td>
                                                                <td>{stock}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Weight</td>
                                                                <td>{weight}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Size</td>
                                                                <td>{size}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Detail</td>
                                                                <td>{detail}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Is Live</td>
                                                                <td>{(islive === '1')?"Yes":"No"}</td>
                                                            </tr>
                                                            
                                                        </tbody></table>
                                                </td>
                                            </tr>
                                            </tbody></table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /.container-fluid */}
                </div>
                {/* End of Main Content */}
            </div>
            {/* End of Content Wrapper */}
        </div>
        );
    }
    else
        return (<></>)
}