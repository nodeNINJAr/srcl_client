import React, { useEffect, useState } from "react";
import { Card, Tag, List } from "antd";
import { useParams } from "react-router";
import useOurProjects from "../../components/hooks/useOurProjects";

const ProjectDetails = () => {
  const { id } = useParams();
  const [projects] = useOurProjects();
  const [singleProject, setSingleProject] = useState({});

  useEffect(() => {
    const project = projects.find((item) => item?.id === parseInt(id));
    setSingleProject(project);
  }, [id, projects]);

  if (!singleProject) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 font-roboto">
      <div className="w-11/12 mx-auto">
          <div className="flex flex-col space-y-6">
            <img
              src={singleProject?.image}
              alt={singleProject?.title?.substr(0, 10)}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Tag
              color={singleProject?.category === "OnGoing" ? "blue" : "green"}
              style={{ marginBottom: "16px" }}
            >
              Category: {singleProject?.category}
            </Tag>
            <h1 className="text-3xl font-bold">{singleProject?.title}</h1>
            <p className="text-gray-700">{singleProject?.description}</p>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Client</h2>
              <p className="text-gray-600">{singleProject?.client}</p>

              <h2 className="text-xl font-semibold">Funded By</h2>
              <p className="text-gray-600">{singleProject?.funded_by}</p>
              </div>
          </div>
        </div>
      </div>
  );
};

export default ProjectDetails;