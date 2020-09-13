import React, { Component } from "react";
class login extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>login</h1>
        <form method="post">
          <div class="txt_field">
            <input type="text" required />
            <span></span>
            <label>Username</label>
          </div>
          <div class="txt_field">
            <input type="password" required />
            <span></span>
            <label>Password</label>
          </div>
          <div class="pass">forgot password</div>
          <div class="Signup_link">
            <input type="submit" name="login" />
            not a member?<a href="#">Signup</a>
          </div>
        </form>
      </div>
    );
  }
}

export default login;
