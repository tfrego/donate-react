import React from 'react';
import PropTypes from 'prop-types';

const Match = (props) => {
  const { title, description, image, qty, userName } = props;
  return (
      <tr className="matches">
        <td>{title.charAt(0).toUpperCase() + title.slice(1)}</td>
        <td>{description}</td>
        <td>{qty}</td>
        <td>{image ? <img src={image} alt={title} className="dashboard-img" /> : null }</td>
        <td>{userName}</td>
        <td></td>
      </tr>
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
