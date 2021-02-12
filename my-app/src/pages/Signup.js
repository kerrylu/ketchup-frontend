// pages/Signup.js

import React from "react";
import '../components/signupform.js';
import SignupForm from "../components/signupform.js";
import logo from '../components/logo.jpeg';

const Signup = () => (
  <div>
    <h1 className="title is-1">This is the Signup Page</h1>
    <p>
      <img src={logo}/>
      <SignupForm />
    </p>
  </div>
);

export default Signup;