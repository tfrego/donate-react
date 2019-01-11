import React, { Component } from 'react';
import axios from 'axios';
import firebase, { auth } from './../firebase';

import ItemList from './ItemList';

const URL = 'http://localhost:8080/items/';
// const UID = this.props.user.uid;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      wishList: [],
      donateList: [],
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user: user });
      }
    });

    console.log('CHECKING USER');
    console.log(this.state);

    axios.get(URL + `offers/${this.state.user.uid}`)
      .then((response) => {
        const allItems = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({
          donateList: allItems,
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
      <div>
        <section>
          <ItemList items={this.state.wishList} />
        </section>
        <section>
          <ItemList items={this.state.donateList} />
        </section>
      </div>
    )
  }
}

export default Dashboard;
