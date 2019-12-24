import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Navigation from './Navigation/Navigation';

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navigation />
      </div>
    )
  }
}

if (document.getElementById('main')) {
  ReactDOM.render(<Main />, document.getElementById('main'));
}
