import './App.css';
import './pages/Login/LoginForm.js';
import './pages/Signup/SignupForm.js';
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DynamicNavbar from './DynamicNavbar.js';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import SignupRedirect from './pages/Signup/SignupRedirect.js';
import PatientSignup from './pages/Signup/PatientSignup.js';
import TherapistSignup from './pages/Signup/TherapistSignup.js';
import Profile from './pages/Profile/Profile.js';
import Contactus from './pages/Contactus/Contactus.js';
import Login from './pages/Login/Login.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }
  handleLogin = () => {
    this.setState({isLoggedIn: true})
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <DynamicNavbar isLoggedIn={this.state.isLoggedIn}/>
            <div className="container mt-2" style={{ marginTop: 40 }}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contactus">
                  <Contactus />
                </Route>
                <Route path="/login">
                  <Login changeIsLoggedIn = {this.handleLogin}/>
                </Route>
                <Route path="/signupredirect">
                  <SignupRedirect />
                </Route>
                <Route path="/patientsignup">
                  <PatientSignup />
                </Route>
                <Route path="/therapistsignup">
                  <TherapistSignup />
                </Route>
                <Route path="/profile">
                  <Profile />
                </Route>
              </Switch>
            </div>
          </BrowserRouter>
        </header>
      </div>
    );
  } 
}


export default App;