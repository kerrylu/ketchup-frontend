// pages/Signup/PatientSignup.js

import React from "react";
import './PatientSignupForm.js';
import logo from '../../logo.jpeg';
import PatientSignupForm from "./PatientSignupForm.js";

class PatientSignup extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title is-1">This is the Patient Signup Page</h1>
        <div>
          <img src={logo}/>
          <PatientSignupForm />
        </div>
      </div>
    );
  }
}

export default PatientSignup;