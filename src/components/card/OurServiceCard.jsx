import React from "react";
import PropTypes from "prop-types";
import { Card } from "antd";
import { Link } from "react-router";

const ServiceCard = ({ service }) => {
  //
  return (
    //
    <Card
      className="p-1 w-full"
      cover={
        <figure className="overflow-hidden relative">
          <img
            className="w-full mx-auto rounded-lg hover:scale-110 transition-all ease-in-out overflow-hidden"
            alt={service?.title}
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          {/*  */}
          <h2 className="absolute bottom-0 bg-[#241b1ce6] w-full text-left text-white capitalize text-sm font-normal px-2 py-1 rounded-b-lg">
            {service?.title}
          </h2>
        </figure>
      }
    >
      {/* content */}
      <p className="text-xs text-center py-2">
        {service?.short_desc}... <Link to={`/services/${service?._id}`} className="text-blue-700 underline truncate">View Details</Link>
      </p>
    </Card>
  );
};
//
ServiceCard.propTypes = {
  service: PropTypes.shape({
    title: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    short_desc: PropTypes.string,
  }),
};

export default ServiceCard;
