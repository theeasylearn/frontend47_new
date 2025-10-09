import { Link } from "react-router-dom";
import NavBar from "./Navbar";
import Menu from "./menu";
//https://theeasylearnacademy.com/shop/ws/orders.php
export default function AdminOrder() {
    return (<div id="wrapper">
        <Menu />
        <div id="content-wrapper" className="d-flex flex-column">
            {/* Main Content */}
            <div id="content">
                {/* Topbar */}
                <NavBar />
                {/* End of Topbar */}
                {/* Begin Page Content */}
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow mb-4">
                                <div className="card-header py-3 d-flex justify-content-between">
                                    <h5 className="m-0 font-weight-bold text-primary">Orders</h5>
                                </div>
                                <div className="card-body">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th>id</th>
                                                <th>Date</th>
                                                <th>Amount</th>
                                                <th>Delivery</th>
                                                <th>Order Status</th>
                                                <th>View Detail</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>Fri 09-08-2024</td>
                                                <td>95214</td>
                                                <td>Bhavnagar <br /> 364001</td>
                                                <td>Confirmed</td>
                                                <td>
                                                    <Link className="btn btn-primary" to="/view-order/1">View</Link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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