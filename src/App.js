import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Index from './components/Index';
import About from './components/About';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';

import './App.css';

const URL = 'http://localhost:8080/items/';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        console.log(response);
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        })
        this.setState({
          itemList: items,
        });
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
            <Route path="/users/" component={SignUp} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
