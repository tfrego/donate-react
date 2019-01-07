import React, { Component } from 'react';
import axios from 'axios';

import ItemList from './ItemList';
import SearchBar from './SearchBar';

const URL = 'http://localhost:8080/items/';

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishList: [],
      donateList: [],
      masterList: [],
    };
  }

  componentDidMount() {
    axios.get(URL)
      .then((response) => {
        console.log(response);
        const allItems = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        const wishItems = allItems.filter(item => item.type === 'wish');
        const donateItems = allItems.filter(item => item.type === 'donate');
        this.setState({
          wishList: wishItems,
          masterWishList: wishItems,
          donateList: donateItems,
          masterDonateList: donateItems,
        });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
  }

  searchWishList = (value) => {
    console.log(value);
    const regex = new RegExp(`${value}`.toUpperCase());
    const itemList = this.state.masterWishList.filter((item) => {
      return regex.test(`${item.title}${item.description}`.toUpperCase());
    });

    this.setState({
      wishList: itemList,
    })
  }

  searchDonateList = (value) => {
    console.log(value);
    const regex = new RegExp(`${value}`.toUpperCase());
    const itemList = this.state.masterDonateList.filter((item) => {
      return regex.test(`${item.title}${item.description}`.toUpperCase());
    });

    this.setState({
      donateList: itemList,
    })
  }

  render() {
    return (
      <div>
        <section>
          <SearchBar onSearchCallback={this.searchWishList} />
          <ItemList items={this.state.wishList} />
        </section>
        <section>
          <SearchBar onSearchCallback={this.searchDonateList} />
          <ItemList items={this.state.donateList} />
        </section>
      </div>
    )
  }
}

export default Index;
