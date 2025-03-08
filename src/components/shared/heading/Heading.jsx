import React from "react";
import PropTypes from "prop-types";
import { Fade } from "react-awesome-reveal";

const Heading = ({ title1, title2 }) => {
  return (
    <Fade duration={1500} direction="down">
      <div className="pb-10">
        <h1 className="text-4xl font-semibold capitalize text-center font-roboto text-[#00869e]">
          {title1} <strong className="text-[#8CC63F]">{title2}</strong>
        </h1>
      </div>
    </Fade>
  );
};
Heading.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};

export default Heading;
