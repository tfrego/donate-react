import React from 'react';
import PropTypes from 'prop-types';

import './Offer.css';

const Offer = (props) => {
  const { title, description, image, qty } = props;
  return (
    <div className="offer">
      <h4>{title}</h4>
      <div className="hovereffect">
        {image ? <img src={image} alt={title} className="figure-img img-responsive"/> : null }
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

      <figcaption className="figure-caption">{description}</figcaption>
      <figcaption className="figure-caption">Quantity: {qty}</figcaption>
      <button className="btn btn-primary">Connect</button>

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
