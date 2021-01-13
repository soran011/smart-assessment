import React, { useState, useEffect } from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination';
import API from './API';
import axios from 'axios';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);


  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get(API.users);
      setUsers(res.data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  // Get current posts
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>Users</h1>
      <Users users={currentUsers} loading={loading} />
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;