import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';
import geolib from 'geolib';

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      location: {},
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      }
      console.log('CURRENT USER', this.state.user);
    });
  }

  logout = () => {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        this.setState({
          user
        });
      });
  }

  getLocation = () => {
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');

      const geoSuccess = (position) => {
        console.log('Location', position.coords);
        this.setState({ location: position.coords });
        console.log(this.state);
      }

      navigator.geolocation.getCurrentPosition(geoSuccess)
      //   function(position) {
      //     console.log('Location', position.coords);
      //   },
      //   function() {
      //     alert('Position could not be determined.')
      //   },
      //   {
      //     enableHighAccuracy: true
      //   }
      // );
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Connect and Donate</h1>
        <button onClick={this.getLocation}>Get My Location</button>

        <Router>
          <div>
            <nav>
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about/">About</Link></div>
                {this.state.user ?
                  <div>
                    <Link to="/dashboard/">Dashboard</Link>
                    <img className="user-profile" src={this.state.user.photoURL} alt="user" />
                    <button onClick={this.logout}>Log Out</button>
                  </div>
                :
                  <div>
                    <Link to="/dashboard/">Create a Wish List</Link>
                    <Link to="/dashboard/">Post a Gift</Link>
                    <button onClick={this.login}>Log In</button>
                  </div>
                }
            </nav>
            <Route path='/' exact component={Home} />
            <Route path='/about/' component={About} />
            <Route path='/dashboard/' render={() => <Dashboard user={this.state.user} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
