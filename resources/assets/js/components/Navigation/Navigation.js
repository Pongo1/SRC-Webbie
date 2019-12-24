import React, { Component } from "react";

var styles = {
  mainNav:{
    backgroung:'black'
  }
}
class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default navbar-static-top stick-nav nav-polish z-depth-1">
          <div className="container">
            <div className="navbar-header">
              {/* Collapsed Hamburger */}
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#app-navbar-collapse"
                aria-expanded="false"
              >
                <span className="sr-only">Toggle Navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              {/* Branding Image */}
              <a className="navbar-brand" href="#">
                Laravel
              </a>
            </div>
            <div className="collapse navbar-collapse" id="app-navbar-collapse">
              {/* Left Side Of Navbar */}
              <ul className="nav navbar-nav">&nbsp;</ul>
              {/* Right Side Of Navbar */}
              <ul className="nav navbar-nav navbar-right">
                {/* Authentication Links */}
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    v-pre
                  >
                    Frimpong <span className="caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#" onClick={() => console.log("I am the shit")}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
