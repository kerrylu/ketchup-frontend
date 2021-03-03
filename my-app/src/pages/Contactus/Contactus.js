// pages/Contactus/Contactus.js

import React from "react";
import logo from '../../newLogo.jpeg';

class Contactus extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title is-1">This is the Contact Us Page</h1>
        <div>
          <img src={logo}/>
          <div>We would love to answer questions or assist you please email us at ketchup@ketchup.com</div>
        </div>
      </div>
    );
  }
}

export default Contactus;