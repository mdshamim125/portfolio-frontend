import BlogDetailsCard from "@/components/modules/Blogs/BlogDetailsCard";
import { getBlogById } from "@/services/BlogServices";
import React from "react";
import { Metadata } from "next";

// export const generateStaticParams = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`);
//   const { data: blogs } = await res.json();

//   return blogs.slice(0, 2).map((blog: any) => ({
//     blogId: String(blog.id),
//   }));
// };

export const generateMetadata = async ({
  params,
}: {
  params: { blogId: string };
}): Promise<Metadata> => {
  const blog = await getBlogById(params.blogId);

  return {
    title: blog?.title || "Blog Details",
    description: blog?.content?.slice(0, 150) || "Read the full blog post.",
  };
};

const BlogDetailsPage = async ({ params }: { params: { blogId: string } }) => {
  const blog = await getBlogById(params.blogId);

  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <BlogDetailsCard blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
