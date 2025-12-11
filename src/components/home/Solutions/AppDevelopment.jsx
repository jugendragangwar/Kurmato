import { CiCircleCheck } from "react-icons/ci";
import Footer from "../Footer";
import img from "../../../assets/appdevelopment4.jpeg";
import img1 from "../../../assets/appdev.png";
import img2 from "../../../assets/app2.jpeg";
import img3 from "../../../assets/appdevelop1.png";
import img4 from "../../../assets/Fitnessgym.jpeg";
import img5 from "../../../assets/app4.jpeg";
import img6 from "../../../assets/Crypt.jpeg";
import img7 from "../../../assets/Taxi.png";
import img12 from "../../../assets/Realstat.jpeg";

import img9 from "../../../assets/healthcare.jpeg";
import img10 from "../../../assets/crm.jpeg";
import img11 from "../../../assets/agriculture.jpeg";
import img8 from "../../../assets/supplychain.jpeg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import AllServices from "../../AllServices";

const industries = [
  {
    name: "Food",
    image: img2,
    title: "Streamlined Food Delivery Solution for Hotels & Restaurants",
    description:
      "Revolutionize your operations with our advanced Food Delivery Application and Dashboard. Manage orders, track deliveries, and monitor inventory in real time through an intuitive interface. Easily update menus, prices, and offers while providing secure payment options. Gain actionable insights with detailed reports to optimize sales and enhance customer satisfaction. Designed to simplify workflows, boost efficiency, and drive growth, our solution ensures seamless management for dine-in, takeaway, and delivery services. Empower your business with a cutting-edge platform tailored to the competitive food service industry.",
  },
  {
    name: "Healthcare & Wellness",
    image: img9,
    title: "Innovative Healthcare & Wellness Management Solution",
    description:
      "Elevate your healthcare and wellness services with our comprehensive Management Application and Dashboard. Streamline patient appointments, manage records, and track wellness programs effortlessly through an intuitive interface. Enable secure payments, monitor inventory, and access insightful reports to optimize operations and enhance client care. Designed to meet the demands of modern healthcare and wellness centers, our solution ensures seamless workflows, improved efficiency, and personalized service delivery. Empower your practice with a platform that supports growth, operational excellence, and better client outcomes.",
  },
  {
    name: "Fitness and Gym",
    image: img4,
    title: "Revolutionize Your Fitness Center with Smart Gym Management",
    description:
      "Transform your fitness center with our cutting-edge Gym Management Application and Dashboard. Simplify member registrations, class schedules, and subscription tracking with ease. Monitor attendance, manage trainers, and offer secure payment options, all from one intuitive platform. Gain actionable insights into member activity, revenue, and operational performance through advanced reporting tools. Designed to boost efficiency, enhance member engagement, and streamline gym workflows, our solution empowers fitness centers to deliver exceptional experiences.",
  },
  {
    name: "Crypto & BlockChain",
    image: img6,
    title: "Empower Your Business with Advanced Crypto & Blockchain Solutions",
    description:
      "Leverage the power of blockchain with our innovative Crypto Management Application and Dashboard. Simplify wallet management, secure transactions, and enable seamless crypto-to-fiat conversions. Track real-time market trends, monitor trading activity, and ensure compliance with intuitive tools. Designed for scalability and security, our solution supports P2P transactions, spot trading, and portfolio management. Gain actionable insights through robust analytics to make data-driven decisions. Perfect for businesses embracing the future of decentralized finance. Transform your operations with cutting-edge blockchain technology.",
  },
  {
    name: "Supply Chain and Logistics",
    image: img8,
    title: "Elevate Your Supply Chain with Smart Logistics Solutions",
    description:
      "Optimize your supply chain operations with our innovative Logistics and Supply Chain Management Application. From inventory tracking to real-time shipment monitoring, our solution simplifies every aspect of logistics management. Seamlessly manage orders, streamline delivery schedules, and gain actionable insights through advanced analytics and reporting. With features like route optimization, fleet tracking, and automated workflows, our platform enhances operational efficiency, reduces costs, and ensures timely deliveries. Designed for businesses of all sizes, our solution empowers you to meet customer demands, improve supply chain visibility, and drive growth in a competitive market.",
  },
  {
    name: "Gaming & Entertainment",
    image: img5,
    title: "Advanced Gaming & Entertainment Solutions",
    description:
      "Enhance user engagement with our innovative Gaming and Entertainment Management Application and Dashboard. Manage game content, track player activity, and enable seamless in-app purchases with a secure and intuitive platform. Streamline operations, analyze user behavior, and optimize monetization strategies with advanced analytics and reporting tools. Designed for modern gaming and entertainment platforms, our solution ensures immersive experiences, operational efficiency, and audience growth. Take your gaming and entertainment platform to the next level.",
  },
  {
    name: " CRM Software",
    image: img10,
    title: "Boost Business Efficiency with Advanced CRM Software.",
    description:
      "Revolutionize customer relationship management with our powerful CRM Application and Dashboard. Simplify lead tracking, automate sales pipelines, and enhance customer support all through an intuitive, centralized platform. Monitor real-time metrics, gain actionable insights, and improve team productivity with advanced analytics and reporting tools. Tailored for businesses of all sizes, our solution streamlines workflows, drives customer satisfaction, and boosts revenue growth. Transform your business with a smarter, more efficient CRM solutions.",
  },
  {
    name: " Real-Estate & Property Management",
    image: img12,
    title: "Property Management with Advanced Real Estate Solutions",
    description:
      "Optimize your real estate operations with our cutting-edge Property Management Application and Dashboard. Manage property listings, track leads, and schedule viewings effortlessly through an intuitive interface. Monitor transactions, handle client inquiries, and generate insightful reports to make data-driven decisions. Designed for real estate professionals, our solution streamlines workflows, boosts efficiency, and enhances client satisfaction. Empower your real estate business with smarter, seamless property management.",
  },
  {
    name: "Agriculture and Farmer",
    image: img11,
    title: "Revolutionize Agriculture with Smart Farming Solutions",
    description:
      "Empower farmers and agribusinesses with our innovative Agriculture Management Application and Dashboard. Track crop cycles, monitor resources, and optimize supply chains with ease. Enable real-time market insights, manage inventory, and facilitate secure transactions to boost productivity and profitability. Tailored for modern agriculture, our solution streamlines farm operations, enhances decision-making, and supports sustainable growth. Transform farming practices with technology-driven solutions.",
  },
  {
    name: "Transportation and Logistics",
    image: img7,
    title:
      "Transform Your Ride-Hailing Business with Innovative Taxi Solutions",
    description:
      "Revolutionise your transportation platform with our advanced Ride-Hailing and Fleet Management Application, designed to deliver seamless ride-booking, real-time tracking, and secure payment integration. Our solution effortlessly matches riders with nearby drivers, ensures quick pickups with optimized routes, and provides instant fare estimates. With multiple payment options like wallets, credit cards, and cash on delivery, your customers can enjoy a hassle-free experience. The platform also empowers you to monitor driver performance, track ratings, and access insightful reports to optimize fleet management and operations. Designed for scalability and efficiency, our solution boosts customer satisfaction and drives business growth, helping you stay ahead in the competitive transportation industry.",
  },
];

const AppDevelopment = ({ ref }) => {
  const [currentImage, setCurrentImage] = useState(industries[0].image);
  const [correntTitle, setCurrentTitle] = useState(industries[0].title);
  const [currentDescription, setCurrentDescription] = useState(
    industries[0].description
  );
  const handleImageChange = (image, title, description) => {
    setCurrentImage(image);
    setCurrentTitle(title);
    setCurrentDescription(description);
  };

  const { inView } = useInView({ threshold: 0.9 });

  const [isVisible, setIsVisible] = useState({ left: false, right: false });
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              setIsVisible((prev) => ({ ...prev, left: true }));
            }
            if (entry.target === rightRef.current) {
              setIsVisible((prev) => ({ ...prev, right: true }));
            }
          }
        });
      },
      { threshold: 0.9 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, []);

  return (
    <>
      <div className=" ">
        <div className="relative ">
          <div className="shadow-lg overflow-hidden  ">
            <img
              src={img}
              alt=" app development"
              className="w-full xl:h-[400px] max-h-[400px] h-52"
            />
          </div>
        </div>
        <section className="mx-auto container">
          <div className="p-4 md:flex   md:space-x-8 py-10">
            <div className="  mb-8 md:w-[80%] md:mb-0">
              <div className="shadow-lg overflow-hidden">
                <img
                  src={img1}
                  alt="app development"
                  className="w-full rounded-lg max-h-[800px] object-cover"
                />
              </div>
              <h2 className="text-3xl mt-8 font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                Mobile App Development
              </h2>
              <p className="text-gray-700 mb-4 text-balance font-[Montserrat]">
                At Kurmato, we specialize in mobile app development that
                empowers businesses to thrive in the digital era. Leveraging
                cutting-edge technologies and innovative solutions, we create
                high-performing, scalable, and user-friendly apps tailored to
                meet your unique needs. Whether you're seeking to build
                customer-centric mobile apps, enterprise solutions, or
                cross-platform applications, our team is equipped to deliver
                exceptional, seamless experiences. From intuitive user
                interfaces (UI) to robust back-end integration, we ensure that
                each app exceeds user expectations and aligns with your business
                objectives.
              </p>
            </div>

            <AllServices />
          </div>

          <div className=" grid md:grid-cols-2 grid-cols-1  px-4 ">
            <div className="mt-10 h-full relative flex justify-center">
              <section
                ref={ref}
                className="relative z-10 transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15 transition-all duration-300 ease-in-out"
              >
                <motion.img
                  src={img3}
                  className="h-[500px] block  fadeInLeft "
                  alt="app development"
                  initial={{ x: 10, opacity: 0 }}
                  transition={{
                    x: { duration: 0.8, ease: "easeOut" },
                    opacity: { duration: 0.8, ease: "easeOut" },
                    rotate: { duration: 0.8, ease: "easeInOut" },
                  }}
                />
              </section>
            </div>

            <div className="md:ml-10 bg-gray-100 px-4 py-4 mt-8 sm:mt-8 rounded-lg">
              <h4 className="text-3xl     text-[#1B3D68] font-bold  font-[Montserrat] mb-4">
                Why Do We Need App Development ?
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Reach a wider audience through mobile-first engagement.
                  </p>
                  <p></p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Enhance user experience with personalized features.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Improve business efficiency and streamline processes.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Stay competitive in a technology-driven market.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Enable direct communication with customers.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Offer new revenue channels via in-app purchases or
                    subscriptions.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Improve brand visibility and recognition.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Gather valuable data and insights for business growth.
                  </p>
                </li>
                <h2 className="text-xl text-[#1B3D68] font-bold  font-[Montserrat]">
                  Our Expertise Includes:
                </h2>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Native, Kotlin, & Hybrid App Development
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    iOS & Android App Development
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">Cross-Platform Solutions</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Strengthens brand presence and recognition in the
                    fast-evolving digital ecosystem.{" "}
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <section className="py-12 px-6 space-y-4 gap-4">
            <div className=" mx-auto text-center bg-gray-100 px-4 py-4">
              <h2 className="text-3xl  font-bold text-gray-800 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 mb-8  ">
                Explore the diverse industries we cater to with tailored
                solutions designed to empower your business.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {industries.map((industry, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      handleImageChange(
                        industry.image,
                        industry.title,
                        industry.description
                      )
                    }
                    className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-all duration-500 hover:bg-[#139898] ease-in-out hover:text-white"
                  >
                    <h3 className="text-sm font-semibold">{industry.name}</h3>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 lg:flex lg:flex-row">
              <div className="rounded-xl overflow-hidden lg:w-1/2 flex justify-center items-center">
                <img
                  src={currentImage}
                  alt="Industry"
                  className="w-full max-w-[800px] rounded-lg max-h-[600px] object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
                />
              </div>
              <div className="lg:w-1/2 mx-auto lg:px-6">
                <div className="mt-4 py-4 p-4">
                  <h5 className="lg:text-4xl  text-2xl text-center  font-semibold text-[#1B3D68] font-sans   animate-fade-in-up">
                    {correntTitle}
                  </h5>
                  <h4 className="text-xl py-2  text-gray-800  overflow-hidden leading-9 animate-fade-in">
                    {currentDescription}
                  </h4>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AppDevelopment;
