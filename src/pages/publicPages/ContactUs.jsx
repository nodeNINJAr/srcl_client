import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContactInfo from "../../components/contact/ContactInfo";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import {notification, Spin } from 'antd';

const ContactUs = () => {
const axiosSecure = useAxiosSecure();
const [isLoading, setIsLoading] = useState(false);

  // 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


   // post submit function
   const onSubmit = async (data) => {
    setIsLoading(!isLoading);
    try {
  
      // Prepare the contact info object
      const contactInfo = {
        name: data?.name,
        email: data?.email,
        phoneNumber: data?.phone,
        whatsappNumber: data?.whatsapp,
        message: data?.message,
      };
  
      // Send the data to the server
      const response = await axiosSecure.post('/api/user/contact', contactInfo);
      setIsLoading(isLoading)
      // Log the response and show a success notification
      notification.success({
        message: `${response?.data?.message}`,
        placement: "topRight",
      });
      reset();
    } catch (err) {
    
      // Log the error for debugging
      notification.error({
        message: `${err?.response?.data?.message}`,
        placement: "topRight",
      });
    }
    finally{
      setIsLoading(isLoading)
    }
  };

  //
  return (
    <section className="flex items-center justify-center min-h-screen bg-white py-10 md:py-20">
      <div className="px-2 sm:px-0 sm:w-11/12 grid grid-cols-1 md:grid-cols-5 gap-y-8 gap-x-20">
        {/* Left Side - Contact Information */}
        <div className="col-span-1 md:col-span-2 bg-gradient-to-b from-blue-900 to-[#006837] p-6 rounded-lg shadow-lg">
          <ContactInfo />
        </div>
        {/* Right Side - Contact Form */}
        <div className="col-span-1 md:col-span-3">
           <div className="mb-8">
              <p className="text-blue-600 font-Varela font-semibold my-4">Get In Touch</p>
              <h2 className="text-4xl font-bold font-Albert mt-3">Fill The Form Below</h2>
           </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-roboto">
            <div className="flex justify-between items-start gap-4">
              {/* input 1 */}
              <div className="w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 border border-[#F6F7F9]  rounded focus:outline-none bg-[#F6F7F9]"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              {/* input 2 */}
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Business E-mail"
                  className="w-full p-4 border border-[#F6F7F9]  rounded focus:outline-none bg-[#F6F7F9]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
            </div>
            {/* input wrap */}
            <div className="flex justify-between items-start gap-4">
              {/* input 3 */}
              <div className="w-full">
                <input
                  type="tel"
                  placeholder="Phone number"
                  className="w-full p-4 border border-[#F6F7F9]  rounded focus:outline-none bg-[#F6F7F9]"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              {/* input 4 */}
              <div className="w-full">
                <input
                  type="tel"
                  placeholder="Whatsapp Number"
                  className="w-full p-4 border border-[#F6F7F9]  rounded focus:outline-none bg-[#F6F7F9]"
                  {...register("whatsapp", {
                    required: "Whatsapp number is required",
                  })}
                />
                {errors.whatsapp && (
                  <p className="text-red-500 text-sm">{errors.whatsapp.message}</p>
                )}
              </div>
            </div>
            {/* message area */}
            <div>
              <textarea
                rows="4"
                placeholder="Write your message"
                className="w-full p-4 border border-[#F6F7F9]  rounded focus:outline-none bg-[#F6F7F9]"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="flex justify-center items-center gap-3 cursor-pointer w-full bg-gradient-to-r from-blue-900 to-[#006837] text-white py-2 rounded hover:bg-gradient-to-l transition-all ease-in-out hover:from-blue-900 hover:to-[#006837] duration-300"
            >
             {isLoading && <Spin size="small"/>} Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
