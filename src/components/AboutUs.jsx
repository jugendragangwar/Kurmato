import React from "react";
import about from "../assets/about.jpeg";
import Footer from "./home/Footer";
import logo from "../assets/aboutUs.png";
const AboutUs = () => {
  const strengths = [
    {
      title: "Quality",
      description:
        "Kurmato is well known for the superior quality of services provided. Our clients always leave with more than when they came in!",
    },
    {
      title: "People",
      description:
        "Our team is an eclectic group of seasoned creatives, geeks, and technocrats with years of coming together to make the powerhouse that is Kurmato.",
    },
    {
      title: "Value",
      description:
        "We are strategic in our approach, reinforced by knowledge and experience. Our methods, refined over many projects, ensures we deliver the highest value.",
    },
    {
      title: "Clients",
      description:
        "Our clients come in all shapes and sizes, from small enterprises to global organizations. We consistently deliver satisfying results suited to their needs.",
    },
    {
      title: "Customize",
      description:
        "We understand that every company has its own goal and vision. We provide customizable solutions that are unique to your needs.",
    },
    {
      title: "Customer Support",
      description:
        "Our service does not end at the end of the project, we promise to continue to support you through our 24*7 customer support.",
    },
  ];

  return (
    <>
      <div className=" mx-auto">
        <div className=" relative shadow-lg overflow-hidden ">
          <img
            src={logo}
            alt="about"
            className="w-full xl:h-[400px] max-h-[400px] h-52"
          />
        </div>
        <div className="relative sm:flex gap-6 sm:mt-10 mt-4 sm:p-10">
          <div className="relative sm:w-[70vw] w-full p-6">
            <img
              src={about}
              alt="About Us"
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>

          <div className="sm:absolute sm:mt-14 right-10 sm:w-[60vw] sm:h-auto p-6 bg-white shadow-2xl rounded-2xl m-4">
            <p className="mb-4 text-[#1B3D68] font-[Montserrat]">
              At Kurmato Private Limited, we are at the vanguard (Cutting Edge)
              of software development, adeptly harnessing avant-garde
              technologies to cater to a diverse array of industries. Our
              specialization spans Exchange platforms, the Metaverse, Game
              Development, and Non-Fungible Tokens (NFTs), where we engineer
              groundbreaking and profoundly immersive experiences that push the
              frontiers of technological innovation.
            </p>
            <p className="text-[#1B3D68] font-[Montserrat] mb-4">
              Our mission is to catalyze transformative shifts within the
              industry by delivering excellent services and cultivating
              enduring, impactful relationships with our clients. We champion a
              collaborative ethos, relentlessly striving to surpass expectations
              and set new benchmarks of excellence.
            </p>
            <p className="text-[#1B3D68] font-[Montserrat]">
              By fusing cutting-edge solutions with visionary strategies,
              Kurmato Private Limited is firmly committed to steering the
              evolution of technological advancement and reshaping the landscape
              of digital experiences with unparalleled creativity and foresight.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="">
          <h2 className="text-3xl font-bold text-[#1B3D68]   flex justify-center underline font-[Montserrat] mb-4">
            Our Strengths
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 space-y-8 sm:space-y-0  justify-center sm:gap-8 p-4">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white shadow-[4px_4px_8px_10px_rgba(0,0,0,0.1)] rounded-xl w-full sm:w-[300px] h-auto items-center p-6"
              >
                <h3 className="text-xl font-bold text-[#1B3D68] font-[Montserrat]">
                  {strength.title}
                </h3>
                <p className="font-[Montserrat]">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
