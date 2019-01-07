import React, { Component } from 'react';
import axios from 'axios';
import ItemList from './ItemList';

const URL = 'http://localhost:8080/items/';

class Index extends Component {
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
      <ItemList items={this.state.itemList} />
    )
  }
}

export default Index;
