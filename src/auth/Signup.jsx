import React, { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../components/BaseUrl";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaShieldAlt,
  FaArrowLeft,
  FaSpinner,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [otp, setOtp] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirm_password)
      newErrors.confirm_password = "Passwords do not match";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await axios.post(`${BaseUrl}/userSignup`, formData);
      const data = response.data;
      localStorage.setItem("initialLoginToken", data.data.token);
      setCurrentStep(3);
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.response?.data?.message || "Signup failed. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOTPVerify = async () => {
    const token = localStorage.getItem("initialLoginToken");
    if (!otp) {
      setSubmitStatus({ type: "error", message: "Please enter the OTP." });
      return;
    }
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      const response = await axios.put(
        `${BaseUrl}/verifyEmailOTP`,
        { otp },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("USER_ID", response.data.data.user_id);
        setSubmitStatus({ type: "success", message: "Signup completed successfully!" });
      navigate("/LoginUser");
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error.response?.data?.message || "OTP verification failed. Try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4">
        <h2 className="text-2xl font-bold text-white text-center">
          {currentStep === 3 ? "Verify Your Account" : "Create Your Account"}
        </h2>
        <p className="text-blue-100 text-center text-sm mt-1">
          {currentStep === 3
            ? "Enter the code sent to your email"
            : "Join our community today"}
        </p>
      </div>

      <div className="p-8">
        {submitStatus && (
          <div
            className={`mb-6 p-3 rounded-lg ${
              submitStatus.type === "success"
                ? "bg-green-100 border-l-4 border-green-500"
                : "bg-red-100 border-l-4 border-red-500"
            }`}
          >
            <p
              className={`text-sm ${
                submitStatus.type === "success"
                  ? "text-green-700"
                  : "text-red-700"
              }`}
            >
              {submitStatus.message}
            </p>
          </div>
        )}

        {currentStep !== 3 ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              {
                label: "Full Name",
                name: "name",
                type: "text",
                icon: <FaUser />,
              },
              {
                label: "Email Address",
                name: "email",
                type: "email",
                icon: <FaEnvelope />,
              },
              {
                label: "Phone Number",
                name: "phone",
                type: "text",
                icon: <FaPhone />,
              },
              {
                label: "Password",
                name: "password",
                type: "password",
                icon: <FaLock />,
              },
              {
                label: "Confirm Password",
                name: "confirm_password",
                type: "password",
                icon: <FaLock />,
              },
            ].map((field, idx) => (
              <div key={idx}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {field.label}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    {field.icon}
                  </div>
                  <input
                    name={field.name}
                    type={field.type}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder={field.label}
                  />
                </div>
                {errors[field.name] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg shadow-md hover:from-blue-700 hover:to-indigo-800"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" />
                  <span>Creating Account...</span>
                </div>
              ) : (
                "Sign Up"
              )}
            </button>

            <div className="text-center mt-4">
              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <a
                  href="/LoginUser"
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Sign in
                </a>
              </p>
            </div>
          </form>
        ) : (
          <div className="space-y-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center">
                <FaShieldAlt className="w-8 h-8 text-indigo-600" />
              </div>
            </div>

            <p className="text-center text-gray-600 mb-6">
              We've sent a verification code to your email address.
            </p>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <FaLock />
              </div>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg text-center tracking-widest text-lg"
                placeholder="Enter OTP"
                maxLength="6"
              />
            </div>

            <button
              onClick={handleOTPVerify}
              disabled={isSubmitting}
              className="w-full py-3 px-4 mt-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium rounded-lg shadow-md hover:from-green-600 hover:to-emerald-700"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2">
                  <FaSpinner className="animate-spin" />
                  <span>Verifying...</span>
                </div>
              ) : (
                "Verify & Complete Signup"
              )}
            </button>

            <div className="text-center mt-6">
              <button
                onClick={() => setCurrentStep(1)}
                className="inline-flex items-center text-sm text-indigo-600 hover:text-indigo-800"
              >
                <FaArrowLeft className="mr-1" />
                Back to signup
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
