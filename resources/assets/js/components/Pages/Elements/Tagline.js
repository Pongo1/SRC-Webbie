import React, { Component } from 'react'

class Tagline extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <div className="thumbnail thumbnail-finish">
          <center><h5>Write A Tagline For Your Page</h5></center>
          <input name="tagline" type="text" onChange={(event)=>{this.props.handleText(event)}} className="form-control" max="5" placeholder="Something like 'Welcome to the SRC world'"/>
        </div>
      </div>
    )
  }
}

export default Tagline
