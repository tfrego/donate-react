import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';
import geolib from 'geolib';
import axios from 'axios';

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import User from './components/User';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      location: {},
      userRequests: null,
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

  getUser = (userId) => {
    const url = process.env.REACT_APP_BACKEND_API_BASE_URL;

    axios.get(url + 'requests/user/' + userId)
      .then((response) => {
        console.log(response);
        const requests = response.data.map((item) => {
          const newRequest = {
            ...item,
          }
          return newRequest;
        });
        this.setState({
          userRequests: requests,
        });
        console.log(this.state);
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
        <form className="form-inline form-location">
        {this.state.user ?
          <img className="user-profile" src={this.state.user.photoURL} alt="user" />
        :
          null
        }
          <button className="btn btn-primary" type="button" onClick={this.getLocation}><i className="fa fa-map-marker" aria-hidden="true"></i> Find My Location</button>
          <span> or </span>
          <input className="form-control mr-sm-2" type="text" value="" placeholder="Zip or City, State"/>
          <button className="btn btn-primary" type="submit" onClick={this.zipCodeFinder}>Go</button>
        </form>

        <Router>
          <div>
            <nav className="navbar navbar-fixed-top">
              {this.state.user ?
                <ul className="navbar-nav">
                  <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                  <li className="nav-item"><Link to="/about/" className="nav-link">About</Link></li>
                  <li className="nav-item"><Link to="/dashboard/" className="nav-link">My Items</Link></li>
                  <li><button type="button" className="btn btn-info" onClick={this.logout}>LOG OUT</button></li>
                </ul>
              :
                <ul className="navbar-nav">
                  <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                  <li className="nav-item"><Link to="/about/" className="nav-link">About</Link></li>
                  <li className="nav-item"><Link to="/dashboard/" className="nav-link">Create a Wish List</Link></li>
                  <li className="nav-item"><Link to="/dashboard/" className="nav-link">Post a Gift</Link></li>
                  <li><button type="button" className="btn btn-sm btn-info display-4" onClick={this.login}>LOG IN</button></li>
                </ul>
                }
            </nav>

            <Route path='/' exact component={Home} />
            <Route path='/about/' component={About} />
            <Route path='/dashboard/' render={() => <Dashboard user={this.state.user} />} />
            <Route path='/user/' render={(props) => <User {...props} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
