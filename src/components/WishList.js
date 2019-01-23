import React from 'react';
import PropTypes from 'prop-types';
import Wish from './Wish';

const WishList = (props) => {
  const itemList = props.items.map((item) => {
    return <Wish key={item.id}
            {...item} />
  });

  return (
    <div className="matches">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {itemList}
        </tbody>
      </table>
    </div>
  )
}

WishList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default WishList;
