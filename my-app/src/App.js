import logo from './components/logo.jpeg'
import './App.css';
import './components/loginform.js';
import './components/signupform.js';
import LoginForm from './components/loginform.js';
import SignupForm from './components/signupform.js';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Signup from './pages/Signup.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
        Let's Ketchup
        <BrowserRouter>
          <Navbar />
          <div className="container mt-2" style={{ marginTop: 40 }}>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;