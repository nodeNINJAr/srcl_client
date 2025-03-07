import React from "react";
import useOurProjects from "../hooks/useOurProjects";
import Heading from "../shared/heading/Heading";
import OurProjectCard from "../card/OurProjectCard";
import { Fade } from "react-awesome-reveal";

const OurLandmarkProjects = () => {
  const [projects, isLoading] = useOurProjects();
  return (
    <>
      <Heading title1={"Notable"} title2={"Projects"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* card */}
        {projects?.filter(item=>item?.category=== "Completed").slice(0, 8).map((project) => (
          <OurProjectCard key={project?.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default OurLandmarkProjects;
