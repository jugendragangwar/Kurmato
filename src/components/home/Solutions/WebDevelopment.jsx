import { CiCircleCheck } from "react-icons/ci";
import Footer from "../Footer";
import img from "../../../assets/front image(1).png";
import img1 from "../../../assets/web.png";
import img2 from "../../../assets/web1.png";
import img3 from "../../../assets/web2.png";
import AllServices from "../../AllServices";

const WebDevelopment = () => {
  const offerings = [
    {
      title: "Tailor Made Solutions :-",
      description:
        "We craft bespoke websites tailored to your unique business needs, ensuring every feature aligns with your goals.",
    },
    {
      title: "Responsive and Mobile Friendly Design :-",
      description:
        "Our designs provide seamless experiences across all devices, ensuring your site looks stunning on desktops, tablets, and smartphones.",
    },
    {
      title: "SEO Optimized Architecture :-",
      description:
        "We build with search engines in mind, incorporating best practices to enhance your visibility and drive organic traffic.",
    },
    {
      title: "High-Performance and Speed :-",
      description:
        "Enjoy fast loading times and optimized performance, keeping your users engaged and satisfied with every visit.",
    },
    {
      title: "User-Centric UI/UX Design :-",
      description:
        "We prioritize user experience, creating intuitive interfaces that make navigation easy and enjoyable for your audience.",
    },
    {
      title: "Secure and Robust :-",
      description:
        "Your website’s security is our priority. We implement the latest measures to protect your data and maintain trust.",
    },
  ];

  const lifeCycleModel = [
    "Business process modeling notation (BPMN)",
    "UML (Unified Modeling Language)",
    "Flow chart technique",
    "Data flow diagram",
    "Role Activity Diagrams- (RAD)",
    "Gantt Charts",
    "IDEF (Integrated Definition for Function Modeling)",
    "Colored Petri Nets (CPN)",
    "Workflow Technique etc.",
  ];

  return (
    <>
      <div className="mx-auto">
        <div className="relative shadow-lg overflow-hidden">
          <img
            src={img1}
            alt="web development"
            className="w-full xl:h-[400px] max-h-[400px] h-52"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-xl sm:text-4xl font-bold font-[Montserrat]">
              Web Development
            </h1>
          </div>
        </div>

        <section className="container mx-auto py-10 px-4">
          <div className="md:flex md:space-x-8">
            <div className="md:w-[80%]">
              <div className="shadow-lg overflow-hidden rounded-lg">
                <img
                  src={img}
                  alt="web development"
                  className="w-full max-h-[800px] object-cover"
                />
              </div>
              <h2 className="text-3xl mt-8 font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                Website Development
              </h2>
              <p className="text-gray-700 font-[Montserrat] mb-4">
                Kurmato provides custom website development services for your
                projects. Website development is the most crucial key step in
                managing a successful online presence of a startup business. But
                there are a plethora of website design and web development
                companies in the global world who are claiming to provide the
                best web development services. Kurmato's dedicated developers
                are always ready to take the challenge and give their best
                effort to develop your product. Kurmato hires developers through
                multiple case studies and an interview process, which helps us
                in potential web development and ensures clients receive the
                best development services. Extract your requirements and start
                your business online with Kurmato . We provide clear project
                requirements to developers through research work and multiple
                case studies.
              </p>
            </div>
            <AllServices />
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-10">
            <div className="flex justify-center items-center">
              <img
                src={img3}
                alt="web development"
                className="w-full max-w-[500px] rounded-lg object-cover transform hover:scale-105 hover:brightness-110 transition-all"
              />
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-3xl font-semibold text-[#1B3D68] font-[Montserrat] mb-6">
                What We Offer ?
              </h4>
              <ul className="space-y-6">
                {offerings.map((offer, index) => (
                  <li key={index} className="flex gap-4">
                    <CiCircleCheck size={30} className="text-blue-500" />
                    <div>
                      <p className="text-xl font-bold text-[#1B3D68] font-[Montserrat]">
                        {offer.title}
                      </p>
                      <p className="font-[Montserrat]">{offer.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-10">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h4 className="text-3xl font-semibold text-[#1B3D68] font-[Montserrat] mb-6">
                Web Development Life Cycle Model :-
              </h4>
              <ul className="space-y-4">
                {lifeCycleModel.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <CiCircleCheck size={30} className="text-blue-500" />
                    <p className="font-[Montserrat]">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <img
                src={img2}
                alt="web development"
                className="w-full max-w-[500px] rounded-lg object-cover transform hover:scale-105 hover:brightness-110 transition-all"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default WebDevelopment;
