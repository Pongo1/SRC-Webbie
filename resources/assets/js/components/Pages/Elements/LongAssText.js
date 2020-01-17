import React, { Component } from "react";

class LongAssText extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="thumbnail thumbnail-finish">
        <center>
          <h5>Write Your Long Text Here</h5>
        </center>
        <textarea
           onChange={(event)=>{this.props.handleText(event)}}
           name="long_text"
          placeholder="Write your long texts here..."
          className="form-control"
          rows="17"
        ></textarea>
      </div>
    );
  }
}

export default LongAssText;
