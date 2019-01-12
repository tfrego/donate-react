import React from 'react';
import PropTypes from 'prop-types';

import './Offer.css';

const Offer = (props) => {
  const { title, description, image, qty } = props;
  return (
    <div className="offer">
      <h4>{title}</h4>
      <p>{description}</p>
      {image ? <img src={image} alt={title}/> : null }
      <p>Quantity: {qty}</p>
    </div>
  );
};

Offer.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  qty: PropTypes.number,
  status: PropTypes.string,
}

export default Offer;
