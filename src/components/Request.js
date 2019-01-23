import React from 'react';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import geolib from 'geolib';

import './Request.css';

const Request = (props) => {
  const { title, description, qty, userName, userId, location, userLocation } = props;

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
    <div className="request">
    {distance < 20 ?
      <div>
        <h4>{title.charAt(0).toUpperCase() + title.slice(1)}</h4>
        <p>Description: {description}</p>
        <h6 className="card-subtitle text-muted">Quantity: {qty}</h6>
        <h6 className="card-subtitle text-muted">{location.cityState}</h6>
        <p>Posted By:</p>
          <Link to={`/${userId}`}><button className="btn btn-info">{userName}</button></Link>


        {distance ?
          <p>({distance} miles)</p>
        :
          null
        }
      </div>
    :
      null
      }
    </div>
  )
}

Request.propTypes = {
  userId: PropTypes.string,
  userName: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.number,
  selectUserCallback: PropTypes.func,
}

export default Request;
