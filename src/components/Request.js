import React from 'react';
import PropTypes from 'prop-types';

import './Request.css';

const Request = (props) => {
  const { title, description, qty } = props;
  return (
    <div className="request">
      <h4>{title}</h4>
      <p>{description}</p>
      <p>Quantity: {qty}</p>
    </div>
  );
};

Request.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.number,
  status: PropTypes.string,
}

export default Request;
