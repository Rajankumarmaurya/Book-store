import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden max-w-4xl w-full">
        {/* Left Side - Image */}
        <div className="md:w-1/2 bg-[#c5e8eb] flex items-center justify-center p-6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/051/166/491/non_2x/communication-concept-with-email-message-box-and-contacts-icons-e-mail-marketing-customer-support-counseling-and-support-hotline-connection-with-modern-network-technology-contact-us-free-photo.jpg" 
            alt="Contact"
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2 p-8 bg-[#f7feff]">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 invisible">
                  Last <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded w-full"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Leave us a few words <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                placeholder="Type your message..."
                value={formData.message}
                onChange={handleChange}
                className="mt-1 p-2 border border-gray-300 rounded w-full h-28 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactForm;
