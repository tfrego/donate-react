import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';
import geolib from 'geolib';
import axios from 'axios';

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
        const authUser = result.user;
        this.setState({ user: authUser });
        localStorage.setItem('user', JSON.stringify(authUser))
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
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    };
  }

  zipCodeFinder = () => {
    const baseUrl = process.env.REACT_APP_GEOCODING_API_BASE_URL;
    const appKey = process.env.REACT_APP_GEOCODING_API_KEY;
    console.log(appKey);
    const address = '98105';

    axios.get(baseUrl + address + '&key=' + `${appKey}`)
      .then((response) => {
        console.log(response);
        const { lat, lng } = response.data.results[0].geometry.location;
        console.log(lat, lng);
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }


  render() {
    return (
      <div className="App">
        <h1>Gift a Wish</h1>
        <button type="button" className="btn btn-primary" onClick={this.getLocation}>Get My Location</button>
        <div>
          <input type="text" value="" />
          <button type="button" className="btn btn-primary" onClick={this.zipCodeFinder}>Zip Code Locator</button>
        </div>

        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to="/" className="navbar-brand">Gift A Wish</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarColor03">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/about/" className="nav-link">About <span className="sr-only">(current)</span></Link>
                  </li>
                  {this.state.user ?
                  <li className="nav-item">
                    <Link to="/dashboard/" className="nav-link">My Items</Link>
                    <img className="user-profile" src={this.state.user.photoURL} alt="user" />
                    <button type="button" className="btn btn-primary" onClick={this.logout}>Log Out</button>
                  </li>
                  :
                  <li className="nav-item">
                    <Link to="/dashboard/" className="nav-link">Create a Wish List</Link>
                    <Link to="/dashboard/" className="nav-link">Post a Gift</Link>
                    <button type="button" className="btn btn-primary" onClick={this.login}>Log In</button>
                  </li>
                  }
                </ul>
              </div>
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
