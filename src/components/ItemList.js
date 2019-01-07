import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = (props) => {
  const itemList = props.items.map((item) => {
    return <Item key={item.id}
            {...item} />
  });

  return (
    <div className="item">
      {itemList}
    </div>
  )
}

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
}
