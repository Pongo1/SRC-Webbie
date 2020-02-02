import React, { Component } from 'react'
import src from "./../src-logo.png"; 
class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  subscribe(){
    const val = document.getElementById('foot-email').value; 
    if(val.trim() !=="") window.location = '/subscribe?email='+val; 

  }

  render() {
    return (
      <div className="footer-envelope">
        <div className="col-md-8 col-lg-8 col-md-offset-2" style={{paddingTop:20}}> 
          <img src={src} style={{height:43,display:'inline',borderRadius:3}}/>
          <input id="foot-email" className="form-control footer-textbox" style={{width:'40%'}} placeholder="email..." />
          <input type="submit" value="Subscribe" className="sub-btn" onClick ={this.subscribe} />
          <div style={{display:'inline',marginLeft:20}}>
            <h6 className="line"> Social Media </h6>
            <button className="btn btn-default default round-me social-footer fb line"><i className="fa fa-facebook"></i></button>
            <button className="btn btn-default default round-me social-footer insta line"><i className="fa fa-google"></i></button>
            <button className="btn btn-danger default round-me social-footer line"><i className="fa fa-instagram"></i></button>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
