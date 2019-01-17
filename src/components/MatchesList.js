import React from 'react';
import PropTypes from 'prop-types';
import Match from './Match';

const MatchesList = (props) => {
  const itemList = props.items.map((item) => {
    return <Match key={item.id}
            {...item} />
  });

  return (
    <div>
      {itemList}
    </div>
  )
}

MatchesList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default MatchesList;
