import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import img from "../../../assets/digital.jpeg";

import img2 from "../../../assets/media3.mp4";
import img3 from "../../../assets/media1.jpeg";
import img4 from "../../../assets/media2.png";
import Footer from "../Footer";
import AllServices from "../../AllServices";

const SocailMarketing = () => {
  return (
    <div>
      <div className="relative ">
        <div className="shadow-lg overflow-hidden  ">
          <img
            src={img}
            alt=" social marketing"
            className=" max-w-[180rem]     w-full h-52 xl:h-[400px] max-h-[400px]"
          />
        </div>
        <div className="absolute inset-0        flex items-center justify-center"></div>
      </div>

      <section className="mx-auto container">
        <div className="p-4 md:flex   md:space-x-8 py-10">
          <div className="  mb-8 md:w-[80%] md:mb-0">
            <img
              src={img3}
              alt="social marketing"
              className="w-full rounded-lg max-h-[800px] object-cover"
            />
            <h3 className="text-3xl mt-8 font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
              Social Media Marketing
            </h3>
            <p className="text-gray-700 mb-4 text-balance font-[Montserrat]">
              Build a strong online presence and foster engagement through
              strategic social media marketing. We develop tailored content that
              resonates with your target audience across platforms like
              Facebook, Instagram, LinkedIn, and Twitter. Our team manages your
              social media accounts, creating a consistent brand voice and
              interacting with followers to build a loyal community. We also
              leverage analytics to track engagement and refine our strategies,
              ensuring your social media efforts drive meaningful connections
              and conversions.
            </p>
          </div>
          <AllServices />
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 px-4">
          <div className="mt-10 rounded-xl   overflow-hidden flex justify-center items-center ">
            <video
              src={img2}
              alt="social marketing"
              className="   w-full max-w-[600px] rounded-lg max-h-[500px]  transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
            />
          </div>
          <div className="lg:ml-10   bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8 ">
            <h4 className="text-3xl   font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
              Enhance Your Brand with a Successful Social Media Campaign :-
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68] ">
                    Set clear goals:-
                  </p>
                  <p>
                    Define specific goals for your social media campaign. Do you
                    want to increase brand awareness, drive engagement, or
                    increase sales? Clear goals help guide strategy and measure
                    success.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="  text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68] ">
                    Understand Your Audience:-
                  </p>
                  <p>
                    Get to know your target audience well. Use demographic,
                    psychographic and behavioral data to understand what they
                    like, how they interact and where they are active.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="  text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68] ">
                    Develop a Content Calendar:-
                  </p>
                  <p>
                    Plan and schedule your posts using a content calendar. This
                    helps maintain consistency and order in sharing content, and
                    allows you to prepare your campaigns better and be more
                    organised.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="  text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68] ">
                    Monitor and Engage:-
                  </p>
                  <p>
                    Regularly monitor your campaign performance and interact
                    with your audience. Respond to comments, reply to messages,
                    and engage your audience in discussions. Active interactions
                    help build strong relationships and increase trust in your
                    brand.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:mt-10 lg:grid lg:grid-cols-2 grid-cols-1  px-4 ">
          <div className="   bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8 ">
            <h4 className="text-3xl font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
              {" "}
              Social Media Audit & Strategy :-
            </h4>
            <ul className="space-y-3">
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="  text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat]  font-bold text-xl text-[#1B3D68] ">
                    Unique Content and Promotion :-
                  </p>
                  <p>
                    Unique content refers to original, valuable material that
                    stands out, while promotion involves effectively sharing it
                    across platforms to engage audiences, boost visibility, and
                    drive growth for businesses or brands.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="  text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat]  font-bold text-xl text-[#1B3D68] ">
                    Multi-Channel Integration :-
                  </p>
                  <p>
                    {" "}
                    Multi-channel integration connects various communication
                    platforms, such as social media, email, and websites, to
                    create a seamless experience, ensuring consistent messaging
                    and engagement across all customer touchpoints.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="  text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat]  font-bold text-xl text-[#1B3D68] ">
                    Social Media Advertising :-
                  </p>
                  <p>
                    Social media advertising involves creating paid ads on
                    platforms like Facebook, Instagram, and Twitter to target
                    specific audiences, boost brand visibility, drive traffic,
                    and increase sales or engagement.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="  text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat]  font-bold text-xl text-[#1B3D68] ">
                    Social Listing Monitoring :-
                  </p>
                  <p>
                    Social listening and monitoring track online conversations
                    and mentions about a brand, product, or industry, helping
                    businesses analyze sentiment, gather insights, and respond
                    to customer feedback or trends in real-time.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div>
                  <IoIosCheckmarkCircleOutline
                    size={30}
                    className="  text-blue-500  "
                  />
                </div>
                <div>
                  <p className="font-[Montserrat]  font-bold text-xl text-[#1B3D68] ">
                    Tracking and Reporting :-
                  </p>
                  <p>
                    Tracking and reporting involve collecting data on key
                    performance metrics, analyzing results, and generating
                    reports to measure progress, optimize strategies, and make
                    informed decisions for business growth and improvement.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-4 rounded-xl   overflow-hidden flex justify-center items-center ">
            <img
              src={img4}
              alt="social marketing"
              className="lg:ml-10 w-full max-w-[600px] rounded-lg max-h-[500px] h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SocailMarketing;
