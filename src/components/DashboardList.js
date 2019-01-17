import React from 'react';
import PropTypes from 'prop-types';

import DashboardItem from './DashboardItem';

// import './DashboardList.css';

const DashboardList = (props) => {
  const itemList = props.items.map((item) => {
    return <DashboardItem key={item.id}
            deleteItemCallback={props.deleteItemCallback}
            type={props.type}
            {...item} />
  });

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Category</th>
          <th scope="col">Description</th>
          <th scope="col">Quantity</th>
          <th scope="col">Image</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>
      {itemList}
    </table>
  )
}

DashboardList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default DashboardList;
