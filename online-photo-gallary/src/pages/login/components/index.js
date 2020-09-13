import React, { Component } from "react";
import Login from "./login";
import "./css/style.css";
class index extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <div class="center">
          <Login />
        </div>
      </div>
    );
  }
}

export default index;
