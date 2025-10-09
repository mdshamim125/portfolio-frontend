/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from "@/components/modules/Projects/ProjectCard";
import { Metadata } from "next";

type Project = {
  _id: string;
  title: string;
  shortDesc: string;
  imageUrl: string;
  description: string;
  details: {
    overview: string;
    credentials?: {
      recruiter?: { email: string; password: string };
      user?: { email: string; password: string };
    };
  };
  features: { [key: string]: any }[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  serverGithubUrl?: string;
};

export const metadata: Metadata = {
  title: "All Projects | Portfolio",
  description:
    "Browse all personal and professional projects. See case studies, live demos, and technical features.",
};

const AllProjectsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store",
  });
  const { data: projects } = await res.json();

  return (
    <div className="py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-10">
        All Projects
      </h2>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3 
          gap-6 
          sm:gap-8
          place-items-center
        "
      >
        {projects.map((project: Project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
