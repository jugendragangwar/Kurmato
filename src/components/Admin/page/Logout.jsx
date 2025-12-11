import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('isLoggedIn');

    if (onLogout) {
      onLogout();
    }

    navigate('/');
  };

  return (
    <button 
      onClick={handleLogout} 
      className=" text-white font-bold "
    >
      Logout
    </button>
  );
};

export default LogoutButton;
