import React, { Component } from 'react';
import axios from 'axios';

import RequestList from './RequestList';
import OfferList from './OfferList';
import SearchBar from './SearchBar';
import User from './User';
import './Home.css';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      requestList: [],
      requestMasterList: [],
      offerList: [],
      offerMasterList: [],
      userList: [],
      selectedUser: undefined,
    };
  }

  componentDidMount() {
    axios.get(URL + 'requests/')
      .then((response) => {
        console.log(response);
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({
          requestList: items,
          requestMasterList: items,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
    axios.get(URL + 'offers/')
      .then((response) => {
        console.log(response);
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({
          offerList: items,
          offerMasterList: items,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
    axios.get(URL + 'users/')
      .then((response) => {
        console.log(response);
        const users = response.data.map((user) => {
          const newUser = {
            ...user,
          }
          return newUser;
        });
        this.setState({
          userList: users,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  searchRequestList = (value) => {
    console.log(value);
    const regex = new RegExp(`${value}`.toUpperCase());
    const itemList = this.state.requestMasterList.filter((item) => {
      return regex.test(`${item.title}${item.description}`.toUpperCase());
    });

    this.setState({
      requestList: itemList,
    })
  }

  searchOfferList = (value) => {
    console.log(value);
    const regex = new RegExp(`${value}`.toUpperCase());
    const itemList = this.state.offerMasterList.filter((item) => {
      return regex.test(`${item.title}${item.description}`.toUpperCase());
    });

    this.setState({
      offerList: itemList,
    })
  }

  onSelectUser = (userId) => {
    console.log(userId);
    const userSelected = this.state.userList.find((user) => {
      return user.uid === userId;
    });
    console.log(userSelected);
    if (userSelected) {
      this.setState({ selectedUser: userSelected });
    }
    console.log(this.state);
  }

  render() {
    const { selectedUser } = this.state;
    const userDetails = selectedUser ? <User user={selectedUser} /> : '';

    return (
      <div>
        <section className="home">
          <p className="home-text">WANT TO CONNECT WITH A FAMILY IN NEED?</p>
          <h1 className="home-text">GIFT A WISH</h1>
          <p className="home-text">Search wish lists created by families and donation centers in your local communities.
          Connect directly with those in need to donate your new and gently used items.</p>
          <button type="button" className="btn btn-primary">LEARN MORE</button>
        </section>
        <section className="lists">
          <h2>Wish Lists</h2>
          <p>View items needed by families and donation centers</p>
          <SearchBar onSearchCallback={this.searchRequestList} />
          <RequestList
            items={this.state.requestList}
            selectUserCallback={this.onSelectUser} />
            {this.state.selectedUser ?
              <div className="user-details">
                {userDetails}
              </div>
            :
              null
            }

        </section>
        <section className="lists">
          <h2>Donate List</h2>
          <p>View new and gently used items available to be donated</p>
          <SearchBar onSearchCallback={this.searchOfferList} />
          <OfferList items={this.state.offerList} />
        </section>
      </div>
    )
  }
}

export default Home;
