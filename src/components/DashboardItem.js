import React from 'react';
import PropTypes from 'prop-types';
import MatchesList from './MatchesList';

// import './DashboardOffer.css';

const DashboardItem = (props) => {
  const { id, title, category, description, image, qty, matches, type } = props;

  let itemMatches = null;

  if (matches !== [] || matches) {
    itemMatches = matches.map((item) => {
      const newItem = {
        ...item,
      }
      return newItem;
    });
  }

  return (
    <tbody>
      <tr>
        <td>{title}</td>
        <td>{category}</td>
        <td>{description}</td>
        <td>{qty}</td>
        <td>{image ? <img src={image} alt={title} className="dashboard-img" /> : null }</td>
        <td>
          <button className="btn btn-outline-info">Edit</button>
          <button className="btn btn-outline-danger" onClick={() => props.deleteItemCallback(id, type)}>Delete</button>
        </td>
      </tr>
      {itemMatches ?
        <tr>
          <p>Matches:</p>
          <MatchesList items={itemMatches} />
        </tr>
      :
        null
      }
    </tbody>
  );
};

DashboardItem.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  qty: PropTypes.number,
  status: PropTypes.string,
  deleteItemCallback: PropTypes.func,
}

export default DashboardItem;
