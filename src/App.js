import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Index from './components/Index';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/login/">Log In</Link></li>
                <li><Link to="/signup/">Sign Up</Link></li>
              </ul>
            </nav>
            <Route path="/" exact component={Index} />
            <Route path="/about/" component={About} />
            <Route path="/login/" component={LogIn} />
            <Route path="/signup/" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
