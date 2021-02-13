// pages/Signup.js

import React from "react";
import '../components/Signupform.js';
import SignupForm from "../components/Signupform.js";
import logo from '../components/logo.jpeg';

const Signup = () => (
  <div>
    <h1 className="title is-1">This is the Signup Page</h1>
    <div>
      <img src={logo}/>
      <SignupForm />
    </div>
  </div>
);

export default Signup;