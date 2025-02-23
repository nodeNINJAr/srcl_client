import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Use any icon library
import { FiArrowRight } from "react-icons/fi";

//
const TopNavbar = () => {
  return (
    <div className="flex justify-between gap-6 p-4 flex-wrap bg-green-50 font-roboto">
      <aside>
        <h4 className="text-xl font-Varela text-gray-600">Sustainable Research and Consultancy Limited </h4>
      </aside>
      <div className="flex justify-end items-center gap-4">
        <nav className="flex items-center space-x-2 text-sm">
          <a href="#" className="text-gray-400 hover:text-blue-700">
            Contact Us
          </a>
          <FiArrowRight className="text-gray-400" />
          <span className="text-gray-600">Webmail</span>
        </nav>
           {/* Social Media Section */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-700"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
          </div>
      </div>
    </div>
  );
};

export default TopNavbar;
