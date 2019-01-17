import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './Request.css';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userSelected: false,
    };
  }

  getUser = (userId) => {
    axios.get(URL + 'requests/user/' + userId)
      .then((response) => {
        console.log(response);
        const items = response.data.map((item) => {
          const newItem = {
            ...item,
          }
          return newItem;
        });
        this.setState({
          userSelected: true,
          userRequests: items,
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
    const { title, description, qty, userName, userId } = this.props;
    return (
      <div className="request">
        <h4>{title}</h4>
        <p>Description: {description}</p>
        <p>Quantity: {qty}</p>
        <p>Posted By:</p><button className="btn btn-primary" onClick={() => {this.props.selectUserCallback(userId)}}> {userName} </button>
      </div>
    )
  }
}

Request.propTypes = {
  userId: PropTypes.string,
  userName: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.number,
  selectUserCallback: PropTypes.func,
}

export default Request;
