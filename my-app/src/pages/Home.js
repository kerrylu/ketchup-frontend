// pages/Home.js

import React from "react";
import { Navbar } from "react-bootstrap";
import '../components/loginform.js';
import LoginForm from '../components/loginform.js';
import logo from '../components/logo.jpeg';

const Home = () => (
  <div>
    <h1 className="title is-1">This is the Home Page</h1>
    <div>
      <img src={logo}/>
      <div>Let's Ketchup</div>
      <LoginForm />
    </div>
  </div>
);

export default Home;