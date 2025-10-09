import React from 'react';
import ReactDOM from 'react-dom/client';
//create virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
let output = (<div className="container">
    <div className="row">
        <div className="col-md-6 offset-3">
            <div className="card shadow-sm">
                <div className='card-header text-bg-primary'>
                    <h3 className="card-title text-center ">Login</h3>
                </div>
                <div className='card-body'>
                    <form>
                        <div className="mb-3 position-relative">
                            <div className="form-floating">
                                <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" />
                                <label htmlFor="floatingEmail">Email</label>
                            </div>
                        </div>
                        <div className="mb-3 position-relative">
                            <div className="form-floating">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Password</label>
                            </div>
                        </div>
                        <div className="mb-3 d-flex justify-content-between align-items-center">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="rememberCheck" />
                                <label className="form-check-label" htmlFor="rememberCheck">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-decoration-none">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>)
root.render(output);
