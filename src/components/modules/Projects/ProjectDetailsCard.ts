/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ProjectDetailsCardProps = {
  project: {
    _id: string;
    title: string;
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
};

const ProjectDetailsCard = ({ project }: ProjectDetailsCardProps) => {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={project.imageUrl}
          alt={project.title}
          className="rounded-lg mb-4 w-full h-60 object-cover"
        />

        <p className="mb-4 text-gray-700">{project.description}</p>

        {/* Overview */}
        <div className="mb-4">
          <h3 className="font-semibold">Overview</h3>
          <p>{project.details.overview}</p>
        </div>

        {/* Features */}
        <div className="mb-4">
          <h3 className="font-semibold">Features</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {project.features.map((f, idx) => (
              <li key={idx}>{Object.values(f).join(" - ")}</li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-4">
          <h3 className="font-semibold">Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded bg-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Credentials (if exist) */}
        {project.details.credentials && (
          <div className="mb-4">
            <h3 className="font-semibold">Demo Credentials</h3>
            <div className="text-sm">
              {project.details.credentials.recruiter && (
                <p>
                  Recruiter → {project.details.credentials.recruiter.email} /{" "}
                  {project.details.credentials.recruiter.password}
                </p>
              )}
              {project.details.credentials.user && (
                <p>
                  User → {project.details.credentials.user.email} /{" "}
                  {project.details.credentials.user.password}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Links */}
        <div className="space-y-1">
          <a
            href={project.liveUrl}
            target="_blank"
            className="text-green-600 hover:underline block"
          >
            Live Site ↗
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            className="text-gray-700 hover:underline block"
          >
            Client Repo ↗
          </a>
          {project.serverGithubUrl && (
            <a
              href={project.serverGithubUrl}
              target="_blank"
              className="text-gray-700 hover:underline block"
            >
              Server Repo ↗
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectDetailsCard;
