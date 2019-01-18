import React from 'react';
import PropTypes from 'prop-types';

import './Offer.css';

const Offer = (props) => {
  const { title, description, image, qty } = props;
  return (
    <div className="offer card mb-3">
      <h4 class="card-header">{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
      <div className="hovereffect">
        {image ? <img src={image} alt={title} /> : null }
        <div className="overlay">
            <div className="rotate">
                <p className="group1">
                    <a href="#">
                        <i className="far fa-envelope-open"></i>
                    </a>
                </p>
            </div>
          </div>
        </div>

      <p className="card-text">{description}</p>
      <p className="card-text">Quantity: {qty}</p>
      <button className="btn btn-info">Connect</button>

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
