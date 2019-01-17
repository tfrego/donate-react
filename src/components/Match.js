import React from 'react';
import PropTypes from 'prop-types';

const Match = (props) => {
  const { title, description, image, qty, userName } = props;
  return (
    <div>
      <p>Title: {title.charAt(0).toUpperCase() + title.slice(1)}</p>
      {image ? <img src={image} alt={title} /> : null }
      <p>Description: {description}</p>
      <p>Quantity: {qty}</p>
      <p>Posted By: {userName} </p>
      <button className="btn btn-info">Connect</button>
    </div>
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
