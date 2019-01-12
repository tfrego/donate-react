import React, { Component } from 'react';
import axios from 'axios';
import firebase, { auth } from './../firebase';

import RequestList from './RequestList';
import OfferList from './OfferList';
import NewItemForm from './NewItemForm';

const URL = 'http://localhost:8080/';
// const UID = this.props.user.uid;

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      requestList: [],
      offerList: [],
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

    axios.get(URL + `offers/user/${this.state.user.uid}`)
      .then((response) => {
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({
          offerList: items,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });

    axios.get(URL + `requests/user/${this.state.user.uid}`)
      .then((response) => {
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({
          requestList: items,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  addItem = (newItem) => {
    console.log(newItem);
    const apiPayLoad = {
      ...newItem,
      userId: this.state.user.uid,
      status: 'active',
    };
    axios.post(URL + `offers/`, apiPayLoad)
      .then((response) => {
        console.log('API RESPONSE SUCCESS', response);

        const { offerList } = this.state;

        offerList.push(newItem);

        this.setState({ offerList });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  render() {
    return (
      <div>
        <section>
          <h2>My Wish List</h2>
          <RequestList items={this.state.requestList} />
        </section>
        <section>
          <h2>My Items to Gift</h2>
          <OfferList items={this.state.offerList} />
          <NewItemForm addItemCallback={this.addItem} />
        </section>
      </div>
    )
  }
}

export default Dashboard;
