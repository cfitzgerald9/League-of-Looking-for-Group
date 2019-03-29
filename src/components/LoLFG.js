
import React, { Component } from "react";
import Navbar from "./nav/Navbar";
import ApplicationViews from "./ApplicationViews";
import "./LoLFG.css";

export default class LoLFG extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
}

