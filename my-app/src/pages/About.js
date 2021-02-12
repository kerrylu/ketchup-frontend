// pages/About.js

import React from "react";
import logo from '../components/logo.jpeg';

const About = () => (
  <div>
    <h1 className="title is-1">This is the About Page</h1>
    <p>
      <img src={logo}/>
      <p>We are ketchup</p>
    </p>
  </div>
);

export default About;