// pages/SignupRedirect.js

import React from "react";
import '../components/Signupform.js';
import logo from '../components/logo.jpeg';
import Signup from './Signup.js';
import { Nav, Button } from 'react-bootstrap';
import { BrowserRouter, Switch, Route } from "react-router-dom";

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
          <Nav.Link href="signup"> I am a Patient</Nav.Link>
          <Nav.Link href="signup"> I am a Therapist</Nav.Link>
        </div>
      </div>
    );
  }
}

export default SignupRedirect;