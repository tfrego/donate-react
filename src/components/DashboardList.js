import React from 'react';
import PropTypes from 'prop-types';

import DashboardItem from './DashboardItem';

// import './DashboardList.css';

const DashboardList = (props) => {
  const itemList = props.items.map((item) => {
    return <DashboardItem key={item.id}
            deleteItemCallback={props.deleteItemCallback}
            itemFullfilledCallback={props.itemFullfilledCallback}
            type={props.type}
            {...item} />
  });

  return (
    <div>
      {itemList}
    </div>
  )
}

DashboardList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default DashboardList;
