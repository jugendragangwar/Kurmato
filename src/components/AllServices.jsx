import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const services = [
  { title: "Web Development", link: "/websiteDevelopment" },
  { title: "Software Development", link: "/softwareDevelopment" },
  { title: "App Deveplopment", link: "/appDevelopment" },
  { title: "Metaverse Development", link: "/metaverseDevelopment" },
  { title: "Exchange Solutions", link: "/exchangeSolution" },
  { title: "Game Development", link: "/gamedevelopment" },
  { title: "NFT Development", link: "/NftDevelopment" },
  { title: "Search Engine Optimization", link: "/searchEngine" },
  { title: "Social Media Marketing", link: "/socialmarketing" },
  { title: "Email Marketing", link: "/emailmarketing" },
  { title: "Pay per Click", link: "/payPerClick" },
  { title: "BlockChain Development", link: "/blockchain" },
];

const AllServices = () => {
  return (
    <div className="bg-gray-300 md:ml-10 md:w-72   w-full h-full    px-4 py-2 rounded-xl">
      <ul className="space-y-3 mt-2 ">
        {services.map((service, index) => (
          <li key={index} className="relative">
            <Link
              to={service.link}
              className="flex justify-between items-center p-1 bg-white rounded-lg shadow-md transition-all duration-300 hover:bg-[#139898] hover:text-white hover:shadow-xl"
              style={{ zIndex: 1 }}
            >
              <h2 className="font-[Montserrat]">{service.title}</h2>
              <FaArrowRight />
            </Link>
            <style jsx>{`
              li:hover {
                z-index: 10;
              }
            `}</style>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllServices;
