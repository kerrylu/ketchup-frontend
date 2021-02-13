// pages/TherapistSignup.js

import React from "react";
import '../components/TherapistSignupForm.js';
import logo from '../components/logo.jpeg';
import TherapistSignupForm from "../components/TherapistSignupForm.js";

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