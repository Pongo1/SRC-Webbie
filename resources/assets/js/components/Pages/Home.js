import React, { Component } from "react";
import Tagline from "./Elements/Tagline";
import LongAssText from "./Elements/LongAssText";
import EventCreator from "./Elements/EventCreator";
import $ from "jquery";
import UserGuide from "./Elements/UserGuide";


const FORM_DEFAULTS = {
  tagline:null, 
  long_text:null
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
    this.addToGuests = this.addToGuests.bind(this);
    this.removeGuest = this.removeGuest.bind(this);
    this.addEvent = this.addEvent.bind(this);
    this.addFile = this.addFile.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.editEvent = this.editEvent.bind(this);
    this.removeEvent = this.removeEvent.bind(this);
    this.state = {
      token: null,
      section_items: [],
      formData: {},
      guests: [],
      events: [],
      current_file: null,
      modal: false,
      edit_mode: null
    };
  }

  
  editEvent(index, comp) {
    this.cleanUpEvents(comp);
    this.setState({ edit_mode: index });
    var ev = this.state.events[index];
    comp.refs.event_title.value = ev.event_title;
    comp.refs.event_start.value = ev.event_start;
    comp.refs.event_end.value = ev.event_end;
    comp.refs.event_desc.value = ev.event_desc;
    this.setState({ current_file: ev.image, guests: ev.guests });
    document.getElementById("file-name").innerHTML =ev.image.name;
    console.log(ev.image);
  }
  addToGuests() {
    const name = document.getElementById("guest_name").value;
    if (this.state.guests.includes(name) || name.trim() === "") return;
    const g = this.state.guests;
    this.setState({ guests: [...g, name] });
    document.getElementById("guest_name").value = "";
  }
  removeGuest(guest) {
    var guests = this.state.guests;
    guests = guests.filter(g => g !== guest);
    this.setState({ guests });
  }
  addEvent(comp) {
    const events = this.state.events;
    var a, b, c, d, e;
    a = comp.refs.event_end.value.trim();
    b = comp.refs.event_start.value.trim();
    c = comp.refs.event_title.value.trim();
    d = comp.refs.event_desc.value.trim();
    if (
      a === "" ||
      b === "" ||
      c === "" ||
      d === "" ||
      this.state.current_file === null
    ) {
      alert("Please Fill Out All Parameters For The Event!");
      return;
    }
    var arr = {
      event_end: a,
      event_start: b,
      event_title: c,
      event_desc: d,
      image: this.state.current_file,
      guests: this.state.guests
    };
    if (this.state.edit_mode === null) { //add new
      this.setState({ events: [...events, arr], current_file: null, });
      this.cleanUpEvents(comp);
    } else { //save edits
      events[this.state.edit_mode] = arr;
      this.cleanUpEvents(comp);
      this.setState({edit_mode:null});
    }
  }

  removeEvent(index){
    var ev = this.state.events.filter((item,i)=>  index !== i); 
    this.setState({events:ev});
  }
  cleanUpEvents(comp) {
    comp.refs.event_end.value = "";
    comp.refs.event_start.value = "";
    comp.refs.event_title.value = "";
    comp.refs.event_desc.value = "";
    comp.refs.pic_file.value = "";
    this.setState({ guests: [] });
    document.getElementById("file-name").innerHTML = "Upload A Picture";
  }
  addFile(file) {
    this.setState({ current_file: file });
  }
  async componentWillMount() {
    var token = await $.ajax({ method: "GET", url: "get-csrf-token" });
    this.setState({ token });
  }

  ejectSelectedSections() {
    return this.state.section_items.map((sec, index) => {
      return (
        <button
          onClick={() => {
            this.removeSection(sec);
          }}
          key={index}
          className="btn btn-default round-me remove-outline margin-6"
        >
          {sec}
        </button>
      );
    });
  }
  toggleModal(bool) {
    this.setState({ modal: bool });
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

  publishData(){
    const all = {
     
    }

    console.log(all)
  }
  ejectSections() {
    return this.state.section_items.map((sec, index) => {
      if (sec === "Event") {
        return (
          <EventCreator
             removeEvent = {this.removeEvent}
            edit_mode={this.state.edit_mode}
            key={index}
            editEvent={this.editEvent}
            events={this.state.events}
            addFile={this.addFile}
            addEvent={this.addEvent}
            guests={this.state.guests}
            handleText={this.handleText}
            addToGuests={this.addToGuests}
            removeGuest={this.removeGuest}
          />
        );
      } else if (sec === "About Us") {
        return <LongAssText key={index} handleText={this.handleText} />;
      } else if (sec === "Tagline") {
        return <Tagline key={index} handleText={this.handleText} />;
      }
    });
  }
  removeSection(val) {
    var sections = this.state.section_items;
    sections = sections.filter(sec => sec !== val);
    this.refs.section_box.value = "Choose Section";
    this.setState({ section_items: sections });
  }
  handleText(event) {
    var form = this.state.formData;
    form = { ...form, [event.target.name]: event.target.value };
    this.setState({ formData: form });
  }

  sendFormData() {
    var data = {
      ...FORM_DEFAULTS, 
      ...this.state.formData,
      events:this.state.events,
      _token: this.state.token
    };

    console.log(data);
    $.ajax({ method: "POST", data: data, url: "data.save" })
      .done(function() {
        window.location.reload();
      })
      .catch(e => {
        console.log(e);
      });
  }
  render() {
    return (
      <div>
        {this.state.modal ? <UserGuide toggleModal={this.toggleModal} /> : null}

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
                ref="section_box"
                className="undefault-combobox"
                onChange={event => this.selectSection(event)}
              >
                <option>Choose Section</option>
                <option>Event</option>
                <option>About Us</option>
                <option>Tagline</option>
              </select>
            </div>
            <small className="margin-6 text text-danger pull-left">
              Click on selected section to remove
            </small>
            <button
              onClick={() => {
                this.toggleModal(true);
              }}
              className="btn btn-default round-me margin-6 pull-right remove-outline preview-btn-finish"
            >
              See User Guide
            </button>
          </div>

          {this.ejectSections()}
          {this.state.section_items.length > 0 ? (
            <button
              onClick={() => {
                this.sendFormData();
              }}
              style={{ marginBottom: 100 }}
              className="btn-lg pull-right btn btn-success z-depth-1"
            >
              Publish
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Home;
