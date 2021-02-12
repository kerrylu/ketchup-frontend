// pages/Home.js

import React from "react";
import '../components/loginform.js';
import LoginForm from '../components/loginform.js'

const Home = () => (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <p>
      <LoginForm />
    </p>
  </div>
);

export default Home;