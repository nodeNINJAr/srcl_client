import React from 'react';
import { PhoneOutlined, MailOutlined, FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';

const AppHeader = () => {
  return (
    <div className="flex justify-between items-center h-full flex-wrap px-2 sm:px-4 py-1 bg-[#28A645] font-roboto">
      {/* Left Section */}
      <div className="w-full sm:w-auto text-left mb-4 sm:mb-0">
        <h3 className="text-base sm:text-2xl font-bold font-Albert drop-shadow-xl">
          Sustainable Research And Consultancy Limited
          <br />
          <span className="text-sm sm:text-lg font-medium capitalize pb-4 block sm:text-right text-left text-gray-300">Sustainable for future</span>
        </h3>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-between sm:justify-end space-x-4 sm:space-x-6 font-Poppins">
          <div className='flex justify-start gap-4'>
              {/* Contact Us Button */}
              <a href="#contact" className="truncate flex items-center text-xs sm:text-base font-Albert font-semibold hover:text-blue-600 mb-2 sm:mb-0">
                <PhoneOutlined className="mr-2 text-sm sm:text-xl" />
                Contact Us
              </a>

              {/* Webmail Button */}
              <a href="#webmail" className="flex items-center text-xs sm:text-base font-Albert font-semibold hover:text-blue-600 mb-2 sm:mb-0">
                <MailOutlined className="mr-2 text-sm sm:text-xl" />
                Webmail
              </a>
          </div>
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-base sm:text-xl hover:text-blue-600">
            <FacebookOutlined />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-base sm:text-xl hover:text-blue-600">
            <TwitterOutlined />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-base sm:text-xl hover:text-blue-600">
            <InstagramOutlined />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-base sm:text-xl hover:text-blue-600">
            <LinkedinOutlined />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
