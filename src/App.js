import React, { Component } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';

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
        <ItemList items={this.state.itemList} />

      </div>
    );
  }
}

export default App;
