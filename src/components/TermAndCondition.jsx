import React from "react";
import Footer from "./home/Footer";

const TermAndCondition = () => {
  return (
    <section className="overflow-hidden font-[Montserrat] ">
      <div className="relative w-full bg-center bg-cover">
        <div className="overflow-hidden shadow-lg ">
          <img
            src="https://titantrips.in/ofc/upload/171787972413605161501717274924.jpg"
            alt="nftdevelopment"
            className="w-full xl:h-[400px] max-h-[400px] h-52"
          />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold font-[Montserrat]">
            {" "}
            Terms & Conditions
          </h1>
        </div>
      </div>
      <div className="container px-4 mx-auto mt-8 sm:mt-8 md:px-0 md:pb-8">
        <div className="px-8 space-y-6">
          <p className="font-serif font-bold  text-[#1B3D68] text-xl">
            Welcome to Kurmato Private Limited!
          </p>
          <p>
            These terms and conditions outline the rules and regulations for the
            use of Kurmato.
          </p>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            1. Scope of Work
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Define the scope of the project or services to be provided by
              Kurmato.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            2. Payment Terms
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Detail the payment schedule, including upfront fees, milestones,
              and final payment.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            3. Intellectual Property
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Clarify ownership of intellectual property rights, including
              copyrights, trademarks, and patents.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            4. Confidentiality
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Establish confidentiality obligations to protect sensitive
              information.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            5. Warranties
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Define any warranties regarding the software's functionality,
              performance, and quality.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            6. Changes and Revisions
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Outline the procedure for requesting changes or revisions to the
              project scope.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            7. Termination
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Detail the circumstances under which either party can terminate
              the agreement.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            8. Dispute Resolution
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Specify the process for resolving disputes between the parties.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            9. Liability and Indemnification
          </h5>
          <ul className="pl-6 list-disc">
            <li>Limit liability and indemnify against certain claims.</li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            10. Miscellaneous
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Include any other relevant provisions, such as non-solicitation
              clauses or assignment of the agreement.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            11. Entire Agreement
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              State that these terms and conditions constitute the entire
              agreement between the parties.
            </li>
          </ul>
          <h5 className="font-semibold text-xl text-[#1B3D68]">
            12. Signatures
          </h5>
          <ul className="pl-6 list-disc">
            <li>
              Provide space for both parties to sign and date the agreement.
            </li>
          </ul>
          <p>
            Remember that the terms and conditions should be written in clear
            and concise language to ensure mutual understanding. Consult with
            legal counsel to ensure compliance with local laws and industry
            standards. Additionally, it's essential to have each client review
            and sign the agreement before commencing any software development
            work.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default TermAndCondition;
