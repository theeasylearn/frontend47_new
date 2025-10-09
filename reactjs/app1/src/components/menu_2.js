import React from "react";
export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        //create state object
        this.state = {
            isLoggedIn: false,
            username:null
        }
    }

    doLogin = () => {
        this.setState({
            isLoggedIn: true,
            username : "Ankit Patel"
        })
    }
    //create function return jsx
    GuestMenu = () => {
        return (<>
            <li className="nav-item">
                <a className="nav-link" href="#">Register</a>
            </li>
            <li className="nav-item">
                <a onClick={this.doLogin} className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Forgot Password</a>
            </li>
        </>)

    }

    doLogout = () => {
        this.setState({
            isLoggedIn: false,
            username:null,
        });
    }
    //create function component 
    UserMenu = () => {

        return (<>
            <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Checkout</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Change Password</a>
            </li>
            <li className="nav-item">
                <a onClick={this.doLogout} className="nav-link" href="#">Logout</a>
            </li>
        </>);
    }
    render() {
        return (<nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">the easylearn academy</a>
                {this.state.username !==null ? "welcome " + this.state.username: "welcome guest"}
                {/* Toggler button for mobile */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Menu Items */}
                <div className="collapse navbar-collapse" id="navbarMenu">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Shop</a>
                        </li>
                        {this.state.isLoggedIn===false && this.GuestMenu()}
                        {this.state.isLoggedIn===true && this.UserMenu()}
                    </ul>
                </div>
            </div>
        </nav>
        );
    }
}