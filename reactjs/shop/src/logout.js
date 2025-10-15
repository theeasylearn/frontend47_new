import React from "react";
import WithHook from "./hoc";

class Logout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Delete cookie first
        this.props.removeCookie('id');

        // Use a short delay to avoid alert blocking (or remove alert)
        setTimeout(() => {
            alert('logout sucessfull');
            this.props.navigate("/");
        }, 0); // Queues navigation after current execution
    }

    render() {
        return null; // Or a loading spinner: <div>Logging out...</div>
    }
}

export default WithHook(Logout);