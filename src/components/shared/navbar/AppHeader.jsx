import React from 'react';
import { PhoneOutlined, MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const AppHeader = () => {
  return (
    <div className="flex justify-between items-center h-full flex-wrap px-2 sm:px-4 py-1 bg-[#28A645] font-roboto">
      {/* Left Section */}
      <div className="w-full sm:w-auto text-left mb-4 sm:mb-0">
        <h3 className="text-xl sm:text-3xl font-bold font-Albert">
          Sustainable Research And Consultancy Limited
          <br />
          <span className="text-lg font-medium capitalize pb-4 block sm:text-right text-left">Sustainable for future</span>
        </h3>
      </div>

      {/* Right Section */}
      <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-6 font-Poppins">
        {/* Contact Us Button */}
        <a href="#contact" className="flex items-center text-base font-Albert font-semibold hover:text-blue-600 mb-2 sm:mb-0">
          <PhoneOutlined className="mr-2 text-xl" />
          Contact Us
        </a>

        {/* Webmail Button */}
        <a href="#webmail" className="flex items-center text-base font-Albert font-semibold hover:text-blue-600 mb-2 sm:mb-0">
          <MailOutlined className="mr-2 text-xl" />
          Webmail
        </a>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
            <FacebookOutlined />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
            <TwitterOutlined />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
            <InstagramOutlined />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600">
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
