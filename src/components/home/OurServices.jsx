import React from "react";
import Heading from "../shared/heading/Heading";
import useOurServices from "../hooks/useOurServices";
import { Link } from "react-router";
import { Fade } from "react-awesome-reveal";
import ServicesCard from "../card/ServicesCard";
import SeeAllButton from "../button/SeeAllButton";

const OurServices = () => {
  const [services] = useOurServices();
  //
  return (
    <div>
      <Heading title1={"Featured"} title2={"services"} />
      {/*  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.length > 0 && (
            <>
              {services.slice(0, 6)?.map((service) => (
                <ServicesCard key={service?._id} service={service} />
              ))}
            </>
          )}
        </div>
      <Link to={"/services"} className="text-center font-roboto block -mb-40">
        <button value={"outline"} className="font-medium text-lg bg">
           <SeeAllButton />
        </button>
      </Link>
    </div>
  );
};

export default OurServices;
