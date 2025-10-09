import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { COOKIENAME, getBaseUrl } from "./common";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import { showError, showMessage } from "./messages";
import { useCookies } from "react-cookie";
export default function AdminLogin() {
    //create state varaiable 
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies([COOKIENAME]);

    //create navigator object
    let navigate = useNavigate();

    let Login = function (e) {
        console.log(email, password);
        e.preventDefault();
        let apiAddress = getBaseUrl() + "admin_login.php";
        let form = new FormData();
        form.append("email",email);
        form.append("password",password);

        axios({
            method: 'post',
            responseType: 'json',
            url: apiAddress,
            data: form
        }).then((response) => {
            console.log(response);
            let error = response.data[0]['error'];
            if(error !== 'no')
            {
                showError(error);
            }
            else 
            {
                let success = response.data[1]['success'];
                let message = response.data[2]['message'];
                if(success === 'no')
                {
                    showError(message); //display message in red
                }
                else 
                {
                    showMessage(message); //display message in green
                    //create cookie 
                    setCookie('userid',response.data[3]['id']);
                    console.log('userid',cookies['userid']);
                    setTimeout(() => {
                        navigate("/dashboard");
                    },2000);
                }
            }
        }).catch((error) => {
            if (error.code === 'ERR_NETWORK') {
                showError();
            }
        });
    }

    return (<div className="container">
        <ToastContainer />
        <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        {/* Nested Row within Card Body */}
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block">
                                <img src="theme/img/large.png" />
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Admin Login</h1>
                                    </div>
                                    <form className="user" onSubmit={Login} >
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user" id="email" aria-describedby="emailHelp" placeholder="Enter Email Address..."
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-user" id="password"
                                                placeholder="Password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                        <button type="submit" className="btn btn-primary btn-user btn-block">
                                            Sign in
                                        </button>
                                        <hr />
                                    </form>
                                    <hr />
                                    <div className="text-center">
                                        <Link className="small" to='/forgot-password'>Forgot Password?</Link>
                                    </div>
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