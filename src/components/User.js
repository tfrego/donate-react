import React, { Component } from 'react';
import axios from 'axios';
import WishList from './WishList';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      userRequests: [],
    }
  }

  componentDidMount() {
    console.log(this.props.match.params);
    axios.get(URL + 'users/' + this.props.match.params.user)
      .then((response) => {
        console.log(response);
        const user = response.data
        console.log(user);
        this.setState({ user: user });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({
          errorMessage: error.message,
        })
      });
    axios.get(URL + 'requests/user/' + this.props.match.params.user)
      .then((response) => {
        console.log(response);
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({ userRequests: items });
        console.log(this.state);
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
      <div className="main">
        <h3>Meet {this.state.user.name}</h3>
        <p>About: {this.state.user.about}</p>
        <h3>Wishlist</h3>
          <WishList items={this.state.userRequests} />
      </div>
    )
  }

}

export default User;
