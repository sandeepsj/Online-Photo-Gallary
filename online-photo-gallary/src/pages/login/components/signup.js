import React, { Component } from "react";
class signup extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Signup</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Your Name</label>
          </div>
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Your EMail</label>
          </div>
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Enter the Username</label>
          </div>

          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Enter Password</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>confirm Password</label>
          </div>
          <div class="Signup_link">
            <input type="submit" name="login" />
            <a href="login.html">login</a>
          </div>
        </form>
      </div>
    );
  }
}

export default signup;
