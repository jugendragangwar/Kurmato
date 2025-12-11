import Footer from "../Footer";
import meta from "../../../assets/blockchain3.jpeg";
import meta1 from "../../../assets/blockchain4.png";
import img3 from "../../../assets/blockchain.jpeg";
import img4 from "../../../assets/blockchain2.png";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import AllServices from "../../AllServices";

const listItems = [
  {
    title: "Fortify Data Security",
    description:
      "Decentralized systems ensure robust security and impenetrable data protection.",
  },
  {
    title: "Enhance Transparency",
    description: "Achieve clear and auditable transactions that foster trust.",
  },
  {
    title: "Optimize Efficiency",
    description:
      "Automate business processes using smart contracts and reduce operational costs.",
  },
  {
    title: "Stay Competitive",
    description:
      "Leverage cutting-edge blockchain technology to stay ahead in a rapidly evolving market.",
  },
  {
    title: "Empower New Business Models",
    description:
      "Create new opportunities through tokenization and digital assets.",
  },
  {
    title: "Foster Customer Trust",
    description: "Build confidence with traceable and secure solutions.",
  },
  {
    title: "Unlock Revenue Streams",
    description:
      "Open new avenues with decentralized finance (DeFi), ICO/IDO launches, and blockchain-based products.",
  },
];

const expertiseList = [
  {
    title: "Blockchain Consulting & Strategy",
    description:
      "Tailored guidance to develop a clear roadmap for your blockchain journey.",
  },
  {
    title: "Private & Public Blockchain Solutions",
    description:
      "Custom blockchain solutions for your business needs, whether private or open.",
  },
  {
    title: "Decentralized Application (dApp) Development",
    description:
      "Building decentralized applications that operate securely and autonomously.",
  },
  {
    title: "Blockchain Integration & Backend Services",
    description: "Seamless integration with your existing infrastructure.",
  },
  {
    title: "Tokenization & ICO/IDO Launch",
    description:
      "Developing digital tokens and managing initial coin offerings or decentralized offerings.",
  },
  {
    title: "Blockchain Security Audits",
    description:
      "Ensuring blockchain solutions are free from vulnerabilities and optimally secure.",
  },
  {
    title: "Cross-Chain Solutions & Interoperability",
    description:
      "Connecting multiple blockchain networks for enhanced functionality.",
  },
];

const ListItem = ({ title, description }) => (
  <li className="flex gap-4 items-start">
    <IoIosCheckmarkCircleOutline size={30} className="text-blue-500 mt-1" />
    <div>
      <p className="font-[Montserrat] font-bold text-xl">{title}:</p>
      <p>{description}</p>
    </div>
  </li>
);

const BlockChain = () => {
  return (
    <>
      <div className="mx-auto">
        <div className="relative shadow-lg overflow-hidden">
          <img
            src={meta1}
            alt="blockchain development"
            className="w-full xl:h-[400px] h-52 max-h-[400px]"
          />
        </div>

        <section className="container mx-auto p-4">
          <div className="md:flex sm:justify-between py-10">
            <div className="md:w-[80%] mb-8 md:mb-0">
              <div className="shadow-lg overflow-hidden">
                <img
                  src={meta}
                  alt="blockchain development"
                  className="w-full rounded-lg max-h-[800px] object-cover"
                />
              </div>
              <h3 className="text-3xl mt-8 font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                Blockchain Development at Kurmato
              </h3>
              <p className="text-gray-700 mb-4 font-[Montserrat]">
                At Kurmato, we specialize in blockchain development that
                transforms businesses by enabling secure, transparent, and
                efficient solutions. By leveraging state-of-the-art blockchain
                technologies and innovative solutions, we help companies
                streamline processes, enhance data security, and create
                decentralized applications (dApps) tailored to their unique
                needs. Whether you are looking to integrate blockchain for
                financial services, automate business processes with smart
                contracts, or explore decentralized finance (DeFi), our team is
                equipped to deliver secure, scalable, and impactful blockchain
                solutions.
              </p>
            </div>
            <AllServices />
          </div>

          <div className="lg:grid lg:grid-cols-2 px-4 items-center">
            <div className="mt-10 rounded-xl overflow-hidden flex justify-center items-center">
              <img
                src={img3}
                alt="blockchain development"
                className="w-full max-w-[500px] rounded-lg max-h-[400px] object-cover hover:scale-105 hover:brightness-110 hover:-hue-rotate-15 transition-all"
              />
            </div>
            <div className="md:ml-10 bg-gray-100 px-4 rounded-lg mt-8 py-4">
              <h4 className="text-3xl font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                Why Blockchain Development is Essential ?
              </h4>
              <ul className="space-y-6">
                {listItems.map((item, index) => (
                  <ListItem key={index} {...item} />
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 px-4 flex flex-col-reverse sm:mt-10">
            <div className="sm:mt-8 bg-gray-100 px-4 mt-8 py-4 rounded-lg">
              <h4 className="text-3xl font-semibold text-[#1B3D68] font-[Montserrat] mb-4">
                Our Blockchain Expertise Includes :
              </h4>
              <ul className="space-y-3">
                {expertiseList.map((item, index) => (
                  <ListItem key={index} {...item} />
                ))}
              </ul>
            </div>
            <div className="mt-6 rounded-xl md:ml-6 overflow-hidden flex justify-center items-center">
              <img
                src={img4}
                alt="blockchain development"
                className="w-full max-w-[700px] rounded-lg max-h-[500px] object-cover hover:scale-105 hover:brightness-110 hover:-hue-rotate-15 transition-all"
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlockChain;
