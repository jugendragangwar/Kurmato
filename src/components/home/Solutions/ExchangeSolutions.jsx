import { CiCircleCheck } from "react-icons/ci";
import Footer from "../Footer";
import img from "../../../assets/exchange.jpeg";
import img1 from "../../../assets/exchange1.png";
import img2 from "../../../assets/exchange2.jpeg";
import AllServices from "../../AllServices";

const ExchangeSolutions = () => {
  return (
    <>
      <div className="">
        <div className="relative ">
          <div className="shadow-lg overflow-hidden  ">
            <img
              src={img}
              alt=" exchange solution"
              className=" w-full xl:h-[400px] max-h-[400px] h-52"
            />
          </div>
          <div className="absolute inset-0   flex items-center justify-center">
            <h1 className="text-white text-xl sm:text-4xl font-bold font-[Montserrat]">
              Exchange Solutions
            </h1>
          </div>
        </div>
        <section className="mx-auto container">
          <div className="p-4 md:flex   md:space-x-8 py-10">
            <div className="  mb-8 md:w-[80%] md:mb-0">
              <img
                src={img1}
                alt="exchange"
                className="w-full rounded-lg max-h-[800px] object-cover"
              />
              <h2 className="text-3xl  mt-8 font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                Exchange Solutions
              </h2>
              <p className="text-gray-700 mb-4 text-balance  font-[Montserrat]">
                At Kurmato PVT LTD, we specialize in providing cutting-edge
                exchange solutions that optimize and streamline trading and
                communication systems, enhancing the way businesses interact and
                transact. Our innovative services are meticulously designed to
                meet the unique needs of businesses across various sectors,
                ensuring seamless and efficient exchanges of information and
                transactions. In today’s fast-paced digital environment, where
                efficiency, security, and scalability are paramount, we position
                ourselves as your trusted partner in achieving your business
                objectives through advanced technological solutions.
              </p>
            </div>

            <AllServices />
          </div>

          <div className=" grid lg:grid-cols-2 grid-cols-1  px-4 ">
            <div className="mt-10 rounded-xl   overflow-hidden flex justify-center items-center  ">
              <img
                src="https://img.freepik.com/free-vector/digital-currency-indian-rupee-white-background-with-circuit-lines_1017-45132.jpg?size=626&ext=jpg&ga=GA1.1.1558979200.1716139330&semt=ais_hybrid"
                alt="exchange"
                className="w-full max-w-[600px] rounded-lg max-h-[400px] h-full   object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>
            <div className="lg:ml-10   bg-gray-100 px-4 rounded-lg py-4 mt-8 sm:mt-8 ">
              <h4 className="text-3xl    text-[#1B3D68] font-bold  font-[Montserrat] mb-4">
                Why Do You Need Exchange Solution ?
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Comprehensive loyalty solutions.
                  </p>
                  <p></p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Fully automated personalized offer capabilities.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
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
                    Agile technology platform.built for speed and change.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">Modular platform.</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">
                    Flexible support model and payment structures.
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">Liquidity Provision.</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">Market Transparency.</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">Regulatory Compliance.</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className="  text-blue-500 text-3xl" />
                  <p className="font-[Montserrat]">Diverse Asset Support.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:mt-10 lg:grid lg:grid-cols-2 grid-cols-1  px-4 ">
            <div className=" sm:mt-8 bg-gray-100 px-4 mt-8 py-4 rounded-lg">
              <h4 className="text-3xl  font-semibold text-[#1B3D68]  font-[Montserrat] mb-4">
                Exchange Solution Life Cycle Model :-
              </h4>
              <ul className="space-y-3">
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]"> Requirement Analysis</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Design and Planning</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Development</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    Testing and Quality Assurance
                  </p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Deployment</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">User Onboarding</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Operational Management</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Continuous Improvement</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">Scalability and Growth</p>
                </li>
                <li className="flex gap-4">
                  <CiCircleCheck className=" text-blue-500  text-3xl " />
                  <p className="font-[Montserrat]">
                    End-of-Life and Transition
                  </p>
                </li>
              </ul>
            </div>
            <div className="mt-10 rounded-xl   overflow-hidden flex justify-center items-center ">
              <img
                src={img2}
                alt="exchange"
                className="lg:ml-10 w-full max-w-[600px] rounded-lg max-h-[500px]  h-full object-cover transition-all duration-300 ease-in-out transform hover:scale-105 hover:brightness-110 hover:-hue-rotate-15"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ExchangeSolutions;
