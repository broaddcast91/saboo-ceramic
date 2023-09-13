import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../../context/AuthContext';

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out');
      window.alert('User is logging out');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
      <ul>
        <li>
          <h1 className='text-2xl font-bold py-4'>Account</h1>
        </li>
        <li>
          {' '}
          <p>User Email: {user && user.email}</p>
        </li>
        <li></li>
      </ul>

      <button onClick={handleLogout} className='border px-6 py-2 my-4 rounded'>
        Logout
      </button>
    </div>
  );
};

export default Account;
