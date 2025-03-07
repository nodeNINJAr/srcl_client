import React from "react";
import useOurProjects from "../../../components/hooks/useOurProjects";
import OurProjectCard from "../../../components/card/OurProjectCard";
import HeadingTitle from "../../../components/shared/heading/HeadingTitle";

const Completed = () => {
  //
  const [projects] = useOurProjects();
  const completedProjects = projects?.filter(
    (item) => item?.category === "Completed"
  );
  //
  return (
    <div className="pb-10 pt-6">
       <HeadingTitle title={'Completed Projects'}/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {completedProjects.map((item) => (
          <OurProjectCard key={item?.id} {...item}/>
        ))}
      </div>
    </div>
  );
};

export default Completed;
