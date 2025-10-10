import React from "react";
import Header from "./header";
import Footer from "./footer";
import getBase, { getImageBase } from "./common";
import axios from "axios";
import { Link } from "react-router-dom";
class Shop extends React.Component {

  constructor(props) {
    super(props);
    //create state object
    this.state = {
      //create array
      categories: []
    }
  }

  display = (item) => {
    return (<div className="col mb-3">
      <Link to={"/product/" + item.id} className="text-decoration-none text-inherit">
        {/* card */}
        <div className="card card-product shadow">
          <div className="card-body text-center py-8">
            {/* img */}
            <img src={getImageBase() + "category/" + item.photo}  alt="Grocery Ecommerce Template" className="img-fluid mb-3" />
            {/* text */}
            <div className="text-truncate">{item.title}</div>
          </div>
        </div>
      </Link>
    </div>);
  }

  componentDidMount() {
    let apiAddress = getBase() + "category.php";
    axios({
      method: 'get',
      responseType: 'json',
      url: apiAddress,
    }).then((response) => {
      console.log(response.data);
      //copy object at 0th position
      let error = response.data[0]['error'];
      console.log(error);
      if (error !== 'no')
        alert(error)
      else {
        //copy object at 1st position
        let total = response.data[1]['total'];
        if (total === 0)
          alert("category not found");
        else {
          response.data.splice(0, 2);
          //now copy remaining objects into state array.
          this.setState({
            categories: response.data
          });
        }
      }
    }).catch((error) => {
        alert("oops something went wrong");
    })

  }
  render() {
    return (<>
      <Header />
      <main>
        <div className="container vh-100">
          <div className="row">
            <div className="col-12">
              <h3 className="py-3">Shop</h3>
            </div>
          </div>
          <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-6 g-6">
            {/* col */}
            {this.state.categories.map((item) => this.display(item))}
          </div>
        </div>
      </main>
      <Footer />
    </>);
  }
}
export default Shop;