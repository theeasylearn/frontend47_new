import Menu from "./menu";
import NavBar from "./Navbar";
import { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import { showError } from "./messages";
import { getBaseUrl, COOKIENAME } from "./common";
import { useCookies } from "react-cookie";
import {useNavigate} from 'react-router-dom';
export default function AdminDashBoard() {
    const [cookies, setCookie, removeCookie] = useCookies([COOKIENAME]);
    let navigate = useNavigate();
    let [items, setItem] = useState();
    let fetchSummery = function () {
        if (items === undefined) {
            let apiAddress = getBaseUrl() + "summery.php";
            axios({
                method: 'get',
                responseType: 'json',
                url: apiAddress
            }).then((response) => {
                console.log(response.data);
                /*
                    [
                        0 {"error":"no"},
                        1 {"categories":"6","products":"17","users":"94","orders":"31","daily":"0","weekly":"0","monthly":"52000","yearly":"1235367"}]
                */
                let error = response.data[0]['error'];
                if (error !== 'no')
                    showError(error);
                else {
                    response.data.splice(0, 1);
                    //copy object into state object
                    setItem(response.data[0]);
                }
            }).catch((error) => {
                if (error.code === 'ERR_NETWORK')
                    showError()
            });
        }
    }
    useEffect(() => {
        //check whether cookies exists or not 
        if (cookies['userid'] === undefined) {
                navigate("/");
        }
    })
    useEffect(() => fetchSummery());
    if (items !== undefined) {
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
                                        <h5 className="m-0 font-weight-bold text-primary">Dashboard</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            {/* Earnings (Monthly) Card Example */}
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-primary shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    Orders (today)
                                                                </div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">{items['daily']}</div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fas fa-calendar fa-2x text-gray-300" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-primary shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    Orders (Monthly)
                                                                </div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                    {items['monthly']}
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fas fa-calendar fa-2x text-gray-300" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-primary shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    Orders (weekly)
                                                                </div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                    {items['weekly']}
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fas fa-calendar fa-2x text-gray-300" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-md-6 mb-4">
                                                <div className="card border-left-primary shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    Orders (Yearly)
                                                                </div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                    {items['yearly']}
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fas fa-calendar fa-2x text-gray-300" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-xl-4 col-md-6 mb-4">
                                                <div className="card border-left-danger shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    Products
                                                                </div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                    {items['products']}
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fa fa-gift fa-2x text-info" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-4">
                                                <div className="card border-left-danger shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    Categories
                                                                </div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                    {items['categories']}
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fa fa-tags fa-2x text-danger" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-4 col-md-6 mb-4">
                                                <div className="card border-left-danger shadow h-100 py-2">
                                                    <div className="card-body">
                                                        <div className="row no-gutters align-items-center">
                                                            <div className="col mr-2">
                                                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                                    Users
                                                                </div>
                                                                <div className="h5 mb-0 font-weight-bold text-gray-800">
                                                                    {items['users']}
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <i className="fa fa-users fa-2x text-success" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
        return (<></>);
}