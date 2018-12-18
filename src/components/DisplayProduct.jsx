import React, { Component } from "react";
import axios from "axios";

import MyGlobleSetting from "./MyGlobleSetting";
class DisplayProduct extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", products: "" };
  }
  componentDidMount() {
    axios
      .get(MyGlobleSetting.url + "/api/products")
      .then(response => {
        this.setState({ products: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  tabRow() {
    if (this.state.products instanceof Array) {
      return this.state.products.map(function(object, i) {
        return;
      });
    }
  }

  render() {
    return (
      <div>
        <h1>Products</h1>
        <table className="table table-hover">
          <thead>
            <tr>
              <td>ID</td>
              <td>Product Title</td>
              <td>Product Body</td>
              <td width="200px">Actions</td>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
export default DisplayProduct;
