// pages/Signup/Signup.js

import React from "react";
import './SignupForm.js';
import logo from '../../newLogo.jpeg';
import SignupForm from "./SignupForm.js";

class Signup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title is-1">This is the Signup Page</h1>
        <div>
          <img src={logo}/>
          <SignupForm />
        </div>
      </div>
    );
  }
}

export default Signup;