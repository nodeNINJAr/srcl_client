import React from "react";
import OurProjectCard from "../../../components/card/OurProjectCard";
import useOurProjects from "../../../components/hooks/useOurProjects";
import HeadingTitle from "../../../components/shared/heading/HeadingTitle";

const OnGoing = () => {
  const [projects] = useOurProjects();
  const completedProjects = projects?.filter(
    (item) => item?.category === "OnGoing"
  );
  //
  return (
    <div className="pb-10 pt-6">
       <HeadingTitle title={'all ongoing projects'}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-content-center place-items-start">
        {completedProjects?.map((project) => (
          <OurProjectCard key={project?.id} {...project}/>
        ))}
      </div>
    </div>
  );
};

export default OnGoing;
