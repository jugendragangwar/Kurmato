import Footer from "../Footer";
import img from "../../../assets/digital.jpeg";
import img1 from "../../../assets/seo.jpeg";
import img2 from "../../../assets/seo1.png";
import img3 from "../../../assets/seo2.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import AllServices from "../../AllServices";

const SearchEngine = () => {
  return (
    <>
      <div className="  mx-auto  ">
        <div className="relative ">
          <div className="shadow-lg overflow-hidden  ">
            <img
              src={img}
              alt="search engine optimization"
              className=" max-w-[180rem] w-full xl:h-[400px]  max-h-[400px] h-52"
            />
          </div>
        </div>

        <section className="mx-auto container">
          <div className="p-4 md:flex   md:space-x-8 py-10">
            <div className="  mb-8 md:w-[80%] md:mb-0">
              <img
                src={img1}
                alt="search engine optimization"
                className="w-full rounded-lg max-h-[800px] object-cover"
              />
              <h3 className="text-3xl mt-8 font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                Search Engine Optimization
              </h3>
              <p className="text-gray-700 mb-4 text-balance font-[Montserrat]">
                Search engines increasingly prioritize websites that offer a
                seamless and positive user experience. Search algorithms
                prioritize high-quality, relevant, and comprehensive content.
                Search engines now consider Core Web Vitals (e.g., loading
                speed, interactivity, and visual stability) as ranking factors.
                Video content continues to gain prominence in search results.
                The increasing prevalence of voice-activated search queries.
                Search engines are using AI and machine learning for more
                personalized and accurate search results.
              </p>
              <p className="text-gray-700 mb-4 text-balance font-[Montserrat]">
                Enhance your online visibility and attract organic traffic with
                our robust SEO strategies. We conduct in-depth keyword research
                to identify the terms your audience is searching for. Our
                on-page optimization techniques improve your website’s structure
                and content, making it more search-engine friendly. We also
                focus on building high-quality backlinks, which boosts your
                site’s authority and ranking. With our continuous monitoring and
                adjustments, you’ll see lasting improvements in your search
                engine visibility.
              </p>
              <p className="text-gray-700 mb-4 text-balance font-[Montserrat]">
                Search engines now consider Core Web Vitals (e.g., loading
                speed, interactivity, and visual stability) as ranking factors.
                Video content continues to gain prominence in search results.
                The increasing prevalence of voice-activated search queries.
                Search engines are using AI and machine learning for more
                personalized and accurate search results.
              </p>
            </div>

            <AllServices />
          </div>

          <div className=" grid lg:grid-cols-2 grid-cols-1  px-4 ">
            <div className="mt-4 rounded-xl   overflow-hidden flex justify-center items-center ">
              <img
                src={img2}
                alt="search engine optimization"
                className="w-full max-w-[500px] rounded-lg max-h-[400px] h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>
            <div className="lg:ml-10   bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8 ">
              <h4 className="text-3xl    font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                Why You Need SEO for Your Website ?
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]   ">
                      You aren't targeting the right keywords:-
                    </p>
                    <p>
                      Take a look at the latest search trends in your industry
                      every so often so you don't miss out on valuable search
                      traffic.
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      Search engines may have difficulty crawling your website:-
                    </p>
                    <p>
                      A sitemap is essential for SEO. Sitemaps help search
                      engine bots better crawl your site and reduce the risk of
                      overlooking parts of it.
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      {" "}
                      You're Wasting Page Rank Opportunities:-
                    </p>
                    <p>
                      Internal links help your site visitors navigate your
                      website efficiently and pass page rank along to valuable
                      pages like product or service pages.
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      Rankings disappeared after a website redesign:-
                    </p>
                    <p>
                      Have you recently relaunched your website It is best to
                      create a 301 redirect so that you don't lose traffic and
                      value from those old pages.
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      The Site Is Slow and Doesn't Rank:-
                    </p>
                    <p>
                      Visitors will leave if your site is slow. The search
                      engines do not like slow loading sites either, which is
                      actually a ranking factor
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:mt-10 lg:grid lg:grid-cols-2 grid-cols-1  px-4 ">
            <div className="    bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8 ">
              <h3 className="text-3xl    font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                Basic SEO techniques to improve your website’s visibility and
                ranking in search engines :-
              </h3>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <div>
                    <IoIosCheckmarkCircleOutline
                      size={30}
                      className="  text-blue-500  "
                    />
                  </div>
                  <div>
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      {" "}
                      Keyword Research:-
                    </p>
                    <p>
                      Identify target keywords: Use tools like Google Keyword
                      Planner or Ahrefs to find relevant keywords that your
                      audience is searching for.
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      {" "}
                      On-Page Optimization:-
                    </p>
                    <p>
                      Title tags: Include your main keyword in the title tag of
                      each page, keeping it under 60 characters.
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      {" "}
                      Quality Content Creation :-
                    </p>
                    <p>
                      Create valuable content: Focus on creating high-quality,
                      relevant content that answers users' questions or solves
                      their problems.
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      {" "}
                      Optimize for Mobile :-
                    </p>
                    <p>
                      Mobile-friendly design: Ensure your website is responsive
                      and works well on mobile devices, as Google uses
                      mobile-first indexing.
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
                    <p className="font-[Montserrat] font-bold text-xl text-[#1B3D68]">
                      Internal Linking :-
                    </p>
                    <p>
                      Link between related pages: Add internal links from one
                      page to another to help users and search engines discover
                      your content.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="mt-10 rounded-xl   overflow-hidden flex justify-center items-center ">
              <img
                src={img3}
                alt="search engine optimization"
                className=" sm:ml-10   w-full max-w-[600px] rounded-lg max-h-[500px]  transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SearchEngine;
