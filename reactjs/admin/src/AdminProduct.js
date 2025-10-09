import { Link } from "react-router-dom";
import Menu from "./menu";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import { getBaseUrl, getImageUrl } from "./common";
import axios from "axios";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";
import $ from 'jquery'; // Import jQuery to use $
import 'datatables.net'; // Import DataTables core
import 'datatables.net-bs5'; // Import DataTables Bootstrap 5 integrati

export default function AdminProduct() {
    //create state array
    var [items, setItem] = useState([]);// create empty state array
    useEffect(() => {
        if (items.length == 0) {
            //code in this hook will execute after return statement finish
            let apiAddress = getBaseUrl() + "product.php";
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                /*
                [   
                    0 {"error":"no"},
                    1 {"total":12},
                    2 {"id":"1","categoryid":"1","title":"Acer Laptop","price":"100","stock":"69","weight":"1000","size":"15 inch","photo":"acer.jpg","detail":"WINDOWS 10 4 GB DDR3 RAM 128 gb ssd hard disk","islive":"1","isdeleted":"0","categorytitle":"laptop"},
                    3 {"id":"2","categoryid":"1","title":"dell laptop","price":"200","stock":"70","weight":"1000","size":"15 inch","photo":"dell.jpg","detail":"WINDOWS 10 8 GB DDR3 RAM 512 gb ssd hard disk","islive":"1","isdeleted":"0","categorytitle":"laptop"}
                ]
                */
                let error = response.data[0]['error'];
                if (error != 'no') {
                    showError(error);
                }
                else {
                    let total = response.data[1]['total'];
                    if (total === 0)
                        showError('no product found');
                    else {
                        response.data.splice(0, 2); //delete 2 elements(object)
                        //store data into state array
                        setItem(response.data);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError();
            });
        }
    });
    let deleteProduct = function (productid) {
        //call api to delete product on server.
        let apiAddress = getBaseUrl() + "delete_product.php?id=" + productid;

        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response.data);
            // [{"error":"input is missing"}]
            // [{"error":"no"},{"message":"product deleted"}]
            let error = response.data[0]['error'];
            if (error != 'no')
                showError(error);
            else {
                //show message
                let message = response.data[1]['message'];
                showMessage(message);
                //update state array to remove product from local data
                let filteredProducts = items.filter((current) => {
                    if (current.id !== productid)
                        return current;
                });
                setItem(filteredProducts);
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showError();
        });
    }
    let display = function (row) {
        return (<tr>
            <td>{row['id']}</td>
            <td>
                <Link to={"/view-product/" + row['id']} target="_blank">
                    {row['title']} <br />
                    {row['categorytitle']}
                </Link>
            </td>
            <td>{row['price']}</td>
            <td width='20%'>
                <img src={getImageUrl() + "product/" + row['photo']} className="img-fluid" />
            </td>
            <td>{row['stock']}</td>
            <td>{(row['islive'] === '1' ? "Yes" : "No")}</td>
            <td>
                <Link to={"/edit-product/" +  row['id']} className="btn btn-warning btn-sm btn-block mb-1">Edit</Link>
                <a onClick={() => deleteProduct(row['id'])} href="#" className="btn btn-danger btn-sm btn-block">Delete</a>
            </td>
        </tr>);
    }
    // useEffect(() => {
    //     // Initialize DataTables after items are set
    //     if (items.length > 0) {
    //         //plugin activation code
    //         const table = $('#productTable').DataTable();
    //     }
    // }, [items]);
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
                                    <h5 className="m-0 font-weight-bold text-primary">Product</h5>
                                    <Link to='/add-product' className="btn btn-primary btn-sm">add
                                        <i className="fa fa-plus" />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <table id="productTable" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>Sr No</th>
                                                <th>Product</th>
                                                <th>Price</th>
                                                <th>Photo</th>
                                                <th>Stock</th>
                                                <th>is Live?</th>
                                                <th>Operation</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                // map function will run display function for each and every product(element) of list(items)
                                                items.map((row) => display(row))}
                                        </tbody>
                                    </table>
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
    )
}