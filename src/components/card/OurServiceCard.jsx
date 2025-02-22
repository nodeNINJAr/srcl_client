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
            alt={service?.name}
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
          {/*  */}
          <h2 className="absolute bottom-0 bg-[#241b1ce6] w-full text-left text-white capitalize text-sm font-normal px-2 py-1 rounded-b-lg">
            {service?.name}
          </h2>
        </figure>
      }
    >
      {/* content */}
      <p className="text-xs text-center py-2">
        {service?.description.substring(0, 80)}... <Link to={`services/${service?.id}`} className="text-blue-700 underline">Readmore</Link>
      </p>
    </Card>
  );
};
//
ServiceCard.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default ServiceCard;
