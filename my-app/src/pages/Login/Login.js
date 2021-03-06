// pages/Login/Login.js

import React from "react";
import { NavLink } from "react-router-dom";
import './LoginForm.js';
import LoginForm from './LoginForm.js';
import logo from '../../logo.jpeg';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      terminate: false
    }
  }
  handleLogin = () => {
    this.setState({isLoggedIn: true})
    this.setState({terminate: false})
  }
  changeLoginStatus = () => {
    this.props.changeLoginStatus();
  }
  render() {
    // console.log(this.state.isLoggedIn)
    if (this.state.isLoggedIn & !this.state.terminate) {
      this.props.changeLoginStatus()
      this.setState({terminate: true})
    }
    return (
    <div>
      <h1 className="title is-1">This is the Login Page</h1>
      <div>
        <img src={logo}/>
        <div>Let's Ketchup</div>
        <LoginForm changeLoginStatus = {this.handleLogin}/>
        <div>
          Don't have an account?
          <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/signupredirect"
          >
          Signup
          </NavLink>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;