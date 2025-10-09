/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import { getAllBlogs } from "@/services/BlogServices";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Blogs | Next Blog",
  description:
    "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
};

const AllBlogsPage = async () => {
  const blogs = await getAllBlogs();

  return (
    <div className="py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-3xl sm:text-4xl font-semibold mb-10">
        All Blogs
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
        {blogs.map((blog: any) => (
          <BlogCard key={blog._id} post={blog} />
        ))}
      </div>
    </div>
  );
};

export default AllBlogsPage;
