// pages/Home.js

import React from "react";
import { Navbar } from "react-bootstrap";
import '../components/loginform.js';
import LoginForm from '../components/loginform.js';
import logo from '../components/logo.jpeg';

const Home = () => (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <p>
      <img src={logo}/>
      <p>Let's Ketchup</p>
      <LoginForm />
    </p>
  </div>
);

export default Home;