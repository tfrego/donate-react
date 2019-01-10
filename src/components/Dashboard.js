import React, { Component } from 'react';
import axios from 'axios';

import ItemList from './ItemList';

const URL = 'http://localhost:8080/items/';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishList: [],
      donateList: [],
    };
  }

  componentDidMount() {
    axios.get(URL + `offers/5c2fa564a71fa5259385d132`)
      .then((response) => {
        console.log(response);
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
