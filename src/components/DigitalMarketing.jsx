import React, { useRef, useState } from "react";

import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";

const digitalMarketingMenu = [
  { name: "Search Engine Optimization", path: "/searchEngine" },
  { name: "Social Media Marketing", path: "/socialmarketing" },
];
const DigitalMarketing = () => {
  const [digital, setDigital] = useState(false);
  const dropdownRef = useRef();
  const handleDegitalEnter = () => {
    setDigital(true);
  };

  const handleDigitalLeave = () => {
    setDigital(false);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div
        className="relative"
        onMouseEnter={handleDegitalEnter}
        onMouseLeave={handleDigitalLeave}
      >
        <div
          className="flex"
          onClick={() => setIsSolutionOpen(!isSolutionOpen)}
          ref={dropdownRef}
        >
          <p
            className="hover:text-[#139898]  text-[#1B3D68] font-[Montserrat] block text-base hover:underline"
            onClick={digital ? () => setDigital(false) : () => setDigital(true)}
          >
            Digital Marketing
          </p>
          <MdArrowDropDown className="mt-1" />
        </div>
        {digital && (
          <ul className="absolute sm:-left-8 w-[14rem] z-30 bg-white shadow-lg rounded-lg max-lg:static max-lg:w-full max-lg:mt-3">
            {digitalMarketingMenu.map((item, index) => (
              <li key={index} className="border-b px-4 py-2 hover:bg-gray-100">
                <Link
                  to={item.path}
                  className="block text-[#1B3D68] hover:text-[#139898] hover:underline font-[Montserrat]"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default DigitalMarketing;
