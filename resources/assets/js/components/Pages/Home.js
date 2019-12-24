import React, { Component } from "react";
import Tagline from "./Elements/Tagline";
import LongAssText from "./Elements/LongAssText";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div> 
        <div className="container">
          <div className="thumbnail thumbnail-finish raise clearfix">
            <center>
              <h5>Choose which sections you would like to show on on your viewer's side and provide the approppriate content</h5>
            </center>
            <button className="btn btn-default round-me remove-outline margin-6">First one </button>
            <div className="combobox-design">
              <select className="undefault-combobox" >
                <option>First one </option>
                <option>Second one </option>
                <option>Third one </option>
              </select>
            </div>
            <small className="margin-6 text text-danger pull-left">Click on selected section to remove</small>
            <button className="btn btn-default round-me margin-6 pull-right remove-outline preview-btn-finish">I would like to see a preview of the web page</button>
          </div>

          <Tagline />
          <LongAssText />
        </div>
      </div>
    );
  }
}

export default Home;
