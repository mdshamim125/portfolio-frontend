/* eslint-disable @typescript-eslint/no-explicit-any */
import AboutMe from "@/components/modules/Home/AboutMe";
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
    <div className="bg-slate-900 text-white">
      {/* Hero/About Section */}
      <AboutMe personal={personalInfo} />

      {/* Featured Blogs Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">
            Featured Posts
          </h2>

          {blogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {blogs.slice(0, 3).map((blog: any) => (
                  <BlogCard key={blog._id} post={blog} />
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/blogs"
                  className="inline-block px-6 py-2.5 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300 text-white font-medium text-sm sm:text-base"
                >
                  See All Blogs
                </Link>
              </div>
            </>
          ) : (
            <p className="text-gray-400 text-base sm:text-lg mt-6">
              No blogs found.
            </p>
          )}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">My Projects</h2>

          {projects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {projects.slice(0, 3).map((project: any) => (
                  <ProjectCard key={project._id} project={project} />
                ))}
              </div>
              <div className="mt-10">
                <Link
                  href="/projects"
                  className="inline-block px-6 py-2.5 bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300 text-white font-medium text-sm sm:text-base"
                >
                  See All Projects
                </Link>
              </div>
            </>
          ) : (
            <p className="text-gray-400 text-base sm:text-lg mt-6">
              No projects found.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
