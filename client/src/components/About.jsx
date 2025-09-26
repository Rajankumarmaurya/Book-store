import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-white">
      {/* Header Section */}
      <div className="bg-[#2da7d4] py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
          About Page
        </h1>
      </div>

      {/* Content Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg mt-[-50px] relative z-10 rounded p-6 md:p-10">
        {/* Who We Are */}
        <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase">Who We Are</h2>
        <p className="text-gray-700 mb-6">
          We’re a sales performance agency. We’ve been helping businesses drive revenue with the use of inbound marketing and sales enablement tactics since 2012. We’re a proud HubSpot Platinum Partner and pride ourselves on using the best tools to help our clients succeed.{" "}
          <span className="text-blue-500 underline cursor-pointer">Our team</span>{" "}
          is made up of smart and talented people that are passionate about creating inbound sales results!
        </p>

        {/* We're Different */}
        <h2 className="text-2xl font-bold text-blue-900 mb-4 uppercase">We're Different Than the Rest</h2>

        {/* Point 1 */}
        <p className="text-gray-800 font-semibold mb-1">We’re rooted in sales.</p>
        <p className="text-gray-700 mb-4">
          Our parent company,{" "}
          <span className="text-blue-500 underline cursor-pointer">
            The Center for Sales Strategy (CSS)
          </span>
          , has been helping sales organizations turn talent into performance for almost 40 years. Unlike other marketing agencies, we’re obsessed with ROI and we have the experience to deliver inbound sales results because we’ve done it ourselves…
        </p>

        {/* Point 2 */}
        <p className="text-gray-800 font-semibold mb-1">We’ve been where you are.</p>
        <p className="text-gray-700 mb-6">
          More than a decade ago, when we needed to grow and diversify how we generated new business at CSS, we turned to inbound marketing and found huge success after launching our{" "}
          <span className="text-blue-500 underline cursor-pointer">sales strategy blog</span>. Once we mastered the art of using thought leadership content for lead generation, we launched LeadG2 so we could help businesses do the exact same thing.
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 mt-4">
        
          <Link to="/contact" className="bg-[#00a3c8] text-white font-semibold py-2 px-4 rounded hover:bg-[#008fb2] transition">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  );
};

export default About;
