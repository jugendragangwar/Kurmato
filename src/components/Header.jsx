import React, { useRef, useState } from "react";
import logo from "../assets/Kurmato-logo.png";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import Solution from "./Solution";
import DigitalMarketing from "./DigitalMarketing";
import { FaUserCircle } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const dropdownRef = useRef();
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleDropdownClick = () => {
    dropdownRef.current.classList.toggle("no-hover");
  };

  const token = localStorage.getItem("RefreshToken");

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.clear();
      toast.success("Logout successfully");
      navigate("/");
    }
  };

  return (
    <>
      <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-sans min-h-[70px] tracking-wide relative z-50">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full">
          <Link to={"/"} onClick={closeMenu}>
            <img src={logo} alt="logo" className="w-36" />
          </Link>

          <div
            id="collapseMenu"
            className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}
          >
            <button
              id="toggleClose"
              className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
              onClick={handleClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 fill-black"
                viewBox="0 0 320.591 320.591"
              >
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                  data-original="#000000"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                  data-original="#000000"
                ></path>
              </svg>
            </button>

            <ul className="lg:flex gap-x-4 space-y-3 lg:space-y-0 xl:space-x-5 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="mb-6 hidden max-lg:block">
                <Link to={"/"}>
                  <img src={logo} alt="logo" className="w-36" />
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  to={"/"}
                  onClick={closeMenu}
                  className="hover:text-[#16aeae] text-[#1B3D68] hover:underline font-[Montserrat] block text-base"
                >
                  Home
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Solution />
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3">
                <DigitalMarketing />
              </li>

              <li className="max-lg:border-b max-lg:py-3 px-3 relative">
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex">
                    <Link
                      to={"/joinUs"}
                      className="hover:text-[#139898] text-[#1B3D68] font-[Montserrat] block text-base hover:underline"
                      onClick={
                        isDropdownOpen
                          ? () => setIsDropdownOpen(false)
                          : () => setIsDropdownOpen(true)
                      }
                    >
                      Career
                    </Link>
                  </div>
                </div>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link to={"/blog"}>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#139898] text-[#1B3D68] font-[Montserrat] hover:underline block text-base"
                    onClick={closeMenu}
                  >
                    Blog
                  </a>
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  to={"/about"}
                  className="hover:text-[#139898] text-[#1B3D68] font-[Montserrat] hover:underline block text-base"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
              </li>
              <li className="max-lg:border-b max-lg:py-3 px-3">
                <Link
                  to={"/contact"}
                  className="hover:text-[#139898] text-[#1B3D68] font-[Montserrat] hover:underline block text-base"
                  onClick={closeMenu}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center max-lg:ml-auto space-x-5">
            <div className="relative">
              {token ? (
                <>
                  <button
                    className="text-[#1B3D68] text-2xl"
                    onClick={handleLogout}
                  >
                    <CiLogout />
                  </button>
                </>
              ) : (
                <Link to="/LoginUser" className="text-[#1B3D68] text-2xl">
                  <CiLogin />
                </Link>
              )}
            </div>

            <button
              id="toggleOpen"
              className="lg:hidden !ml-7"
              onClick={handleClick}
            >
              <svg
                className="w-7 h-7"
                fill="#000"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Header;
