import React from 'react';
import PropTypes from 'prop-types';

import './Item.css';

const Item = (props) => {
  const { userId, type, title, category, description, qty, status } = props;
  return (
    <div className="item">
      {userId}
      {type}
      {title}
      {category}
      {description}
      {qty}
      {status}
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
