import { Link } from "react-router-dom";
export default function SiteMenu() {
    return (<nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
            <Link className="navbar-brand" to="/">Easylearn Academy</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/product">Courses</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/service">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">About</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus">Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);
}