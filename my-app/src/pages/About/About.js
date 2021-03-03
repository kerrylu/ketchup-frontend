// pages/About/About.js

import React from "react";
import logo from '../../logo.jpeg';

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title is-1">About Us</h1>
        <div>
          <div>We are looking to make Therapists Superhuman! We want to provide therapists with useful data about their patients so that they can keep up with the progress of their patients at all times.</div>
        </div>
      </div>
    );
  }
}

export default About;