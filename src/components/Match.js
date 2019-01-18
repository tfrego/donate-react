import React from 'react';
import PropTypes from 'prop-types';

const Match = (props) => {
  const { title, description, image, qty, userName } = props;
  return (
      <ul>
        <li>Title: {title.charAt(0).toUpperCase() + title.slice(1)}</li>
        <li>{image ? <img src={image} alt={title} /> : null }</li>
        <li>Description: {description}</li>
        <li>Quantity: {qty}</li>
        <li>Posted By: {userName}</li>
      </ul>
  );
};

Match.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  qty: PropTypes.number,
  status: PropTypes.string,
}

export default Match;
