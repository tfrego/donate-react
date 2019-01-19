import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Request.css';

const URL = process.env.REACT_APP_BACKEND_API_BASE_URL;

const Request = (props) => {
  // console.log(match);
  console.log(props);

  // getUser = (userId) => {
  //   axios.get(URL + 'requests/user/' + userId)
  //     .then((response) => {
  //       console.log(response);
  //       const items = response.data.map((item) => {
  //         const newItem = {
  //           ...item,
  //         }
  //         return newItem;
  //       });
  //       this.setState({
  //         userSelected: true,
  //         userRequests: items,
  //       });
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //       this.setState({
  //         errorMessage: error.message,
  //       })
  //     });
  // }


    const { title, description, qty, userName, userId } = props;
    return (
      <div className="request">
        <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
        <p>Description: {description}</p>
        <p>Quantity: {qty}</p>
        <p>Posted By:</p><button className="btn btn-info">
          <Link to={`/${userId}`}>{userName} </Link></button>
      </div>
    )

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
