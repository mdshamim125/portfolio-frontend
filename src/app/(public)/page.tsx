/* eslint-disable @typescript-eslint/no-explicit-any */
import Hero from "@/components/modules/Home/Hero";
import BlogCard from "@/components/modules/Blogs/BlogCard";
import ProjectCard from "@/components/modules/Projects/ProjectCard";
import { personalInfo } from "@/lib/data/personalInfo";
import Link from "next/link";

export default async function HomePage() {
  // Fetch blogs
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    next: { tags: ["BLOGS"] },
  });
  const { data: blogs } = await res.json();

  // Fetch projects
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    next: { tags: ["PROJECTS"] },
  });
  const { data: projects } = await response.json();

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <Hero personal={personalInfo} />

      {/* Featured Blogs */}
      <section className="my-10">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
          Featured Posts
        </h2>
        {blogs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {blogs.slice(0, 3).map((blog: any) => (
                <BlogCard key={blog._id} post={blog} />
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/blogs"
                className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                See All Blogs
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No blogs found.</p>
        )}
      </section>

      {/* Featured Projects */}
      <section className="my-10">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-6">
          My Projects
        </h2>
        {projects.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {projects.slice(0, 3).map((project: any) => (
                <ProjectCard key={project._id} project={project} />
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/projects"
                className="inline-block px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                See All Projects
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </section>
    </div>
  );
}
