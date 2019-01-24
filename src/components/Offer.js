import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import geolib from 'geolib';

import './Offer.css';

const Offer = (props) => {
  const { userId, title, description, image, qty, location, userLocation } = props;

  let distance = null;

  if (location && userLocation) {
    console.log(userLocation);
    console.log(location);
    distance = (geolib.getDistance(
      {latitude: userLocation.latitude, longitude: userLocation.longitude},
      {latitude: location.lat, longitude: location.lng}
    )/1609.34).toFixed(1);
  }

  return (
    <div className="offer card">
    {distance < 20 ?
      <div>
        <div>
          <h4 className="card-header">{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
        </div>
        <div className="card-body">
          <div className="hovereffect">
            {image ? <img src={image} alt={title} /> : null }
            <div className="overlay">
              <div className="rotate">
                <p className="group1">
                  <Link to={`/email/${userId}`}>
                    <i className="far fa-envelope-open"></i>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Description: {description}</h5>
          <h6 className="card-subtitle text-muted">Quantity: {qty}</h6>
          <h6 className="card-subtitle text-muted">{location.cityState}</h6>
          {distance ?
            <h6 className="card-subtitle text-muted">({distance} miles)</h6>
          :
            null
          }
        </div>
      <Link to={`/email/${userId}`}><button className="btn btn-info">Connect</button></Link>
    </div>
    :
      null
    }
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
