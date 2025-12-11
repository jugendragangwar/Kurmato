import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";
import { BaseUrl } from "./BaseUrl";
import img from "../assets/contact.png";
import Footer from "./home/Footer";

const Contact = () => {
  const [agreed, setAgreed] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid email format";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      alert("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
    window.location.reload();
  };

  return (
    <>
      <div className="container rounded-2xl shadow-2xl mx-auto p-8   sm:mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center p-4 bg-[#1B3D68] rounded-lg">
            <h2 className="text-3xl font-bold text-white font-[Montserrat] tracking-tight sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-xl text-white font-[Montserrat]">
              And your heading will be Grow your business with us.
            </p>
            <img
              src={img}
              alt="Contact"
              className="mt-6 w-full h-auto rounded-lg"
            />
          </div>

          <div className="px-4 shadow-lg p-3 rounded-lg">
            <div className="mx-auto max-w-2xl text-center ">
              <h2 className="text-3xl font-bold text-[#1B3D68] font-[Montserrat] tracking-tight sm:text-4xl py-4">
                Contact Us
              </h2>
              {submissionStatus && (
                <p
                  className={`mt-2 text-lg ${
                    submissionStatus.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {submissionStatus}
                </p>
              )}
            </div>
            <form onSubmit={onSubmit} className="mt-6 ">
              <div className="grid grid-cols-1 gap-y-6">
                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#1B3D68] font-[Montserrat] leading-6"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      autoComplete="name"
                      className="w-full border-b-2 border-[#1B3D68] bg-transparent text-gray-900 focus:outline-none"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#1B3D68] font-[Montserrat] leading-6"
                  >
                    Phone
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      onInput={(e) =>
                        (e.target.value = e.target.value.replace(/\D/g, ""))
                      }
                      autoComplete="tel"
                      className="w-full border-b-2 border-[#1B3D68] bg-transparent text-gray-900 focus:outline-none"
                      maxLength={10}
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#1B3D68] font-[Montserrat] leading-6"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      autoComplete="email"
                      className="w-full border-b-2 border-[#1B3D68] bg-transparent text-gray-900 focus:outline-none"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-[#1B3D68] font-[Montserrat] leading-6"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-xs">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center w-full">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="agree"
                    className="ml-2 text-sm text-[#1B3D68] font-[Montserrat]"
                  >
                    By selecting this, you agree to our{" "}
                    <Link to="/privacy-policy" className="font-semibold">
                      privacy&nbsp;policy
                    </Link>
                    .
                  </label>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="block w-full rounded-md bg-[#1B3D68] font-[Montserrat] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#1b6868] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Contact Us"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
