import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaBlog, FaClipboardList, FaPlusCircle, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import LogoutButton from './Logout';
import logo from '../../../assets/Kurmato-logo.png';

const Navbar = ({ logout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="md:hidden flex justify-between items-center p-4 bg-[#2c7adf]">
        <img src={logo} alt="logo" className='w-36' />
        <button onClick={toggleDrawer} className="text-white p-2 rounded-md">
          <FaBars size={24} />
        </button>
      </div>

      <div className={`bg-[#2870cf]  h-[100%] p-3 top-0 z-40 md:h-[100vh] transition-transform duration-300 
        ${isOpen ? 'translate-x-0 w-72' : '-translate-x-full'} md:translate-x-0 md:w-64 fixed lg:relative`}>
        
        <div className="flex justify-end md:hidden ">
          <button onClick={toggleDrawer} className="text-white">
            <FaTimes size={24} />
          </button>
        </div>

        <div className="flex flex-col space-y-6 text-white">
          <div className="flex justify-center">
            <img src={logo} alt="logo" className="w-36" />
          </div>
          <Link to="/createblogs" onClick={toggleDrawer} className="flex items-center space-x-2 hover:text-gray-400">
            <FaPlusCircle />
            <h4>Create Blogs</h4>
          </Link>
          <Link to="/blogpost" onClick={toggleDrawer} className="flex items-center space-x-2 hover:text-gray-400">
            <FaBlog />
            <h4>All Blogs</h4>
          </Link>
          <Link to="/alljobposition" onClick={toggleDrawer} className="flex items-center space-x-2 hover:text-gray-400">
            <FaPlusCircle />
            <h4>Add Job Position</h4>
          </Link>
          <Link to="/alljobposts" onClick={toggleDrawer} className="flex items-center space-x-2 hover:text-gray-400">
            <FaClipboardList />
            <h4>All Job Posts</h4>
          </Link>
          <Link to="/" onClick={() => { toggleDrawer(); logout(); }} className="flex items-center space-x-2 hover:text-gray-400">
            <FaEnvelope />
            <LogoutButton />
          </Link>
        </div>
      </div>

      {isOpen && <div onClick={toggleDrawer} className="fixed inset-0   bg-black bg-opacity-50 z-30 md:hidden"></div>}
    </div>
  );
};

export default Navbar;
