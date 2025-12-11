import logo from "../../assets/Kurmato-logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="py-8 mt-10 bg-white shadow-t-lg sm:mt-10">
      <div className="flex flex-col items-start justify-between p-3 mb-8 sm:flex-row md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/5 sm:ml-6">
          <Link to={"/"}>
            {" "}
            <img src={logo} alt="Logo" className="w-40 h-auto" />
          </Link>

          <h3 className="text-[#1B3D68] font-[Montserrat]  mb-2 mt-4">
            Office suite-306, 3rd floor, <br /> D-60, D-Block , <br /> AGS
            Business Park, <br />
            Sector-63, Noida-201301
          </h3>
        </div>
        <div className="w-full md:w-1/6 sm:ml-4">
          <ul>
            <li>
              {" "}
              <Link
                to={"/"}
                className="text-[#1B3D68]  font-[Montserrat] hover:text-[#139898]   font-bold mb-2"
              >
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/about"}
                className="text-[#1B3D68] font-[Montserrat] hover:text-[#139898]  font-bold mb-2"
              >
                {" "}
                About us{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/joinUs"}
                className="text-[#1B3D68] font-[Montserrat] hover:text-[#139898]  font-bold mb-2"
              >
                {" "}
                Carrer{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/contact"}
                className="text-[#1B3D68] font-[Montserrat] hover:text-[#139898]  font-bold mb-2"
              >
                {" "}
                Contact{" "}
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/blog"}
                className="text-[#1B3D68] font-[Montserrat] hover:text-[#139898]  font-bold mb-2"
              >
                {" "}
                Blogs{" "}
              </Link>
            </li>
            <Link
              to={"/"}
              className="text-[#1B3D68] font-[Montserrat] hover:text-[#139898]  font-bold mb-2"
            >
              <li> </li>
            </Link>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <ul>
            <li className="text-[#1B3D68] font-bold font-[Montserrat] mt-6 sm:mt-0    mb-2">
              Solution
            </li>
            <li>
              {" "}
              <Link
                to={"/websiteDevelopment"}
                className="text-[#1B3D68] hover:text-[#139898]   font-[Montserrat] mb-2"
              >
                Website Development
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/softwareDevelopment"}
                className="text-[#1B3D68] hover:text-[#139898]   font-[Montserrat] mb-2"
              >
                Software Development
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/metaverseDevelopment"}
                className="text-[#1B3D68] hover:text-[#139898]   font-[Montserrat] mb-2"
              >
                Metaverse Development
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/exchangeSolution"}
                className="text-[#1B3D68] hover:text-[#139898]   font-[Montserrat] mb-2"
              >
                Exchange Solutions
              </Link>
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <ul>
            <li className="text-[#1B3D68] font-bold font-[Montserrat] mt-6 sm:mt-0    mb-2">
              Digital Marketing
            </li>
            <li>
              {" "}
              <Link
                to={"/searchEngine"}
                className="text-[#1B3D68] hover:text-[#139898]   font-[Montserrat] mb-2"
              >
                Search Engine Optimization
              </Link>
            </li>
            <li>
              {" "}
              <Link
                to={"/socialmarketing"}
                className="text-[#1B3D68] hover:text-[#139898]   font-[Montserrat] mb-2"
              >
                Social Media Marketing
              </Link>
            </li>
            {/*             <li> <Link to={'/emailmarketing'} className='text-[#1B3D68] hover:text-[#139898]   font-[Montserrat] mb-2'>Email Marketing</Link></li>
            <li> <Link to={'/payperclick'} className='text-[#1B3D68] hover:text-[#139898]   font-[Montserrat] mb-2'>Pay Per Click</Link></li> */}
          </ul>
        </div>

        <div className="w-full md:w-1/5">
          <ul>
            <li className="text-[#1B3D68] font-[Montserrat] mt-6 sm:mt-0  font-bold mb-2">
              Legal
            </li>
            <li>
              <Link
                to={"/privacy-policy"}
                className="text-[#1B3D68] font-[Montserrat] hover:text-[#139898] mb-2"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to={"/termcondition"}
                className="text-[#1B3D68] font-[Montserrat] hover:text-[#139898]  mb-2"
              >
                Terms And Conditons
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <div>
            <h3 className="text-[#1B3D68] font-bold font-[Montserrat] mb-2 mt-4 sm:mt-0">
              Contact Us
            </h3>
            <a target="_blank" href="mailto:sales@kurmato.com">
              <p className="text-[#1B3D68] font-bold font-[Montserrat] hover:text-[#139898]">
                <span className="text-gray-700">Email :</span> sales@kurmato.com
              </p>
            </a>
            <p className="text-[#1B3D68] font-bold font-[Montserrat] hover:text-[#139898]">
              <span className="text-gray-700">Phone-number :</span> 8860221497
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-4">
        <a
          href="https://www.instagram.com/kurmato_official/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#1B3D68] text-white hover:bg-[#139898] p-2 rounded-full inline-flex items-center justify-center">
            <FaInstagram />
          </div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61552857692452"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#1B3D68] text-white p-2 hover:bg-[#139898]  rounded-full inline-flex items-center justify-center">
            <FaFacebookF />
          </div>
        </a>
        <a
          href="https://twitter.com/kurmato8289"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#1B3D68] text-white p-2 hover:bg-[#139898]  rounded-full inline-flex items-center justify-center">
            <FaTwitter />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/company/kurmato/about/?viewAsMember=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-[#1B3D68] text-white p-2 hover:bg-[#139898]  rounded-full inline-flex items-center justify-center">
            <FaLinkedinIn />
          </div>
        </a>
      </div>
      <div className="bg-[#1B3D68] flex justify-center mt-6 py-2 text-white w-full">
        <h3 className="font-[Montserrat] ">@ 2024 | All Rights Reserved </h3>
      </div>
    </div>
  );
};

export default Footer;
