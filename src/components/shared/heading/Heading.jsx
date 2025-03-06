import React from "react";
import { Fade } from "react-awesome-reveal";

const Heading = ({ title1, title2 }) => {
  return (
    <Fade duration={1500} direction="down">
      <div className="py-10">
        <h1 className="text-4xl font-semibold capitalize text-center font-roboto text-[#00869e]">
          {title1} <strong className="text-[#93ff06]">{title2}</strong>
        </h1>
      </div>
    </Fade>
  );
};

export default Heading;
