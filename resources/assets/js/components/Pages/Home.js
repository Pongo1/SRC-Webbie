import React, { Component } from "react";
import Tagline from "./Elements/Tagline";
import LongAssText from "./Elements/LongAssText";
import EventCreator from "./Elements/EventCreator";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { token: null };
  }
  async componentWillMount(){
    var token = await $.ajax({method:'GET', url:'get-csrf-token'}); 
    this.setState({token})
      console.log("I am the token", token )
  }


  render() {
    return (
      <div> 
        <div className="container">
          <div className="thumbnail thumbnail-finish raise clearfix" style={{marginTop:95}}>
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
          <EventCreator />
          <LongAssText />
       
        </div>
      </div>
    );
  }
}

export default Home;
