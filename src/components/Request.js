import React from 'react';
import { Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import User from './User';

import './Request.css';

const Request = (props) => {
  const { title, description, qty, userName, userId } = props;
  return (
    <div className="request">
      <div>
        <h4>{title}</h4>
        <p>Description: {description}</p>
        <p>Quantity: {qty}</p>
        <p>Posted By:</p><Link to="/user/"><button className="btn btn-primary"> {userName} </button></Link>
      </div>
      <Route path='/user/' render={() => <User user={userId} />} />
    </div>
  );
};

Request.propTypes = {
  userId: PropTypes.string,
  userName: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.number,
  status: PropTypes.string,
}

export default Request;
