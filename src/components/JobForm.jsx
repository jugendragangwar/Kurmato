import React, { useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Footer from "./home/Footer";
import { useParams } from "react-router-dom";
import form from "../assets/vision.png";
const JobForm = () => {
  const { position } = useParams();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    position_applied_for: position || "",
    first_name: "",
    contact_email: "",
    contact_mobile: "",
    linkedin_profile: "",
    experience: "",
    relevant_experience: "",
    current_lpa: "",
    expected_lpa: "",
    expected_joining_date: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        expected_joining_date: checked
          ? [...prevData.expected_joining_date, value]
          : prevData.expected_joining_date.filter((item) => item !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      <div className="w-full  ">
        <div className="relative overflow-hidden shadow-md ">
          <img
            src={form}
            alt="Join Our Team"
            className="object-cover w-full xl:h-[400px] max-h-[400px]"
          />
        </div>

        <div className="flex justify-center">
          <div className="px-4 grid grid-cols-1 md:grid-cols-2 max-w-7xl mt-10 gap-6">
            <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-blue-500 py-12 text-white flex flex-col items-center rounded-lg shadow-lg">
              <div className="w-full px-6">
                <h3 className="text-3xl font-bold mb-6">Our Contact</h3>
                <p className="mb-8">
                  Give us a call or drop by anytime. We endeavor to answer all
                  enquiries within 24 hours on business days. We will be happy
                  to answer your questions.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="text-4xl mt-2 sm:text-2xl mr-4" />
                    <div>
                      <p className="font-semibold">Our Address</p>
                      <p className="mt-2 text-sm">
                        Office suite-306, 3rd floor, D-60, D-Block, AGS Business
                        Park, Sector-63, Noida-201301
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaEnvelope size={25} className="mt-2 mr-4" />
                    <div>
                      <p className="font-semibold">Our Mailbox</p>
                      <p className="mt-2">hr@kurmato.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaPhoneAlt size={25} className="mt-2 mr-4" />
                    <div>
                      <p className="font-semibold">Our Phones</p>
                      <p className="mt-2">9719429959</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              {isSubmitted ? (
                <h4 className="text-2xl text-center font-semibold text-[#1B3D68] font-[Montserrat]">
                  Form submitted successfully!
                </h4>
              ) : (
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  className="p-6 bg-white"
                >
                  <input
                    className="hidden "
                    type="hidden"
                    name="access_key"
                    value="0d67889c-0c7e-4cbb-a29e-65db08ccac98"
                  />

                  <h4 className="text-2xl text-center font-semibold mb-6 text-[#1B3D68] font-[Montserrat]">
                    Submit Your Application
                  </h4>

                  <div className="mt-4">
                    <label className="block text-sm font-medium text-[#1B3D68]">
                      Position Applied For*
                    </label>
                    <input
                      type="text"
                      name="position_applied_for"
                      value={formData.position_applied_for}
                      onChange={handleChange}
                      readOnly={!!position}
                      className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-[#1B3D68]">
                        Name*
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        placeholder="Enter your name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B3D68]">
                        Contact Email*
                      </label>
                      <input
                        type="email"
                        name="contact_email"
                        placeholder="Enter your email"
                        value={formData.contact_email}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B3D68]">
                        Contact Mobile*
                      </label>
                      <input
                        type="text"
                        name="contact_mobile"
                        placeholder="Enter your phone number"
                        value={formData.contact_mobile}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, "");
                          if (value.length <= 10) {
                            handleChange({
                              target: {
                                name: "contact_mobile",
                                value: value,
                              },
                            });
                          }
                        }}
                        maxLength="10"
                        className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B3D68]">
                        LinkedIn Profile*
                      </label>
                      <input
                        type="url"
                        name="linkedin_profile"
                        placeholder="Enter your LinkedIn profile URL"
                        value={formData.linkedin_profile}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B3D68]">
                        Experience (in years)*
                      </label>
                      <input
                        type="number"
                        name="experience"
                        placeholder="Enter your experience in years"
                        value={formData.experience}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B3D68]">
                        Relevant Experience*
                      </label>
                      <input
                        type="number"
                        name="relevant_experience"
                        placeholder="Enter relevant experience in years"
                        value={formData.relevant_experience}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B3D68]">
                        Current LPA*
                      </label>
                      <input
                        type="number"
                        name="current_lpa"
                        placeholder="Enter your current LPA"
                        value={formData.current_lpa}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#1B3D68]">
                        Expected LPA*
                      </label>
                      <input
                        type="number"
                        name="expected_lpa"
                        placeholder="Enter your expected LPA"
                        value={formData.expected_lpa}
                        onChange={handleChange}
                        className="w-full p-2 mt-1 border border-gray-300 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Position Applied For */}
                  <div className="mt-4">
                    <label className="block text-sm font-medium text-[#1B3D68]">
                      Notice Period*
                    </label>
                    <div className="flex flex-wrap gap-4 mt-2">
                      {["30 Days", "Immediate joining"].map((option) => (
                        <label key={option}>
                          <input
                            type="checkbox"
                            name="expected_joining_date"
                            value={option}
                            onChange={handleChange}
                            className="mr-2"
                            checked={formData.expected_joining_date.includes(
                              option
                            )}
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="px-6 py-3 mt-6 bg-[#1B3D68] text-white font-semibold rounded-full hover:bg-[#139898]"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JobForm;
