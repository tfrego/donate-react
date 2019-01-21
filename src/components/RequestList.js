import React from 'react';
import PropTypes from 'prop-types';
import Request from './Request';

import './RequestList.css';

const RequestList = (props) => {
  const itemList = props.items.map((item) => {
    return <Request key={item.id}
            userLocation={props.userLocation}
            {...item} />
  });

  return (
    <div className="request">
      {itemList}
    </div>
  )
}

RequestList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default RequestList;
