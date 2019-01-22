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
    )/1609.34).toFixed(2);
  }

  return (
    <div className="offer card mb-3">
    {distance < 20 ?
      <div>
        <h4 className="card-header">{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
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
        <p className="card-text">Description: {description}</p>
        <p className="card-text">Quantity: {qty}</p>
        <p>{location.cityState} </p>
        {distance ?
          <p>({distance} miles)</p>
        :
          null
        }
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
