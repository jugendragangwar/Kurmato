import React from "react";
import { Link } from "react-router-dom";
import Footer from "./home/Footer";
import JobOpenings from "./JobOpenings";
import join from "../assets/join.png";
const RecruitmentProcess = () => {
  return (
    <>
      <div className="  mx-auto  ">
        <div className="relative shadow-lg overflow-hidden   ">
          <img
            src={join}
            alt="join family"
            className="object-cover w-full xl:h-[400px] max-h-[400px]"
          />
        </div>

        <div className="py-8 px-6 bg-white shadow-lg max-w-4xl mt-6 mx-auto">
          <div className=" ">
            <p className="lg:text-4xl text-2xl text-[#30a5a5] font-[Montserrat] text-balance mb-4">
              <span className="text-[#1B3D68] font-semibold">
                Unlock Your Future with Kurmato
              </span>
              : A Journey Defined by Innovation, Expertise, and Trust
            </p>
            <p className="text-[#1B3D68] text-2xl font-[Montserrat]">
              At Kurmato, we don’t just offer careers – we offer transformative
              collaborations.
            </p>
          </div>

          <div className="py-4 ">
            <ul className="space-y-4">
              <li>
                <p className="text-[#1B3D68] text-xl font-[Montserrat]">
                  By joining us, you become part of an exceptional team driven
                  by a shared passion for groundbreaking ideas and creative
                  excellence. Here, your expertise is valued, your growth is
                  nurtured, and together, we shape the future of our industry.
                  If you seek an environment where innovation meets opportunity,
                  your journey begins with us.
                </p>
              </li>
              <li>
                <h4 className="text-[#1B3D68] text-2xl font-[Montserrat] font-bold">
                  Our Selection Process :-
                </h4>
              </li>
              <li>
                <h4 className="text-[#1B3D68] text-xl font-[Montserrat] font-bold">
                  Application Review :
                </h4>
                <p className="text-[#1B3D68] text-xl font-[Montserrat]">
                  Upon submission of your application, our recruitment team will
                  meticulously review your CV and portfolio. If your
                  qualifications align with the position, we will reach out to
                  initiate further discussions regarding your experience and
                  skill set.
                </p>
              </li>
              <li>
                <h4 className="text-[#1B3D68] text-xl font-[Montserrat] font-bold">
                  Initial Screening :
                </h4>
                <p className="text-[#1B3D68] text-xl font-[Montserrat]">
                  We will engage with you to better understand your capabilities
                  and assess how your expertise fits with the role. This may
                  include completing a series of tasks tailored to the position
                  to demonstrate your skills.
                </p>
              </li>
              <li>
                <h4 className="text-[#1B3D68] text-xl font-[Montserrat] font-bold">
                  Interview :
                </h4>
                <p className="text-[#1B3D68] text-xl font-[Montserrat]">
                  Successful candidates from the screening phase will be invited
                  to a formal interview. This is an opportunity for us to
                  explore your experience in more depth, evaluate your alignment
                  with our company culture, and discuss your professional goals.
                </p>
              </li>
              <li>
                <h4 className="text-[#1B3D68] text-xl font-[Montserrat] font-bold">
                  Offer and Onboarding :
                </h4>
                <p className="text-[#1B3D68] text-xl font-[Montserrat]">
                  If selected, you will receive a formal offer letter. Upon your
                  acceptance, we will welcome you aboard and provide
                  comprehensive support to ensure your seamless integration and
                  growth within the Kurmato team.
                </p>
              </li>
              <li>
                <div>
                  <JobOpenings />
                </div>
                <p className="text-[#1B3D68] py-6 text-xl font-[Montserrat]">
                  Explore our open roles and take the next step toward joining a
                  forward-thinking, innovative organization. We are eager to
                  hear from you!
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RecruitmentProcess;
