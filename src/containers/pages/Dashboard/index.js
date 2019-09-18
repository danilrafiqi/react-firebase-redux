import React, { Component } from "react";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <p>Register Page</p>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
        <button>Login Page</button>
      </div>
    );
  }
}

export default Dashboard;
