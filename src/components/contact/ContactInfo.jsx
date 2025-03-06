import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full mx-auto text-white ">
      <h4 className="text-sm uppercase tracking-widest mb-2">Let's Talk</h4>
      <h2 className="text-2xl font-bold mb-6">Speak With Expert Engineers.</h2>

      <div className="space-y-6">
        {/* Phone */}
        <div className="flex items-start space-x-4">
          <div className="text-2xl">
            <FaPhoneAlt />
          </div>
          <div>
            <p className="font-semibold">Phone:</p>
            <p>+880 1711459532</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-start space-x-4">
          <div className="text-2xl">
            <FaEnvelope />
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>info@srcl.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start space-x-4">
          <div className="text-2xl">
            <FaMapMarkerAlt />
          </div>
          <div>
            <p className="font-semibold">Address:</p>
            <p>Al-Amin Millennium Tower, Suite #A11, <br/> 75-76,Kakrail, Dhaka-1217, Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
