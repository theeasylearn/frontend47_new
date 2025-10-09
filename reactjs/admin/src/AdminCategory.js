import { Link } from "react-router-dom";
import Menu from "./menu";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError, showMessage } from "./messages";
import { getBaseUrl, getImageUrl } from "./common";
import $ from 'jquery'; // Import jQuery to use $
import 'datatables.net'; // Import DataTables core
import 'datatables.net-bs5'; // Import DataTables Bootstrap 5 integrati
// in above import none of the functions are default
export default function AdminCategory() {
    var [items, setItems] = useState([]);
    let deleteCategory = function (categoryId) {
        // alert(categoryId);
        //this api will delete category on server (not in client side state array)
        let apiAddress = getBaseUrl() + "delete_category.php?id=" + categoryId;
        console.log(apiAddress);
        axios({
            method: 'get',
            responseType: 'json',
            url: apiAddress
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let message = response.data[1]['message'];
                //remove category from state array 
                //filter state array
                let filteredCategories = items.filter((current) => {
                    if (current.id != categoryId) {
                        return current;
                    }
                });
                console.log(filteredCategories);
                setItems(filteredCategories);
                // $('#categoryTable').DataTable();
                showMessage(message);
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showError();
        });
    }
    //create function display 
    let display = function (item) {
        return (<tr>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td width="20%">
                <img src={getImageUrl() + "category/" + item.photo} alt className="img-fluid" />
            </td>
            <td>{(item.islive === '1') ? "Yes" : "No"}</td>
            <td width="15%">
                <Link to={"/edit-category/" + item.id} className="btn btn-warning btn-sm">Edit</Link>
                <Link onClick={(event) => deleteCategory(item.id)} className="btn btn-danger btn-sm">Delete</Link>
            </td>
        </tr>);
    }
    //create empty state array

    useEffect(() => {
        if (items.length == 0) {
            let apiAddress = getBaseUrl() + "category.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response.data);
                /*
                [
                    0 {"error":"no"},
                    1 {"total":6},
                    2 {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},
                    3 {"id":"2","title":"mobile","photo":"mobile.jpg","islive":"1","isdeleted":"0"},
                    4{"id":"3","title":"book","photo":"books.jpg","islive":"1","isdeleted":"0"}
                ]
                */
                let error = response.data[0]['error'];
                console.log(error);
                if (error != 'no') {
                    alert(error);
                }
                else {
                    let total = response.data[1]['total'];
                    console.log(total);
                    if (total === 0) {
                        showError('no category found');
                    }
                    else {
                        //remove 2 elements from array @ begining
                        response.data.splice(0, 2);
                        console.log(response.data);
                        //now copy this into state array
                        setItems(response.data);
                        showMessage('category fetched successfully');
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    // alert('either you are offline of server is offline');
                    showError();
            });
        }
    }, [items]);
    //  

    return (<div id="wrapper">
        <Menu />
        {/* Content Wrapper */}
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
                                    <h5 className="m-0 font-weight-bold text-primary">Category</h5>
                                    <Link to='/add-category' className="btn btn-primary btn-sm">Add
                                        <i className="fa fa-plus" />
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <table id="categoryTable" className="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Title</th>
                                                <th>Photo</th>
                                                <th>is live</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {items.map((item) => display(item))}
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
    );
}