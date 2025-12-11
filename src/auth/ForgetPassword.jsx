import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FaEnvelope, FaKey, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { BaseUrl } from "../components/BaseUrl";
import {useNavigate } from "react-router-dom";


const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ email: "", otp: "", newPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [User_Id, Setuser_Id] = useState("");
  const navigate=useNavigate()
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${BaseUrl}/forgetPassword`, { email: formData.email });
      if(res.status===200 || res.status === 201){
        localStorage.setItem("user_id", res.data.data.user_id);
        toast.success("OTP sent to your email.");
        setStep(2);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to send OTP.");
    }
  };

  const verifyOtp = async (e) => {
    Setuser_Id(localStorage.getItem("user_id"))
    e.preventDefault();
    try {
      const res = await axios.put(`${BaseUrl}/forgetPasswordVerifyEmailOTP/${User_Id}`, {
        email: formData.email,
        otp: formData.otp,
      });
      if(res.status===200 || res.status===201 )
      toast.success("OTP verified successfully.");
      setStep(3);
    } catch (err) {
      toast.error(err.response?.data?.message || "OTP verification failed.");
    }
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const res=await axios.put(`${BaseUrl}/changePasswordAfterFoget/${User_Id}`, {
        newPassword: formData.newPassword,
      });
      if(res.status===200 || res.status===201){
      toast.success("Password changed successfully!");
      navigate("/LoginUser")
      }
      setFormData({ email: "", otp: "", newPassword: "" });
    } catch (err) {
      toast.error(err.response?.data?.message || "Password reset failed.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 via-indigo-100 to-purple-100 p-4">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-indigo-700 mb-6">
          {step === 1 && "Forgot Password"}
          {step === 2 && "Verify OTP"}
          {step === 3 && "Reset Password"}
        </h2>

        {step === 1 && (
          <form onSubmit={sendOtp} className="space-y-5">
            <div className="relative">
              <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold">
              Send OTP
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={verifyOtp} className="space-y-5">
            <div className="relative">
              <FaKey className="absolute top-3 left-3 text-gray-400" />
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                value={formData.otp}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold">
              Verify OTP
            </button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={changePassword} className="space-y-5">
            <div className="relative">
              <FaLock className="absolute top-3 left-3 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                placeholder="New Password"
                value={formData.newPassword}
                onChange={handleChange}
                required
                className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 cursor-pointer text-gray-400"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold">
              Change Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
