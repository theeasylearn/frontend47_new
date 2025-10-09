import { Link, useNavigate, useParams } from "react-router-dom";
import NavBar from "./Navbar";
import Menu from "./menu";
import { useEffect, useState } from "react";
import { getBaseUrl, getImageUrl } from "./common";
import axios from "axios";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";
export default function AdminEditCategory() {
    var { categoryid } = useParams();
    let navigate = useNavigate();
    //create state variable for each and every input
    let [title, setTitle] = useState('');
    let [isLive, setIsLive] = useState('');
    let [photo, setPhoto] = useState('');
    let [newPhoto, setNewPhoto] = useState('');
    let [isDataFetched, setIsFetchedData] = useState(false);

    useEffect(() => {
        if (isDataFetched === false) {
            let apiAddress = getBaseUrl() + `category.php?id=${categoryid}`;
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response.data);
                /*
                [
                    0 {"error":"no"},
                    1 {"total":1},
                    2 {"id":"1","title":"laptop","photo":"laptop.jpg","islive":"1","isdeleted":"0"},
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
                        //now copy this into state variable
                        setTitle(response.data[0]['title']);
                        setIsLive(response.data[0]['islive']);
                        setPhoto(response.data[0]['photo']);
                        setIsFetchedData(true);
                        showMessage('category fetched successfully');
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    // alert('either you are offline of server is offline');
                    showError();
            });
        }
    });
    let updateCategory = function (e) {
        let apiAddress = getBaseUrl() + "update_category.php";
        let form = new FormData();
        form.append('title', title);
        form.append('photo', newPhoto);
        form.append('islive', isLive);
        form.append('id', categoryid);
        console.log(form);
        axios({
            method: 'post',
            url: apiAddress,
            responseType: 'json',
            data: form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no') {
                showError(error);
            }
            else {
                let success = response.data[1]['succcess'];
                let message = response.data[2]['message'];
                if (success === 'no')
                    showError(message);
                else {
                    showMessage(message);
                    //display another view
                    setTimeout(() => {
                        navigate("/category");
                    }, 2000);
                }
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK')
                showError('oops, it seems either your offline or server is not available, please try after sometime');
        })
        e.preventDefault();
    }
    return (<div id="wrapper">
        {/* Sidebar */}
        <Menu />
        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <NavBar />
                {/* End of Topbar */}
                {/* Begin Page Content */}
                <div className="container-fluid mt-3">
                    {/* Page Heading */}
                    <ToastContainer />
                    <h4 className="text-dark font-weight-bold">Edit - Category Management</h4>
                    {/* DataTales Example */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex justify-content-between">
                            <h5 className="m-0 text-dark">Edit category</h5>
                            <Link to="/category" className="btn btn-primary">Back</Link>
                        </div>
                        <div className="card-body">
                            <form action method="post"
                                onSubmit={updateCategory} >
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="mb-3">
                                            <label htmlFor="title" className="form-label">EditTitle</label>
                                            <input type="text" className="form-control" id="title" required value={title} onChange={(e) => setTitle(e.target.value)} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="photo" className="form-label">Change Photo</label>
                                            <input type="file" className="form-control" id="photo"
                                                accept="image/*" required onChange={(e) => setNewPhoto(e.target.files[0])} />
                                        </div>
                                        <span className="my-5 fw-bold">is this category Live?</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="form-check-inline mb-5">
                                            <input id="yes" name="islive" type="radio"
                                                value={1}
                                                onChange={(e) => setIsLive('1')}
                                                checked={(isLive == '1')}
                                                className="form-check-input" required />
                                            <label htmlFor="yes" className="form-check-label">Yes</label>
                                        </div>
                                        <div className="form-check-inline mb-5">
                                            <input id="no" name="islive" type="radio" className="form-check-input"
                                                onChange={(e) => setIsLive('0')}
                                                value={0} checked={(isLive == '0')}
                                                required />
                                            <label htmlFor='no' className="form-check-label">No</label>
                                        </div>
                                        <div className="d-flex justify-content-end">
                                            <input type="submit" className="btn btn-primary" defaultValue="Save changes" />&nbsp;
                                            <input type="submit" className="btn btn-dark" defaultValue="clear" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <b>Existing Photo</b>
                                        <img src={getImageUrl() + "category/" + photo} className="img-fluid" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* /.container-fluid */}
            </div>
            {/* End of Main Content */}
            {/* Footer */}
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright © Your Website 2025</span>
                    </div>
                </div>
            </footer>
            {/* End of Footer */}
        </div>
        {/* End of Content Wrapper */}
    </div>
    );
}