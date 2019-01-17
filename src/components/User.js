import React from 'react';

const User = (props) => {
  const { uid, name, email, location, about } = props.user;
  return (
    <div>
      <h4>Meet {name}</h4>
      <p>{about}</p>
      <h5>Wish List</h5>

    </div>
  )
}

export default User;
