import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import img from "../../../assets/digital.jpeg";
import img1 from "../../../assets/email1.jpeg";
import img2 from "../../../assets/email1_2.jpeg";
import img3 from "../../../assets/email2_1.gif";
import Footer from "../Footer";
import AllServices from "../../AllServices";

const CheckmarkItem = ({ title, description }) => (
  <li className="flex gap-4">
    <IoIosCheckmarkCircleOutline size={30} className="text-blue-500" />
    <div>
      <p className="font-[Montserrat] font-bold text-xl">{title}</p>
      <p>{description}</p>
    </div>
  </li>
);

const SectionHeader = ({ title }) => (
  <h3 className="text-3xl font-semibold text-[#1B3D68] mt-8 font-[Montserrat] mb-4">
    {title}
  </h3>
);

const EmailMarketing = () => {
  return (
    <>
      <div>
        <div className="overflow-hidden shadow-lg ">
          <img
            src={img}
            alt="email marketing"
            className=" max-w-[180rem] w-full xl:h-[400px]  max-h-[400px] h-52"
          />
        </div>

        <section className="container p-4 py-10 mx-auto">
          <div className="md:flex md:space-x-8">
            <div className="md:w-[80%]">
              <img
                src={img1}
                alt="email marketing"
                className="w-full rounded-lg max-h-[800px] object-cover"
              />
              <SectionHeader title="Email Marketing" />
              <p className="text-gray-700 mb-4 font-[Montserrat]">
                Nurture leads and maintain strong customer relationships with
                personalized email marketing campaigns. We create targeted email
                lists based on customer behavior and preferences, ensuring your
                messages reach those most likely to engage. Our team designs
                visually appealing emails that convey your brand’s message
                effectively, whether for promotions, newsletters, or product
                updates. By analyzing open rates, click-through rates, and
                conversions, we continuously refine our strategies to maximize
                engagement and ROI.
              </p>
            </div>
            <AllServices />
          </div>

          <div className="grid grid-cols-1 gap-8 px-4 mt-10 lg:grid-cols-2">
            <div className="flex items-center justify-center">
              <img
                src={img3}
                alt="email marketing"
                className="w-full max-w-[600px] rounded-lg object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
              />
            </div>
            <div className="p-6 bg-gray-100 rounded-lg">
              <SectionHeader title="Different ways to grow your Email list :-" />
              <ul className="space-y-6">
                <CheckmarkItem
                  title="Crafting Irresistible Lead Magnets:-"
                  description="From eBooks to exclusive content, discover the types of incentives that will have people eagerly joining your email list."
                />
                <CheckmarkItem
                  title="Optimizing Landing Pages for Conversions:-"
                  description="Uncover the secrets to designing landing pages that convert visitors into subscribers."
                />
                <CheckmarkItem
                  title="Engaging Email Campaigns for Retention:-"
                  description="Explore the anatomy of compelling email campaigns that not only retain your current audience but also encourage them to share your content."
                />
                <CheckmarkItem
                  title="Opt-in Contests and Giveaways:-"
                  description="Learn how to structure and promote these events to attract participants and convert them into long-term subscribers."
                />
                <CheckmarkItem
                  title="Referral Programs that Multiply Your List:-"
                  description="Delve into the mechanics of setting up and promoting referral systems that encourage your current subscribers to bring in like-minded individuals."
                />
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 px-4 mt-10 lg:grid-cols-2">
            <div className="p-6 bg-gray-100 rounded-lg">
              <SectionHeader title="Email Marketing strategies that are proven to work :-" />
              <ul className="space-y-6">
                <CheckmarkItem
                  title="Make your email campaigns more interactive :-"
                  description="Static content works only 70% of the time; interactive emails can significantly boost engagement and conversions."
                />
                <CheckmarkItem
                  title="Personalize your marketing emails :-"
                  description="Welcome emails can boost revenue by 320% compared to other promotional emails."
                />
                <CheckmarkItem
                  title="Follow up with your leads :-"
                  description="Ensure follow-ups to capture leads who may miss the first email, increasing overall engagement."
                />
                <CheckmarkItem
                  title="Send welcome emails to new subscribers :-"
                  description="Campaign Monitor data shows that conversions increase by 10% and click-through rates by 14% when welcome emails are personalized."
                />
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={img2}
                alt="email marketing"
                className="w-full max-w-[600px] rounded-lg object-cover transition-transform duration-300 hover:scale-105 hover:brightness-110"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default EmailMarketing;
