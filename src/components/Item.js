import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const Item = (props) => {
  const { title, description, imageUrl, qty } = props;
  return (
    <div className="item">
      <h4>{title}</h4>
      <p>{description}</p>
      {imageUrl ? <img src={imageUrl} alt={title}/> : null }
      <p>Quantity: {qty}</p>
    </div>
  );
};

Item.propTypes = {
  userId: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.number,
  status: PropTypes.string,
}

export default Item;
