// pages/Home/Home.js

import React from "react";
import logo from '../../logo.jpeg';
import newLogo from '../../newLogo.jpeg';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <h1 className="title is-1">This is the Home Page</h1>
      <div>
        <div>Let's CatchUp</div>
        <img src={newLogo}/>
        <p> Looking to start using CatchUp? Learn more about us in the aboust us Page </p>
      </div>
    </div>
    );
  }
}

export default Home;