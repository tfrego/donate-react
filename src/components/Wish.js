import React from 'react';
import PropTypes from 'prop-types';

const Wish = (props) => {
  const { title, description, qty } = props;
  return (
      <tr className="matches">
        <td>{title.charAt(0).toUpperCase() + title.slice(1)}</td>
        <td>{description}</td>
        <td>{qty}</td>
      </tr>
  );
};

Wish.propTypes = {
  userId: PropTypes.string,
  title: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  qty: PropTypes.number,
}

export default Wish;
