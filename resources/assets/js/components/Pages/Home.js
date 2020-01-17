import React, { Component } from "react";
import Tagline from "./Elements/Tagline";
import LongAssText from "./Elements/LongAssText";
import EventCreator from "./Elements/EventCreator";
import $ from 'jquery';

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.addToGuests = this.addToGuests.bind(this); 
    this.removeGuest = this.removeGuest.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.state = {
      token: null,
      section_items: [], 
      formData:{}, 
      guests:[],
      events:[]
    };
  }
  addToGuests() {
    const name = document.getElementById('guest_name').value;
    if (this.state.guests.includes(name) || name.trim() === "") return;
    const g = this.state.guests;
    this.setState({ guests: [...g, name] });
    document.getElementById('guest_name').value = "";
  }
  removeGuest(guest){
    var guests = this.state.guests; 
    guests = guests.filter( g => g !==guest); 
    this.setState({guests});
  }
  addEvent(comp){
    const events = this.state.events;
    var a,b,c,d,e; 
    a = comp.refs.event_end.value.trim(); 
    b = comp.refs.event_start.value.trim();
    c = comp.refs.event_title.value.trim();
    d =  comp.refs.event_desc.value.trim();
    e = $('#file').files 
    console.log(e);
    if( a ==="" || b==="" || c==="" || d==="") {
      alert("Please Fill Out All Parameters For The Event!")
      return
    }
    console.log(a,b,c,d)
    var arr = {
      event_end: a, 
      event_start: b, 
      event_title: c,
      event_desc:d
    };
    this.setState({events:[...events,arr]});
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
  handleText(event){
    var form = this.state.formData;
    form = {...form,[event.target.name]:event.target.value};
    this.setState({formData: form});
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
          <Tagline handleText = {this.handleText}/>
          <EventCreator addEvent = {this.addEvent} guests = {this.state.guests} handleText = {this.handleText} addToGuests = {this.addToGuests} removeGuest = {this.removeGuest} />
          <LongAssText handleText = {this.handleText} />
        </div>
      </div>
    );
  }
}

export default Home;
