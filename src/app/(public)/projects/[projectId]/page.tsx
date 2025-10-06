import React from "react";
import { Metadata } from "next";
import { getProjectById } from "@/services/ProjectServices";
import ProjectDetailsCard from "@/components/modules/Projects/ProjectDetailsCard";

// Correct typing: params is a Promise in App Router
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> => {
  const { projectId } = await params; // ✅ await params
  const project = await getProjectById(projectId);

  return {
    title: project?.title || "Project Title",
    description:
      project?.description?.slice(0, 150) || "Read the full project post.",
  };
};

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params; // ✅ await params
  const project = await getProjectById(projectId);

  console.log(project)

  if (!project) {
    return (
      <div className="py-30 px-4 max-w-7xl mx-auto">
        <p className="text-center text-gray-500">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <ProjectDetailsCard project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
