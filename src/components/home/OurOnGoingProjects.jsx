import React from "react";
import Heading from "../shared/heading/Heading";
import OurProjectCard from "../card/OurProjectCard";
import useOurProjects from "../hooks/useOurProjects";
import { Fade } from "react-awesome-reveal";

//
const OurOnGoingProjects = () => {
  const [projects] = useOurProjects();
  //
  return (
    <>
      <Heading title1={"Ongoing"} title2={"Projects"} />
      {/*  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* card */}
        {projects
          .filter((item) => item?.category === "Ongoing")
          .map((project) => (
            <Fade
              className="bg-white rounded-lg  p-3"
              duration={2000}
              direction="fade"
              key={project?.id}
            >
              <OurProjectCard {...project} />
            </Fade>
          ))}
      </div>
    </>
  );
};

export default OurOnGoingProjects;
