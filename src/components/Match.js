import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Matches.css';

const Match = (props) => {
  const { title, description, image, qty, userName, userId } = props;
  return (
      <tr className="matches">
        <td>{title.charAt(0).toUpperCase() + title.slice(1)}</td>
        <td>{description}</td>
        <td>{qty}</td>
        <td>{image ? <img src={image} alt={title} className="dashboard-img" /> : null }</td>
        <td>{userName}</td>
        <td><Link to={`/email/${userId}`}><i className="far fa-envelope-open contact"></i></Link></td>
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
