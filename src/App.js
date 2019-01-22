import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';
import geolib from 'geolib';
import axios from 'axios';

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import User from './components/User';
import EmailForm  from './components/EmailForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      location: null,
      zipCode: '',
      userRequests: null,
    }
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
        this.setState({ user: null });
        localStorage.setItem('user', null);

      });
  }

  login = () => {
    auth.signInWithPopup(provider)
      .then((result) => {
        const authUser = result.user;
        this.setState({ user: authUser });
        localStorage.setItem('user', JSON.stringify(authUser))
        console.log(authUser);
      });
  }

  getLocation = () => {
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');

      const geoSuccess = (position) => {
        console.log('Location', position);
        this.setState({ location: position.coords });
        console.log(this.state);
        localStorage.setItem('location', JSON.stringify(position.coords))
      }

      navigator.geolocation.getCurrentPosition(geoSuccess)
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    };
  }

  zipCodeFinder = (event) => {
    event.preventDefault();
    const baseUrl = process.env.REACT_APP_GEOCODING_API_BASE_URL;
    const appKey = process.env.REACT_APP_GEOCODING_API_KEY;

    const address = this.state.zipCode;

    axios.get(baseUrl + address + '&key=' + appKey)
      .then((response) => {
        console.log(response);
        const { lat, lng } = response.data.results[0].geometry.location;
        this.setState({
          location: {
            latitude: lat,
            longitude: lng,
          }
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  onFormChange = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const updatedState = {};
    updatedState[field] = value;
    this.setState(updatedState);
    console.log(this.state);
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
          <button className="btn btn-info" type="button" onClick={this.getLocation}><i className="fa fa-map-marker"></i> Find My Location</button>
          <span>  or  </span>
          <input className="form-control" type="text" name="zipCode" placeholder="Zip or City, State" onChange={this.onFormChange} value={this.state.zipCode}/>
          <button className="btn btn-info" type="submit" onClick={this.zipCodeFinder}>Go</button>
        </form>

        <Router>
          <div>
            <nav className="navbar navbar-fixed-top">
              {this.state.user ?
                <ul className="navbar-nav">
                  <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                  <li className="nav-item"><Link to="/about/" className="nav-link">About</Link></li>
                  <li className="nav-item"><Link to="/dashboard/" className="nav-link">My Items</Link></li>
                  <li><button type="button" className="btn btn-primary" onClick={this.logout}>LOG OUT</button></li>
                </ul>
              :
                <ul className="navbar-nav">
                  <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                  <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                  <li className="nav-item"><Link to="/dashboard" className="nav-link">Create a Wish List</Link></li>
                  <li className="nav-item"><Link to="/dashboard" className="nav-link">Post a Gift</Link></li>
                  <li><button type="button" className="btn btn-primary" onClick={this.login}>LOG IN</button></li>
                </ul>
                }
            </nav>
            <Switch>
              <Route path='/' exact render={() => <Home userLocation={this.state.location} />} />
              <Route path='/about' component={About} />
              <Route path='/dashboard' render={() => <Dashboard user={this.state.user} />} />
              <Route path="/:user" exact component={User} />
              <Route path="/email/:emailUser" component={EmailForm} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
