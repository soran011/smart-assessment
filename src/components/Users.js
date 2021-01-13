import React from 'react';

const Users = ({ users, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {users.map(user => (
        <div className='list-group-item' style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
          <li key={user._id} style={{ width: 200 }}>
            {user.name},

        </li>
          <p style={{ margin: 0, width: 200 }}>#{user.tags[0]} #{user.tags[1]}</p>
          <img key={user.id} src={user.picture} alt="user img" style={{ width: 35 }} />
          {user.isActive === true &&
            <div style={{ width: 10, height: 10, backgroundColor: "greenyellow" }}></div>
          }

          {user.isActive === false &&
            <div style={{ width: 10, height: 10, backgroundColor: "red" }}></div>
          }
        </div>
      ))}
    </ul>
  );
};

export default Users;