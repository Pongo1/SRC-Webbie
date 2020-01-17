import React, { Component } from "react";
import Tagline from "./Elements/Tagline";
import LongAssText from "./Elements/LongAssText";
import EventCreator from "./Elements/EventCreator";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null,
      section_items: [], 
      
    };
  }
  async componentWillMount() {
    var token = await $.ajax({ method: "GET", url: "get-csrf-token" });
    this.setState({ token });
  }
  ejectSelectedSections() {
    return this.state.section_items.map((sec, index) => {
      return (
        <button onClick = {()=>{this.removeSection(sec)}}key ={index} className="btn btn-default round-me remove-outline margin-6">
          {sec}
        </button>
      );
    });
  }
  selectSection(event) {
    const value = event.target.value;
    const sections = this.state.section_items;
    switch (value.toUpperCase()) {
      case "TAGLINE":
        if (sections.includes(value)) break;
        this.setState({ section_items: [...sections, value] });
        break;
      case "ABOUT US":
        if (sections.includes(value)) break;
        this.setState({ section_items: [...sections, value] });
        break;
      case "EVENT":
        if (sections.includes(value)) break;
        this.setState({ section_items: [...sections, value] });
        break;
      default:
        break;
    }
  }

  removeSection(val){
    var sections = this.state.section_items; 
    sections = sections.filter(sec => sec !==val); 
    this.setState({section_items:sections});
  }
  render() {
    return (
      <div>
        <div className="container">
          <div
            className="thumbnail thumbnail-finish raise clearfix"
            style={{ marginTop: 95 }}
          >
            <center>
              <h5>
                Choose which sections you would like to show on on your viewer's
                side and provide the approppriate content
              </h5>
            </center>
            {this.ejectSelectedSections()}
            <div className="combobox-design">
              <select
                className="undefault-combobox"
                onChange={event => this.selectSection(event)}
              >
                <option>Event</option>
                <option>About Us</option>
                <option>Tagline</option>
              </select>
            </div>
            <small className="margin-6 text text-danger pull-left">
              Click on selected section to remove
            </small>
            <button className="btn btn-default round-me margin-6 pull-right remove-outline preview-btn-finish">
              I would like to see a preview of the web page
            </button>
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
