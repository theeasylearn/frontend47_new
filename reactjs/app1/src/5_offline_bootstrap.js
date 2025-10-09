import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
//create virtual DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
let page = (<div className="container">
    <div className="row mt-5">
        <div className="col-6 offset-3">
            <div className="card shadow">
                <div className="card-header text-bg-primary">
                    <h3>Register</h3>
                </div>
                <div className="card-body">
                    <form action="" method="post">
                        {/* form */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" id="email" name="email" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">Mobile</label>
                            <input type="text" id="mobile" name="mobile" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" id="password" name="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirm_password" className="form-label">Confirm Password</label>
                            <input type="password" id="confirm_password" name="confirm_password"
                                className="form-control" />
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary">Let's Do</button>
                            <button type="reset" className="btn btn-dark">Clear all</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>)
root.render(page);
