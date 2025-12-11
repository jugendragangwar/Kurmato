import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import Footer from "../Footer";
import img from "../../../assets/nft.png";
import img1 from "../../../assets/nft1.png";
import img2 from "../../../assets/nft2.png";
import img3 from "../../../assets/nft3.png";
import AllServices from "../../AllServices";
const NFTDevelopment = () => {
  return (
    <>
      <div className="  mx-auto  ">
        <div className="relative ">
          <div className="shadow-lg overflow-hidden  ">
            <img
              src={img}
              alt="nftdevelopment"
              className="w-full xl:h-[400px] max-h-[400px] h-52"
            />
          </div>
          <div className="absolute inset-0        flex items-center justify-center">
            <h1 className="text-white text-xl sm:text-4xl  font-bold font-[Montserrat]">
              NFT Development
            </h1>
          </div>
        </div>
        <section className="mx-auto container">
          <div className="p-4 md:flex   md:space-x-8 py-10">
            <div className="  mb-8 md:w-[80%] md:mb-0">
              <img
                src={img1}
                alt="nftdevelopment"
                className="w-full rounded-lg max-h-[800px] object-cover"
              />
              <h3 className="text-3xl mt-8 font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                NFT Development
              </h3>
              <p className="text-gray-700 mb-4 text-balance font-[Montserrat]">
                NFT (Non-Fungible Token) development has rapidly gained
                traction, revolutionizing various industries with its innovative
                potential. NFTs leverage blockchain technology to provide a
                secure and transparent framework for creating, managing, and
                trading unique digital assets through smart contracts. As a
                result, NFTs have evolved beyond simple tokenization to
                encompass dynamic marketplaces, where digital art, virtual real
                estate, and collectibles are traded with confidence. In this
                article, we explore how NFT development is transforming
                industries, the underlying technology, and the potential future
                implications of this digital phenomenon.
              </p>
            </div>

            <AllServices />
          </div>

          <div className=" grid lg:grid-cols-2 grid-cols-1  px-4 ">
            <div className="mt-4 rounded-xl   overflow-hidden flex justify-center items-center ">
              <img
                src={img2}
                alt="nftdevelopment"
                className="w-full max-w-[600px] rounded-lg max-h-[500px] h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>
            <div className="lg:ml-10   bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8 ">
              <h4 className="text-3xl  font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                {" "}
                NFT Development :
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    {" "}
                    Comprehensive loyalty solution.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Fully automated personalized offer capabilites.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    {" "}
                    Loyalty subject matter experts.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">Deep analytics expertise.</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Putting zero-party and first-party data to work.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Agile technology plateform.built for speed and change.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">Modular plateform.</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Flexible support model and payment structures.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:mt-10 lg:grid lg:grid-cols-2 grid-cols-1  px-4 ">
            <div className=" sm:mt-8 bg-gray-100 px-4 mt-8 py-4 rounded-lg">
              <h3 className="text-3xl  font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                NFT Development Life Cycle Model :-
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]"> Conceptualization</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    {" "}
                    Design and Artwork Creation{" "}
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    Smart Contract Development
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Blockchain Integration</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    Metadata and Data Management
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    Testing and Security Audits
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Deployment</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Listing on Marketplaces</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Marketing and Promotion</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    Post-Launch Support and Updates
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-10 rounded-xl   overflow-hidden flex justify-center items-center ">
              <img
                src={img3}
                alt="nft development"
                className="w-full max-w-[500px] rounded-lg max-h-[500px] h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default NFTDevelopment;
