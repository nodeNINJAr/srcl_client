import React, { useEffect, useState } from "react";
import { Card, Tag } from "antd";
import { useParams } from "react-router";
import useOurProjects from "../../components/hooks/useOurProjects";

const ProjectDetails = () => {
 const {id} = useParams();
 const [projects] = useOurProjects();
 const [singleProject, setSingleProject] = useState({});
//  
  useEffect(()=>{
    const project = projects.find(item=> item?.id === parseInt(id)); 
    setSingleProject(project);
  },[id]);

  // 
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="w-11/12 mx-auto">
        <div>
          <img src={singleProject?.image} alt={singleProject?.title} className="w-full h-64 object-cover" />
          <Tag color={singleProject?.category === "OnGoing" ? "blue" : "green"} style={{marginBottom:"16px"}}>
           Category : {singleProject?.category}
          </Tag>
          <h1 className="text-3xl font-bold mb-4">{singleProject?.title}</h1>
          <p className="text-gray-700 mb-4">{singleProject?.short_description}</p>
          <p className="text-gray-600">{singleProject?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;