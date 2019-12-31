import React, { Component } from "react";
import Event from "./EventCard";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <div className="my-overlay"></div> */}
        <h1 className="tagline">The Temptation Is Right</h1>
        <div className="header-main"></div>
      </div>
    );
  }
}

export default Header;
