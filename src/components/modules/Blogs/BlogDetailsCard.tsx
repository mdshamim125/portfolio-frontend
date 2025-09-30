import Image from "next/image";

type BlogDetailsCardProps = {
  blog: {
    _id: string; // ObjectId from MongoDB
    title: string;
    content: string;
    author: string;
    category?: string;
    tags?: string[];
    thumbnail?: string;
    createdAt: string; // ISO string from MongoDB
    updatedAt: string; // ISO string from MongoDB
  };
};

export default function BlogDetailsCard({
  blog,
}: {
  blog: BlogDetailsCardProps["blog"];
}) {
  // console.log("Blog data:", blog);

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
      {/* Thumbnail */}
      {blog.thumbnail && (
        <div className="relative h-72 w-full">
          <Image
            src={blog.thumbnail}
            alt={blog.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {blog.title}
        </h1>

        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
          <span>✍️ {blog.author}</span>
          <span>
            📅 {new Date(blog.createdAt).toLocaleDateString()} •{" "}
            {new Date(blog.updatedAt).toLocaleDateString()}
          </span>
          {blog.category && (
            <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200 text-xs">
              {blog.category}
            </span>
          )}
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-6">
          <p>{blog.content}</p>
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
