import React from 'react';

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {users.map(user => (
        <diV>
          <li key={user._id} className='list-group-item'>
            {user.name},

        </li>
          <p>#{user.tags}</p>
          <img key={user.id} src={user.picture} alt="user img" />
          {user.isActive === true &&
            <div className="isActive"></div>
            }
            

        </diV>
      ))}
    </ul>
  );
};

export default Users;