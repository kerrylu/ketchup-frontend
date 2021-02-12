// pages/Signup.js

import React from "react";
import '../components/signupform.js';
import SignupForm from "../components/signupform.js";

const Signup = () => (
  <div>
    <h1 className="title is-1">This is the Signup Page</h1>
    <p>
      <SignupForm />
    </p>
  </div>
);

export default Signup;