import React, { Component } from "react";

class UserGuide extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="overlay" onClick ={()=>{this.props.toggleModal(false)}}></div>
        <div className="m-modal z-depth-1">
         
            <h3 className="text text-info">USER GUIDE</h3>
            <p >
              These are just a few tips on how to use the admin portal
            </p>

            <ul>
              <li>
                Click <i><b>Save And Add Another</b></i> before you publish even if you
                have one event
              </li>
              <li>Anytime you choose a section and publish, only that particular side of the page is changed, the rest remain untouched.<br/><b>If you choose 'tagline' and publish it,  only the tagline on the user's page is changed. The events and about text all remain the same until changed</b></li>
            </ul>
         
        </div>
      </div>
    );
  }
}

export default UserGuide;
