import React from "react";
import Heading from "../shared/heading/Heading";
import ServiceCard from "../card/OurServiceCard";
import useOurServices from "../hooks/useOurServices";
import { Button } from "antd";
import { Link } from "react-router";

const OurServices = () => {

  const [services] = useOurServices();
  console.log(services);
  //
  return (
    <div>
      <Heading title1={"Featured"} title2={"services"} />
      {/*  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.length > 0 && (
          <>
            {services.slice(0,4)?.map((service) => (
              <ServiceCard key={service?._id} service={service} />
            ))}
          </>
        )}
      </div>
      <Link to={'/services'} className="text-center font-roboto mt-6 block">
          <Button style={{fontFamily:"font-roboto", fontWeight:500,fontSize:'1rem'}} value={'outline'} className="bg-transparent font-medium text-lg">See All Services</Button>
      </Link>
    </div>
  );
};

export default OurServices;
