import React, { Component } from "react";
import Login from "./login";
import Signup from "./signup";
import "./css/style.css";
class index extends Component {
  state = {};
  render() {
    return (
      <div className="body">
        <div class="center">
          <Login />
          <Signup />
        </div>
      </div>
    );
  }
}

export default index;
