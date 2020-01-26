import React, { Component } from "react";
import EventCard from "./EventCard";

class EventCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <EventCard />
        <center>
          <button
            style={{ marginRight: 7 }}
            className="btn btn-default round-me"
          >
            Previous
          </button>

          <button className="btn btn-default round-me">Next</button>
        </center>
      </div>
    );
  }
}

export default EventCollection;
