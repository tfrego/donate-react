import React, { Component } from 'react';
import axios from 'axios';

import RequestList from './RequestList';
import OfferList from './OfferList';
import SearchBar from './SearchBar';

const URL = 'http://localhost:8080/';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      offerList: [],
      offerMasterList: [],
      requestList: [],
      requestMasterList: [],
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

  render() {
    return (
      <div>
        <section>
          <h2>Wish List</h2>
          <SearchBar onSearchCallback={this.searchRequestList} />
          <p>View items most needed by families and donation centers</p>
          <RequestList items={this.state.requestList} />
        </section>
        <section>
          <h2>Donate List</h2>
          <SearchBar onSearchCallback={this.searchOfferList} />
          <p>View new and gently used items avaiable to be donated</p>
          <OfferList items={this.state.offerList} />
        </section>
      </div>
    )
  }
}

export default Home;
