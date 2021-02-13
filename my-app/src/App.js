import './App.css';
import './components/Loginform.js';
import './components/Signupform.js';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import KetchupNavbar from './components/KetchupNavbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Signup from './pages/Signup.js';
import Profile from './pages/Profile.js';

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
              <Route path="/signup">
                <Signup />
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