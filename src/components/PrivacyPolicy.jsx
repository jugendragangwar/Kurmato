import React from "react";
import Footer from "./home/Footer";

const PrivacyPolicy = () => {
  return (
    <>
      <section className="overflow-hidden font-[Montserrat]">
        <div className="relative   w-full bg-cover bg-center">
          <div className="shadow-lg overflow-hidden  ">
            <img
              src="https://media.istockphoto.com/id/1358122830/photo/cyber-security-systems-for-business-network.jpg?s=612x612&w=0&k=20&c=KbQxF56JPm0jo37jxA0YIXkingKd45NA272EPZa2l3o="
              alt="nftdevelopment"
              className="w-full xl:h-[400px] max-h-[400px] h-52"
            />
          </div>

          <div className="absolute inset-0   flex items-center justify-center">
            <h1 className="text-white font-[Montserrat] text-4xl font-bold">
              Privacy Policy
            </h1>
          </div>
        </div>

        <div className="container mx-auto px-2 sm:mt-8 md:px-0 md:pb-8">
          <div className="space-y-6 px-8">
            <div className="mt-10 sm:mt-10">
              <h5 className="font-semibold text-xl text-[#1B3D68] font-[Montserrat] mb-2">
                1. Introduction
              </h5>
              <p className="font-[Montserrat]">
                Welcome to Kurmato pvt ltd. We are committed to protecting your
                privacy and ensuring that your personal information is handled
                responsibly. This Privacy Policy outlines the types of
                information we collect, how we use it, and your rights regarding
                your data.
              </p>
            </div>

            {/* Information We Collect Section */}
            <div>
              <h5 className="font-semibold text-xl text-[#1B3D68] font-[Montserrat] mb-2">
                2. Information We Collect
              </h5>
              <p>
                <strong className="font-[Montserrat] text-[#1B3D68]">
                  a. Personal Information:
                </strong>{" "}
                We may collect personal information such as names, email
                addresses, phone numbers, and postal addresses when you provide
                it to us voluntarily, such as when you:
              </p>
              <ul className="list-disc pl-6 font-[Montserrat]">
                <li>Register for an account</li>
                <li>Contact our customer support</li>
                <li>Make a purchase</li>
                <li>Subscribe to our newsletter</li>
                <li>Use our software or services</li>
              </ul>
              <p>
                <strong className="font-[Montserrat] text-[#1B3D68]">
                  b. Automatically Collected Information:
                </strong>{" "}
                We may also collect certain information automatically,
                including:
              </p>
              <ul className="list-disc pl-6 font-[Montserrat]">
                <li>IP addresses</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Date and time of access</li>
                <li>Website usage data</li>
              </ul>
            </div>

            {/* How We Use Your Information Section */}
            <div>
              <h5 className="font-semibold text-xl text-[#1B3D68] font-[Montserrat] mb-2">
                3. How We Use Your Information
              </h5>
              <p>
                We use the information we collect for various purposes,
                including:
              </p>
              <ul className="list-disc pl-6 font-[Montserrat]">
                <li>Providing and maintaining our software and services</li>
                <li>
                  Communicating with you regarding updates, promotions, and
                  other relevant information
                </li>
                <li>Improving our products and services</li>
                <li>Analyzing usage data to enhance user experience</li>
                <li>Complying with legal obligations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
