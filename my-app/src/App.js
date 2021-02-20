import './App.css';
import './pages/Login/LoginForm.js';
import './pages/Signup/SignupForm.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import KetchupNavbar from './KetchupNavbar.js';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import SignupRedirect from './pages/Signup/SignupRedirect.js';
import PatientSignup from './pages/Signup/PatientSignup.js';
import TherapistSignup from './pages/Signup/TherapistSignup.js';
import Profile from './pages/Profile/Profile.js';
import Contactus from './pages/Contactus/Contactus.js';
import Login from './pages/Login/Login.js';
import PatientHub from './pages/PatientHub/PatientHub.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <KetchupNavbar />
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
                <Login />
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
              <Route path ="/patientHub">
                <PatientHub />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;