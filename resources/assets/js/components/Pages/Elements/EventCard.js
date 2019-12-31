import React, { Component } from "react";
import ted from "../../../imgs/tedblack.jpg";
class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="thumbnail event-card clearfix z-depth-1 negative-top ">
        <img src={ted} className="event-display-pic pull-left" />

        <div className="lg-event-card-body">
          <h4>Frimpong Opoku Agyemang</h4>
          <p style={{fontSize:13}}>This a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        </div>
        
      </div>
    );
  }
}

export default Event;
