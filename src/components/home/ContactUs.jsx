import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import ContactBtn from "../button/ContactBtn/ContactBtn";

const ContactUs = () => {
  return (
    <section className="bg-[#0000009e]  py-20 text-white px-6 md:px-12 lg:px-20 text-center font-Poppins">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-5xl font-Varela font-bold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">
          Have any questions? Reach out to us, and we'll be happy to assist you!
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 mb-6">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-2xl" />
            <span>+880 1711459532</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-2xl" />
            <span>info@srcl.com</span>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-2xl" />
            <span>Al-Amin Millennium Tower, Suite #A11, <br/> 75-76,Kakrail, Dhaka-1217, Bangladesh</span>
          </div>
        </div>
        {/* contact btn */}
        <ContactBtn/>
      </div>
    </section>
  );
};

export default ContactUs;
