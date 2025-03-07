import { Card } from "antd";
import React from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

const OurProjectCard = ({ id, title, short_description, image }) => {
  return (
    <div className="bg-white">
      <Fade duration={1500} direction="up">
        <Card
          className="p-3"
          cover={
            <figure className="overflow-hidden">
              <img
                className="w-full mx-auto rounded-lg hover:scale-110 transition-all ease-in-out overflow-hidden"
                alt={title}
                src={image}
              />
            </figure>
          }
        >
          {/* content */}
          <h2 className="text-left text-gray-700 capitalize text-sm font-medium py-1 rounded-b-lg">
            {title}
          </h2>
          <p className="text-xs text-left py-2">
            {short_description}
            <Link to={`/projects/${id}`} className="text-blue-700 underline">
              Readmore
            </Link>
          </p>
        </Card>
      </Fade>
    </div>
  );
};
OurProjectCard.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default OurProjectCard;
