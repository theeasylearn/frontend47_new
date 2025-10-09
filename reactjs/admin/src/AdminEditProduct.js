import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import Menu from "./menu";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getBaseUrl, getImageUrl } from "./common";
import axios from "axios";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
export default function AdminEditProduct() {
    let { productid } = useParams();
    let navigate = useNavigate();
    //create state array 
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState([]);
    const [isFetched, setIsFetched] = useState(false);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState("");
    const [stock, setStock] = useState("");
    const [weight, setWeight] = useState("");
    const [size, setSize] = useState("");
    const [photo, setPhoto] = useState(null);
    const [newPhoto, setnewPhoto] = useState(null);
    const [isLive, setIsLive] = useState("1");
    let fetchCategories = function () {
        if (categories.length === 0) {
            let apiAddress = getBaseUrl() + "category.php";
            axios({
                url: apiAddress,
                method: 'get',
                responseType: 'json'
            }).then((response) => {
                console.log(response.data);
                let error = response.data[0]['error'];
                console.log(error);
                if (error !== 'no') {
                    alert(error);
                } else {
                    let total = response.data[1]['total'];
                    console.log(total);
                    if (total === 0) {
                        showError('no category found');
                    } else {
                        response.data.splice(0, 2);
                        console.log(response.data);
                        setCategories(response.data);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError();
            });
        }
    }
    let fetchProduct = function () {
        if (isFetched === false) {
            let apiAddress = getBaseUrl() + "product.php?productid=" + productid;
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
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
                        setIsFetched(true);
                        setTitle(response.data[0]['title']);
                        setCategory(response.data[0]['categoryid']);
                        setPrice(response.data[0]['price']);
                        setStock(response.data[0]['stock']);
                        setWeight(response.data[0]['weight']);
                        setSize(response.data[0]['size']);
                        setPhoto(response.data[0]['photo']);
                        setDetails(response.data[0]['detail']);
                        setIsLive(response.data[0]['islive']);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError();
            });
        }
    }
    useEffect(() => {
        fetchCategories();
        fetchProduct();
    });
    let updateProduct = function (e) {
        console.log(category, title, price, details, stock, weight, size, photo, isLive);
        let apiAddress = getBaseUrl() + "update_product.php";
        let form = new FormData();
        form.append('name', title);
        form.append('categoryid', category);
        form.append('price', price);
        form.append('stock', stock);
        form.append('weight', weight);
        form.append('size', size);
        form.append('detail', details);
        form.append('islive', isLive);
        form.append('photo', newPhoto);
        form.append('productid', productid);
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
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if (success === 'no') {
                    showError(message);
                }
                else {
                    showMessage(message);
                    //pause for 2 seconds
                    setTimeout(() => {
                        navigate("/product");
                    }, 2000);

                }
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK') {
                showError();
            }
        });
        e.preventDefault();
    }
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
                                    <h5 className="m-0 font-weight-bold text-primary">Products (edit)</h5>
                                    <Link to='/product' className="btn btn-primary btn-sm">back
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <form onSubmit={updateProduct} method="post">
                                        <div className="row">
                                            <div className="col-sm-2">
                                                <b>Existing Photo</b> <br />
                                                <img src={getImageUrl() + "product/" + photo} className="img-fluid" />
                                            </div>
                                            <div className="col-sm-10">
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <label htmlFor="category" className="form-label">Change Category</label> <br />
                                                        <select id="category" className="form-select" required>
                                                            <option>Choose...</option>
                                                            {categories.map(function (item) {
                                                                if (item.id === category)
                                                                    return <option value={item.id} selected >{item.title}</option>
                                                                else
                                                                    return <option value={item.id}>{item.title}</option>
                                                            })}
                                                        </select>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="title" className="form-label">Edit Title</label>
                                                        <input type="text" className="form-control" id="title" placeholder="Enter title" required
                                                            value={title}
                                                            onChange={(e) => setTitle(e.target.value)} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="price" className="form-label">Edit Price</label>
                                                        <input type="number" className="form-control" id="price" placeholder="Enter price"
                                                            value={price}
                                                            onChange={(e) => setPrice(e.target.value)}
                                                            required />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-12">
                                                        <label htmlFor="details" className="form-label">Edit Details</label>
                                                        <textarea className="form-control" id="details" rows={3} placeholder="Enter details" required
                                                            value={details}
                                                            onChange={(e) => setDetails(e.target.value)} />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <label htmlFor="stock" className="form-label">Edit Stock</label>
                                                        <input type="number" className="form-control" id="stock" placeholder="Enter stock quantity" required
                                                            value={stock}
                                                            onChange={(e) => setStock(e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="weight" className="form-label">Edit Weight</label>
                                                        <input type="number" className="form-control" id="weight" placeholder="Enter weight"
                                                            value={weight}
                                                            onChange={(e) => setWeight(e.target.value)} required />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label htmlFor="size" className="form-label">Edit Size</label>
                                                        <input type="text" className="form-control"
                                                            value={size}
                                                            onChange={(e) => setSize(e.target.value)}
                                                            id="size" placeholder="Enter size" required />
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-md-4">
                                                        <label htmlFor="photo" className="form-label">Change Photo</label>
                                                        <input type="file" className="form-control" id="photo" required accept="image/*"
                                                            onChange={(e) => setnewPhoto(e.target.files[0])} />
                                                    </div>
                                                    <div className="col-md-4">
                                                        <label className="form-label">Is Live</label>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="islive" id="isLiveYes"
                                                                value={1}
                                                                checked={(isLive === '1')}
                                                                onChange={(e) => setIsLive('1')}
                                                                required />
                                                            <label className="form-check-label" htmlFor="isLiveYes">Yes</label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="islive" id="isLiveNo"
                                                                checked={(isLive === '0')}
                                                                value={0} onChange={(e) => setIsLive('0')}
                                                                required />
                                                            <label className="form-check-label" htmlFor="isLiveNo">No</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <button type="submit" className="btn btn-primary w-100 mb-2">Save changes</button>
                                                        <button type="reset" className="btn btn-light w-100">Clear all</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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