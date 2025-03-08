
import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";

// 
const OurProjectCard = ({ id, title, description, image }) => {
  return (
    <div>
        <figure className="overflow-hidden">
          <img
            loading="lazy"
            className="w-full h-44 mx-auto rounded-lg hover:scale-110 transition-all ease-in-out overflow-hidden bg-black/10 bg-blend-multiply"
            alt={title?.substr(0, 10)}
            src={image}
          />
        </figure>
        {/* content */}
        <h2 className="text-left text-gray-700 capitalize text-sm font-Poppins font-medium py-1 rounded-b-lg mt-4">
          {title}
        </h2>
        <p className="text-xs text-left py-2 font-roboto text-gray-500">
          {description.substr(0, 70)}
          <Link to={`/projects/${id}`} className="text-blue-700 underline ml-1">
             Readmore
          </Link>
        </p>
    </div>
  );
};
OurProjectCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default OurProjectCard;
