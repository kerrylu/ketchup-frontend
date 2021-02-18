// pages/Contactus/Contactus.js

import React from "react";
import logo from '../../logo.jpeg';

class Contactus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title is-1">This is the Contactus Page</h1>
        <div>
          <img src={logo}/>
          <div>Email us at ketchup@ketchup.com</div>
        </div>
      </div>
    );
  }
}

export default Contactus;