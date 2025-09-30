/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectCardProps = {
  project: {
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
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="hover:shadow-xl transition">
      <CardHeader>
        <CardTitle className="line-clamp-1">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="rounded-lg mb-3 w-full h-40 object-cover"
        />
        <p className="line-clamp-3 text-muted-foreground mb-3">
          {project.shortDesc}
        </p>

        {/* Links */}
        <div className="space-y-1">
          <Link
            href={`/projects/${project._id}`}
            className="text-blue-600 hover:underline block"
          >
            View Details →
          </Link>

          <Link
            href={project.liveUrl}
            target="_blank"
            className="text-green-600 hover:underline block"
          >
            Live Site ↗
          </Link>

          <Link
            href={project.githubUrl}
            target="_blank"
            className="text-gray-700 hover:underline block"
          >
            Client Repo (GitHub) ↗
          </Link>

          {project.serverGithubUrl && (
            <Link
              href={project.serverGithubUrl}
              target="_blank"
              className="text-gray-700 hover:underline block"
            >
              Server Repo (GitHub) ↗
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
