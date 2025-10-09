import Menu from "./menu";
import NavBar from "./Navbar";
import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import { getBaseUrl } from "./common";
import axios from "axios";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";
export default function AdminAddCategory() {
    //create 3 state variable for each every input
    let [title, setTitle] = useState('');
    let [photo, setPhoto] = useState('');
    let [islive, setIsLive] = useState('');
    let navigate = useNavigate();
    let insertCategory = function (e) {
        console.log(title, islive, photo);
        let apiAddress = getBaseUrl() + "insert_category.php";
        let form = new FormData();
        form.append("title",title);
        form.append("photo",photo);
        form.append("islive",islive);

        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data:form
        }).then((response) => {
            console.log(response.data);
            let error = response.data[0]['error'];
            if (error !== 'no')
                showError(error)
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'yes')
                {
                    showMessage(message);
                    //display category screen to admin after 1 second pause so admin can read message
                    setTimeout(() => {
                        navigate("/category");
                    },1000);                    
                }   
                else 
                {
                    showError(message);
                }     
            }
        }).catch((error) => {

        });
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
                    <ToastContainer />
                    {/* Page Heading */}
                    <h4 className="text-dark font-weight-bold">Add - Category Management</h4>
                    {/* DataTales Example */}
                    <div className="card shadow mb-4">
                        <div className="card-header py-3 d-flex justify-content-between">
                            <h5 className="m-0 text-dark">New category</h5>
                            <Link to="/category" className="btn btn-primary">Back</Link>
                        </div>
                        <div className="card-body">
                            <form action method="post" onSubmit={insertCategory}>
                                <div className="mb-3">
                                    <label htmlFor="title" className="form-label">Title</label>
                                    <input type="text"
                                        className="form-control"
                                        id="title"
                                        name="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="photo" className="form-label">Select Photo</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="photo"
                                        accept="image/*"
                                        name="photo"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                        required />
                                </div>
                                <span className="my-5 fw-bold">is this category Live?</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <div className="form-check-inline mb-5">
                                    <input id="yes" name="islive" type="radio" className="form-check-input"
                                        value={1} onChange={(e) => setIsLive(e.target.value)} required />
                                    <label htmlFor="yes" className="form-check-label">Yes</label>
                                </div>
                                <div className="form-check-inline mb-5">
                                    <input id="no" name="islive" type="radio" className="form-check-input"
                                        value={0} onChange={(e) => setIsLive(e.target.value)} required />
                                    <label htmlFor='no' className="form-check-label">No</label>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <input type="submit" className="btn btn-primary" defaultValue="Save" />&nbsp;
                                    <input type="submit" className="btn btn-dark" defaultValue="clear" />
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