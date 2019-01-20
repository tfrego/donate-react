import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Request.css';

const Request = (props) => {
  const { title, description, qty, userName, userId } = props;

  return (
    <div className="request">
      <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
      <p>Description: {description}</p>
      <p>Quantity: {qty}</p>
      <p>Posted By:</p>
        <Link to={`/${userId}`}><button className="btn btn-info">{userName}</button></Link>
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
