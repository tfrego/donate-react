import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase, { auth, provider } from './firebase.js';

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import NewItemForm from './components/NewItemForm';

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
      console.log('CURRENT USER', this.state.user);
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
              <div><Link to="/">Home</Link></div>
              <div><Link to="/about/">About</Link></div>
              <div><Link to="/request/">Create a Wish List</Link></div>
              <div><Link to="/offer/">Post a Gift</Link></div>
                {this.state.user ?
                  <div>
                    <Link to="/dashboard/">Dashboard</Link>
                    <img className="user-profile" src={this.state.user.photoURL} alt="user" />
                    <button onClick={this.logout}>Log Out</button>
                  </div>
                :
                  <button onClick={this.login}>Log In</button>
                }
            </nav>
            <Route path='/' exact component={Home} />
            <Route path='/about/' component={About} />
            <Route path='/request/' component={NewItemForm} />
            <Route path='/offer/' component={NewItemForm} />
            <Route path='/dashboard/' render={() => <Dashboard user={this.state.user} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
