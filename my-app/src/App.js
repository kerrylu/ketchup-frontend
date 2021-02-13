import './App.css';
import './components/LoginForm.js';
import './components/SignupForm.js';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import KetchupNavbar from './components/KetchupNavbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import SignupRedirect from './pages/SignupRedirect.js';
import PatientSignup from './pages/PatientSignup.js';
import TherapistSignup from './pages/TherapistSignup.js';
import Profile from './pages/Profile.js';
import Contactus from './pages/Contactus.js';
import Login from './pages/Login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <KetchupNavbar />
          <div className="container mt-2" style={{ marginTop: 40 }}>
            <Switch>
              <Route exact path="/home">
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
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;