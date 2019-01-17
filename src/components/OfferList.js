import React from 'react';
import PropTypes from 'prop-types';
import Offer from './Offer';

import './OfferList.css';

const OfferList = (props) => {
  const itemList = props.items.map((item) => {
    return <Offer key={item.id}
            {...item} />
  });

  return (
    <div className="offerlist">
      {itemList}
    </div>
  )
}

OfferList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default OfferList;
