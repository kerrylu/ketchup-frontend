// pages/Signup/SignupRedirect.js

import React from "react";
import './SignupForm.js';
import logo from '../../logo.jpeg';
import { Nav } from 'react-bootstrap';

class SignupRedirect extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    
      <div>
        <h1 className="title is-1">This is the SignupRedirect Page</h1>
        <div>
          <img src={logo}/>
          <Nav.Link href="patientsignup"> I am a Patient</Nav.Link>
          <Nav.Link href="therapistsignup"> I am a Therapist</Nav.Link>
        </div>
      </div>
    );
  }
}

export default SignupRedirect;