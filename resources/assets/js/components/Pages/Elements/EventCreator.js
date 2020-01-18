import React, { Component } from "react";
import $ from 'jquery';
class EventCreator extends Component {
  
  ejectGuestNames() {
    return this.props.guests.map((g, index) => {
      return (
        <button
          key={index}
          onClick = {()=>{this.props.removeGuest(g)}}
          className="btn btn-default round-me remove-outline margin-6"
        >
          {g}
        </button>
      );
    });
  }
  handleEnter(event){
    if(event.keyCode ===13){
      this.props.addToGuests();
    }
  }
 
  handleFile(event){
    var file = event.target.files[0]; 
    var name = event.target.files[0].name; 
    this.props.addFile(file);
    document.getElementById('file-name').innerHTML = name;
  }
  render() {
    return (
      <div className="thumbnail thumbnail-finish">
        <center>
          <h5>Tell everyone about an event that will be happening soon</h5>
        </center>
        <input
          ref="event_title"
          type="text"
          className="form-control margin-6"
          max="5"
          placeholder="Event Title"
        />
        <h5>Start Date</h5>
        <input ref="event_start"  type="date" className="form-control margin-6" />
        <h5>End date </h5>
        <input ref ="event_end" type="date" className="form-control margin-6" />
        <small>Add guests so we can put them where everyone will see</small>
        <br />
        <button
          className="btn btn-default pull-right"
          onClick={() => {
            this.addToGuests();
          }}
        >
          <i className="glyphicon glyphicon-plus"></i>
        </button>
        <input
          onKeyDown = {(event)=>{this.handleEnter(event)}}
          id="guest_name"
          type="text"
          className="form-control"
          placeholder="Fred Swaniker"
          style={{ width: "95%" }}
        />
        {this.ejectGuestNames()}
        <textarea
          ref="event_desc"
          placeholder="Briefly describe the event..."
          className="form-control margin-6"
          rows="10"
        ></textarea>
        <small id="file-name">Upload A Picture</small>
        <br />
        <input type="file" id ="file" onChange = {(event)=>{this.handleFile(event)}} something style={{display:'none'}}/>
        <button onClick = {()=>{$('#file').click()}}className="btn  btn-default round-me remove-outline">
          Upload <i className="glyphicon glyphicon-upload"></i>
        </button>

        <button onClick = {()=>{this.props.addEvent(this)}} className="btn btn-success z-depth-1 round-me pull-right outline-0">Save Event And Add Another</button>
      </div>
    );
  }
}

export default EventCreator;
