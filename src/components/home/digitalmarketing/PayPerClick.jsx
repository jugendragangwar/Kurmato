import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import img from "../../../assets/digital.jpeg";
import img1 from "../../../assets/ppc.jpeg";
import img2 from "../../../assets/ppc1.jpeg";
import img3 from "../../../assets/ppc2.jpeg";
import Footer from "../Footer";
import AllServices from "../../AllServices";

const PayPerClick = () => {
  const checkmarkItems = [
    {
      title: "Goal Setting",
      description:
        "Define your campaign goal—awareness, engagement, or conversions (sales, job applicants, sign-ups).",
    },
    {
      title: "Audience Targeting",
      description:
        "Specify your target audience—families, veterans, sales directors—balancing specificity and reach.",
    },
    {
      title: "Ad Creation",
      description:
        "Produce compelling images or videos with engaging copy that reflects your brand and meets platform guidelines.",
    },
    {
      title: "Budgeting",
      description:
        "Set a competitive budget based on desired outcomes, company resources, and performance monitoring.",
    },
    {
      title: "Experimentation",
      description:
        "Allocate a small budget to test various ad types and platforms to optimize performance.",
    },
    {
      title: "Monitoring and Adaptation",
      description:
        "Regularly monitor ad performance to adjust future campaigns based on insights gained.",
    },
  ];

  const metricsItems = [
    {
      title: "Impressions",
      description: "The number of times your ad was displayed to users.",
    },
    {
      title: "Click-Through Rate (CTR)",
      description:
        "Percentage of people who clicked on your ad after seeing it.",
    },
    {
      title: "Cost Per Click (CPC)",
      description: "The average amount you pay for each click on your ad.",
    },
    {
      title: "Return on Ad Spend (ROAS)",
      description:
        "Revenue generated for every dollar spent on the ad campaign.",
    },
    {
      title: "Engagement",
      description: "Interaction metrics like likes, shares, and comments.",
    },
  ];

  const RenderCheckmarkList = ({ items }) => (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex gap-4">
          <IoIosCheckmarkCircleOutline size={30} className="text-blue-500" />
          <div>
            <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
              {item.title} :-
            </p>
            <p>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      <div className="relative shadow-lg overflow-hidden">
        <img
          src={img}
          alt="pay per click"
          className="w-full xl:h-[400px] h-52"
        />
      </div>

      <section className="container mx-auto p-4 py-10">
        <div className="md:flex md:space-x-8">
          <div className="md:w-[80%] mb-8 md:mb-0">
            <img
              src={img2}
              alt="pay per click"
              className="w-full rounded-lg max-h-[800px] object-cover"
            />
            <h3 className="text-3xl mt-8 font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
              Pay Per Click
            </h3>
            <p className="text-gray-700 mb-4 font-[Montserrat]">
              Maximize your return on investment with highly targeted PPC
              campaigns that deliver immediate results. Our approach begins with
              comprehensive market research to identify your ideal audience. We
              craft compelling ad copy and design eye-catching visuals that
              drive clicks and conversions. Our ongoing analysis of campaign
              performance allows us to optimize bids, targeting, and ad
              placements, ensuring your ads reach the right people at the right
              time, all while staying within budget.
            </p>
          </div>
          <AllServices />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 px-4">
          <div className="flex justify-center items-center">
            <img
              src={img1}
              alt="pay per click"
              className="w-full max-w-[600px] rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-3xl font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
              Creating Effective Paid Social Campaigns :-
            </h4>
            <RenderCheckmarkList items={checkmarkItems} />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 px-4 mt-10">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-3xl font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
              Ad Campaign Metrics
            </h4>
            <RenderCheckmarkList items={metricsItems} />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={img3}
              alt="pay per click"
              className="w-full max-w-[600px] rounded-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PayPerClick;
