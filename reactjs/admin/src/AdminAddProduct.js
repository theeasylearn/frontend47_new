import Menu from "./menu";
import NavBar from "./Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBaseUrl } from "./common";
import axios from "axios";
import { showError, showMessage } from "./messages";
import { ToastContainer } from "react-toastify";

export default function AdminAddProduct() {
    const [items, setItems] = useState([]);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [details, setDetails] = useState("");
    const [stock, setStock] = useState("");
    const [weight, setWeight] = useState("");
    const [size, setSize] = useState("");
    const [photo, setPhoto] = useState(null);
    const [isLive, setIsLive] = useState("1");
    const navigate = useNavigate(); //hook
    let fetchCategory = function () {
        if (items.length === 0) {
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
                        setItems(response.data);
                    }
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError();
            });
        }
    }

    useEffect(() => fetchCategory(), []);
    let insertProduct = function (e) {
        console.log(items, category, title, price, details, stock, weight, size, photo, isLive);
        e.preventDefault();
        //api call
        let apiAddress = getBaseUrl() + "insert_product.php";
        let form = new FormData();
        form.append('name', title);
        form.append('categoryid', category);
        form.append('price', price);
        form.append('stock', stock);
        form.append('weight', weight);
        form.append('size', size);
        form.append('detail', details);
        form.append('islive', isLive);
        form.append('photo', photo);

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
    }

    return (
        <div id="wrapper">
            <Menu />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <NavBar />
                    <div className="container-fluid">
                        <ToastContainer />
                        <div className="row">
                            <div className="col-12">
                                <div className="card shadow mb-4">
                                    <div className="card-header py-3 d-flex justify-content-between">
                                        <h5 className="m-0 font-weight-bold text-primary">Products (add)</h5>
                                        <Link to="/product" className="btn btn-primary btn-sm">back</Link>
                                    </div>
                                    <div className="card-body">
                                        <form method="post" onSubmit={insertProduct}>
                                            <div className="row mb-3">
                                                <div className="col-md-4">
                                                    <label htmlFor="category" className="form-label">Category</label>
                                                    <select
                                                        id="category"
                                                        className="form-select"
                                                        required
                                                        value={category}
                                                        onChange={(e) => setCategory(e.target.value)}
                                                    >
                                                        <option value="">Choose...</option>
                                                        {items.map((row) => (
                                                            <option key={row['id']} value={row['id']}>
                                                                {row['title']}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="title" className="form-label">Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="title"
                                                        placeholder="Enter title"
                                                        required
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="price" className="form-label">Price</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="price"
                                                        placeholder="Enter price"
                                                        required
                                                        value={price}
                                                        onChange={(e) => setPrice(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-12">
                                                    <label htmlFor="details" className="form-label">Details</label>
                                                    <textarea
                                                        className="form-control"
                                                        id="details"
                                                        rows={3}
                                                        placeholder="Enter details"
                                                        required
                                                        value={details}
                                                        onChange={(e) => setDetails(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-4">
                                                    <label htmlFor="stock" className="form-label">Stock</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="stock"
                                                        placeholder="Enter stock quantity"
                                                        required
                                                        value={stock}
                                                        onChange={(e) => setStock(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="weight" className="form-label">Weight</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="weight"
                                                        placeholder="Enter weight"
                                                        required
                                                        value={weight}
                                                        onChange={(e) => setWeight(e.target.value)}
                                                    />
                                                </div>
                                                <div className="col-md-4">
                                                    <label htmlFor="size" className="form-label">Size</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="size"
                                                        placeholder="Enter size"
                                                        required
                                                        value={size}
                                                        onChange={(e) => setSize(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-4">
                                                    <label htmlFor="photo" className="form-label">Photo</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        id="photo"
                                                        required
                                                        accept="image/*"
                                                        onChange={(e) => setPhoto(e.target.files[0])}
                                                    />
                                                </div>
                                                <div className="col-md-4">
                                                    <label className="form-label">Is Live</label>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="islive"
                                                            id="isLiveYes"
                                                            value="1"
                                                            required

                                                            onChange={(e) => setIsLive(e.target.value)}
                                                        />
                                                        <label className="form-check-label" htmlFor="isLiveYes">Yes</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="islive"
                                                            id="isLiveNo"
                                                            value="0"
                                                            required
                                                            onChange={(e) => setIsLive(e.target.value)}
                                                        />
                                                        <label className="form-check-label" htmlFor="isLiveNo">No</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <button type="submit" className="btn btn-primary w-100 mb-2">Save</button>
                                                    <button
                                                        type="reset"
                                                        className="btn btn-light w-100"
                                                        onClick={() => {
                                                            setCategory("");
                                                            setTitle("");
                                                            setPrice("");
                                                            setDetails("");
                                                            setStock("");
                                                            setWeight("");
                                                            setSize("");
                                                            setPhoto(null);
                                                        }}
                                                    >Clear all</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}