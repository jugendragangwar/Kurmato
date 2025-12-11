import { useState, useEffect } from "react";
import img4 from "../../assets/Mobileapp3.png";
import img3 from "../../assets/Mobileapp2.png";
import Platform from "../home/card/Platform.jsx";
import DevelopmentCycle from "./developmentCycle/DevelopmentCycle";
import CreativeWorks from "./createive works/CreativeWorks";
import UserExperience from "./userexperience/UserExperience";
import Footer from "./Footer";
import Catetory from "./paralllaxmotion/catetory.js";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      img: img3,
      title: "Mobile App & Web Development",
      text: "Innovative mobile app and web development solutions to bring your vision to life across all platforms.",
      paragraph: "Developer Options enable enhanced control.",
    },
    {
      img: img4,
      title: "Custom Data Visualization Solutions",
      text: "Transform data into actionable insights with clear, interactive visual stories for strategic decision-making.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  return (
    <>
      <div className="relative  w-full" data-carousel="slide">
        <div className="relative h-64 overflow-hidden  sm:h-[29rem] flex items-center justify-between">
          {items.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-700 ease-in-out flex items-center justify-center ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              } ${
                index === 2
                  ? "bg-gradient-to-r from-blue-100 via-purple-300 to-blue-300 animate-gradient-x"
                  : "bg-gradient-to-l from-blue-100 via-purple-200 to-blue-200 animate-gradient-x"
              }`}
            >
              <div className="flex flex-row w-full h-full items-center">
                <div className="w-full md:w-1/2 sm:px-20 ml-4">
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-bold bg-gradient-to-r from-[#1B3D68]  to-purple-600 bg-clip-text text-transparent font-[Montserrat]">
                    {item.title}
                  </h2>
                  <h2 className="text-sm sm:text-lg md:text-xl mt-4 font-[Montserrat]">
                    {item.text}
                  </h2>
                </div>

                <div className="w-full mr-2 flex justify-center mt-6 md:w-1/2 h-full">
                  <img
                    src={item.img}
                    className={`w-auto text-center h-auto ${
                      index === 1
                        ? "sm:h-[520px]   "
                        : index === 2
                        ? "h-48 sm:mt-8 mt-4 sm:h-[350px] "
                        : "sm:mt-4 xl:mt-10   sm:h-[400px]"
                    }`}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Catetory />
      <Platform />
      <DevelopmentCycle />
      <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3">
        <CreativeWorks />
      </div>
      <UserExperience />
      <Footer />
    </>
  );
};

export default Home;
