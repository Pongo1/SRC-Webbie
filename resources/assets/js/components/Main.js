import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation/Navigation";
import Home from "./Pages/Home";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navigation />
        <Home />
      </div>
    );
  }
}

if (document.getElementById("main")) {
  ReactDOM.render(<Main />, document.getElementById("main"));
}
