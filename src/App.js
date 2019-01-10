import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';

import Index from './components/Index';
import About from './components/About';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      console.log(this.state);
    });
  }

  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login() {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Connect and Donate</h1>

        <Router>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
              </ul>
                {this.state.user ?
                  <ul>
                    <li><Link to="/dashboard/">Dashboard</Link></li>
                    <li><img className="user-profile" src={this.state.user.photoURL} alt="user" /></li>
                    <li><button onClick={this.logout}>Log Out</button></li>
                  </ul>
                :
                  <div>
                    <button onClick={this.login}>Log In</button>
                  </div>
                }
            </nav>
            <Route path='/' exact component={Index} />
            <Route path='/about/' component={About} />
            <Route path='/dashboard/' render={() => <Dashboard user={this.state.user} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
