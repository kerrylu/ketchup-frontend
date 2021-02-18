// pages/Signup/TherapistSignup.js

import React from "react";
import './TherapistSignupForm.js';
import logo from '../../logo.jpeg';
import TherapistSignupForm from "./TherapistSignupForm.js";

class TherapistSignup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title is-1">This is the Therapist Signup Page</h1>
        <div>
          <img src={logo}/>
          <TherapistSignupForm />
        </div>
      </div>
    );
  }
}

export default TherapistSignup;