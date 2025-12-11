import soft1 from "../../../assets/software.jpeg";
import Footer from "../Footer";
import AllServices from "../../AllServices";
const SoftwareDevelopmemt = () => {
  return (
    <>
      <div className="  mx-auto  ">
        <div className="relative ">
          <div className="shadow-lg overflow-hidden  ">
            <img
              src="https://www.bennett.edu.in/wp-content/uploads/2023/06/BCA.jpg"
              alt="software development"
              className=" w-full xl:h-[400px] max-h-[400px] h-52"
            />
          </div>
          <div className="absolute inset-0   flex items-center justify-center">
            <h1 className="text-white text-xl sm:text-4xl font-bold font-[Montserrat]">
              {" "}
              Software Development
            </h1>
          </div>
        </div>
        <section className="mx-auto container">
          <div className="p-4 md:flex   md:space-x-8 py-10">
            <div className="  mb-8 md:w-[80%] md:mb-0">
              <img
                src={soft1}
                alt="softwaredevelopment"
                className="w-full rounded-lg max-h-[800px] object-cover"
              />
              <h2 className="text-3xl  mt-8 font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                Software Development
              </h2>
              <p className="text-gray-700 mb-4 text-balance font-[Montserrat] ">
                At Kurmato, we understand that every business is unique, with
                distinct challenges, goals, and technology needs. That’s why we
                approach each engagement with a personalized and strategic
                mindset. Our process begins with a deep and thorough discussion
                about your specific business and technology challenges,
                objectives, and aspirations. We believe in building strong
                partnerships with our clients from the outset, ensuring a clear
                understanding of your vision and the best way to achieve it. By
                engaging in this collaborative dialogue, we can craft a tailored
                strategy that not only aligns with your goals but also serves as
                the foundation for our partnership. Our strategy is designed to
                ensure success and deliver the most exemplary software
                development services available, whether you're a startup looking
                to innovate, a medium-sized company aiming for growth, or a
                large enterprise seeking to streamline and optimize your
                operations. Here’s how we achieve that.
              </p>
            </div>

            <AllServices />
          </div>

          <div className=" grid lg:grid-cols-2 grid-cols-1  px-4 ">
            <div className="mt-10 rounded-xl   overflow-hidden flex justify-center items-center ">
              <img
                src="https://media.istockphoto.com/id/1530256492/vector/software-development-concept-laptop-with-open-screen-hanging-over-desk-coding-or-programming.jpg?s=612x612&w=0&k=20&c=LLywtLnfu5FETIvkaFjy_xcHnaIGmaKZYxcPKAoyPcA="
                alt="software development"
                className="   w-full max-w-[600px] rounded-lg max-h-[500px]  transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>

            <div className="lg:ml-10   bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8 ">
              <h5 className="text-3xl    font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                Why Do You Need Software Development ?
              </h5>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    {" "}
                    Automation of Repetitive Tasks (Doing Boring Stuff for Us).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Enhanced Communication (Talking to Friends and Family).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Economic Growth (Helping Businesses Grow).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Data Management and Analysis (Dealing with Big Data).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    {" "}
                    Improved User Experience (Making Things Easy to Use).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Security and Privacy (Keeping Our Secrets Safe).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    {" "}
                    Innovation and Problem Solving (Creating New Stuff).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    {" "}
                    Accessibility and Inclusivity (Helping Everyone Get
                    Involved).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    {" "}
                    Environmental Impact (Saving the Planet).
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    {" "}
                    Global Connectivity (Connecting the World).
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:mt-10 lg:grid lg:grid-cols-2 grid-cols-1  px-4 ">
            <div className="  bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8 ">
              <h5 className="text-3xl   font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                Software Development Life Cycle Model :-
              </h5>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    {" "}
                    Automation of Repetitive Tasks
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    UML (Unified Modeling Language)
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Flow chart technique</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Data flow diagram</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    Role Activity Diagrams-(RAD)
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Gantt Charts</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    IDEF (Integrated Definition for Function Modeling)
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Colored Petri Nets (CPN)</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Workflow Technique etc</p>
                </li>
              </ul>
            </div>

            <div className="mt-10 rounded-xl   overflow-hidden flex justify-center items-center ">
              <img
                src="https://media.istockphoto.com/id/1480476353/photo/human-life-with-artificial-intelligence-data-in-computer-technology.jpg?s=612x612&w=0&k=20&c=Rywq_PNqPTkGlEUGW-RAJ50dbGQL5lT_p0daw5_Lqus="
                alt="software development"
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

export default SoftwareDevelopmemt;
