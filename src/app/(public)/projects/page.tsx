/* eslint-disable @typescript-eslint/no-explicit-any */
import ProjectCard from "@/components/modules/Projects/ProjectCard";
import { Metadata } from "next";

type Project = {
  _id: string; // ObjectId from MongoDB
  title: string;
  shortDesc: string;
  imageUrl: string;
  description: string;
  details: {
    overview: string;
    credentials?: {
      recruiter?: {
        email: string;
        password: string;
      };
      user?: {
        email: string;
        password: string;
      };
    };
  };
  features: { [key: string]: any }[];
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  serverGithubUrl?: string; // optional
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
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Projects</h2>
      <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
        {projects.map((project: Project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default AllProjectsPage;
