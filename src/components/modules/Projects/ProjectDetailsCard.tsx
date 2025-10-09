/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

type Credential = { email: string; password: string };
type ProjectDetails = {
  overview: string;
  credentials?: {
    recruiter?: Credential;
    user?: Credential;
  };
  features?: Record<string, any>[];
  technologies?: string[];
};

type ProjectData = {
  _id: string;
  title: string;
  imageUrl: string;
  description: string;
  details: ProjectDetails;
  liveUrl: string;
  githubUrl: string;
  serverGithubUrl?: string;
};

type ProjectDetailsCardProps = {
  project: { data: ProjectData };
};

/* ---------------- Features ---------------- */
const FeaturesList = ({ features }: { features: ProjectDetails["features"] }) => {
  if (!features || features.length === 0) return null;
  return (
    <section>
      <h3 className="font-semibold text-lg mb-3 border-b pb-1">✨ Features</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
        {features.map((feature, idx) => (
          <li key={idx} className="leading-relaxed">
            {Object.values(feature).join(" – ")}
          </li>
        ))}
      </ul>
    </section>
  );
};

/* ---------------- Technologies ---------------- */
const TechnologiesList = ({ technologies }: { technologies: ProjectDetails["technologies"] }) => {
  if (!technologies || technologies.length === 0) return null;
  return (
    <section>
      <h3 className="font-semibold text-lg mb-3 border-b pb-1">🛠 Technologies</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 text-xs rounded-full bg-gray-100 border text-gray-800 font-medium shadow-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

/* ---------------- Credentials ---------------- */
const CredentialsSection = ({ credentials }: { credentials?: ProjectDetails["credentials"] }) => {
  if (!credentials) return null;
  const { recruiter, user } = credentials;
  return (
    <section>
      <h3 className="font-semibold text-lg mb-3 border-b pb-1">🔑 Demo Credentials</h3>
      <div className="grid gap-2 text-sm text-gray-700">
        {recruiter && (
          <div className="p-3 bg-gray-50 rounded border">
            <strong className="block text-gray-900">Recruiter</strong>
            <span>{recruiter.email} / {recruiter.password}</span>
          </div>
        )}
        {user && (
          <div className="p-3 bg-gray-50 rounded border">
            <strong className="block text-gray-900">User</strong>
            <span>{user.email} / {user.password}</span>
          </div>
        )}
      </div>
    </section>
  );
};

/* ---------------- Links ---------------- */
const ProjectLinks = ({
  liveUrl,
  githubUrl,
  serverGithubUrl,
}: {
  liveUrl: string;
  githubUrl: string;
  serverGithubUrl?: string;
}) => (
  <section>
    <h3 className="font-semibold text-lg mb-3 border-b pb-1">🔗 Links</h3>
    <div className="flex flex-col gap-1 text-sm">
      <a
        href={liveUrl}
        target="_blank"
        className="text-green-700 hover:text-green-900 hover:underline transition-colors"
      >
        🌐 Live Site ↗
      </a>
      <a
        href={githubUrl}
        target="_blank"
        className="text-gray-700 hover:text-black hover:underline transition-colors"
      >
        💻 Client Repo ↗
      </a>
      {serverGithubUrl && (
        <a
          href={serverGithubUrl}
          target="_blank"
          className="text-gray-700 hover:text-black hover:underline transition-colors"
        >
          ⚙️ Server Repo ↗
        </a>
      )}
    </div>
  </section>
);

/* ---------------- Main Card ---------------- */
const ProjectDetailsCard = ({ project }: ProjectDetailsCardProps) => {
  const p = project?.data;
  if (!p) return <div className="text-red-500">Project data not found.</div>;

  return (
    <Card className="shadow-xl border border-gray-200 rounded-xl overflow-hidden">
      {/* Header */}
      <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
        <CardTitle className="text-3xl font-bold text-gray-900">{p.title}</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="space-y-8 mt-4">
        {/* Image */}
        <div className="rounded-lg overflow-hidden border">
          <Image
            src={p.imageUrl}
            alt={p.title}
            className="w-full h-72 object-cover"
            width={800}
            height={400}
            priority
          />
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed">{p.description}</p>

        {/* Overview */}
        <section>
          <h3 className="font-semibold text-lg mb-3 border-b pb-1">📌 Overview</h3>
          <p className="text-gray-700 leading-relaxed">{p.details.overview}</p>
        </section>

        {/* Sections */}
        <FeaturesList features={p.details.features} />
        <TechnologiesList technologies={p.details.technologies} />
        <CredentialsSection credentials={p.details.credentials} />
        <ProjectLinks
          liveUrl={p.liveUrl}
          githubUrl={p.githubUrl}
          serverGithubUrl={p.serverGithubUrl}
        />
      </CardContent>
    </Card>
  );
};

export default ProjectDetailsCard;
