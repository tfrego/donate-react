import React from 'react';
import PropTypes from 'prop-types';

import './Offer.css';

const Offer = (props) => {
  const { title, description, images, qty } = props;
  return (
    <div className="offer">
      <h4>{title}</h4>
      <p>{description}</p>
      {images[0] ? <img src={images[0]} alt={title}/> : null }
      <p>Quantity: {qty}</p>
    </div>
  );
};

Offer.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
  qty: PropTypes.number,
  status: PropTypes.string,
}

export default Offer;
