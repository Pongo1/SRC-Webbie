import React, { Component } from "react";

class EventCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="thumbnail thumbnail-finish">
        <center>
          <h5>Tell everyone about an event that will be happening soon</h5>
        </center>
        <input
          type="text"
          className="form-control margin-6"
          max="5"
          placeholder="Event Title"
        />
        <h5>Start Date</h5>
        <input type="date" className="form-control margin-6" />
        <h5>End date </h5>
        <input type="date" className="form-control margin-6" />
        <small>Add guests so we can put them where everyone will see</small>
        <br />
        <button className="btn btn-default pull-right">
          <i className="glyphicon glyphicon-plus"></i>
        </button>
        <input
          type="text"
          className="form-control"
          placeholder="Fred Swaniker"
          style={{ width: "95%" }}
        />
        <button className="btn btn-default round-me remove-outline margin-6">Fred Swaniker </button>
        <textarea
          placeholder="Briefly describe the event..."
          className="form-control margin-6"
          rows="10"
        ></textarea>
        <small>Upload A Picture</small><br/>
        <button className="btn  btn-default round-me remove-outline">Upload <i className="glyphicon glyphicon-upload"></i></button>
      </div>
    );
  }
}

export default EventCreator;
