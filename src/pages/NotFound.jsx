import React from "react";
import { Link } from "react-router"; // Use `next/link` if you're using Next.js

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600 mt-4">Oops! Page Not Found</p>
        <p className="text-lg text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Back to Home Button */}
        <Link
          to="/" // Use `href="/"` if you're using Next.js
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>

      {/* Optional: Add an illustration or image */}
      <div className="mt-12">
        <img
          src="https://illustrations.popsy.co/amber/falling.svg" // Replace with your own illustration
          alt="404 Illustration"
          className="w-64 h-64"
        />
      </div>
    </div>
  );
};

export default NotFound;