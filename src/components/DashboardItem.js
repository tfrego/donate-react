import React from 'react';
import PropTypes from 'prop-types';
import Match from './Match';

// import './DashboardOffer.css';

const DashboardItem = (props) => {
  const { id, title, category, description, image, qty, matches, type } = props;

  let itemMatches = null;

  if (matches !== [] && matches !== undefined) {
    itemMatches = matches.map((item) => {
      return <Match key={item.id}
              {...item} />
    });
  };


  return (
    <div className="dashboard-item">
        <h3>{title}</h3>
        <p>Category: {category}</p>
        <p>Description: {description}</p>
        <p>Quantity: {qty}</p>
        {image ? <img src={image} alt={title} className="dashboard-img" /> : null }
        <button className="btn btn-outline-info">Edit</button>
        <button className="btn btn-outline-danger" onClick={() => props.deleteItemCallback(id, type)}>Delete</button>

      {itemMatches ?
        <div>
          Matches:
          {itemMatches}
        </div>
      :
        null
      }
    </div>
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
