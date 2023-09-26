import React, { Component } from "react";

class Logout extends Component {
  componentDidMount() {
    localStorage.removeItem("userData");
    window.location = "/";
  }
  render() {
    return null;
  }
}

export default Logout;
