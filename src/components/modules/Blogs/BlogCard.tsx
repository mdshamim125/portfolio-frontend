import Link from "next/link";
import Image from "next/image";


export type BlogCardProps = {
  post: {
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


export default function BlogCard({ post }: { post: BlogCardProps["post"] }) {
  return (
    <Link
      href={`/blogs/${post._id}`}
      className="block group transform hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        {/* Thumbnail */}
        {post.thumbnail ? (
          <div className="relative h-56 w-full overflow-hidden">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="h-56 w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-300">
            No Image
          </div>
        )}

        <div className="p-6">
          {/* Title */}
          <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          {/* Short content preview */}
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">
            {post.content}
          </p>

          {/* Meta info */}
          <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-400">
            <span>✍️ {post.author}</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>

          {/* Category & Tags */}
          {(post.category || post.tags) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.category && (
                <span className="px-2 py-1 text-xs rounded bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-200">
                  {post.category}
                </span>
              )}
              {post.tags?.map((tag: any, idx:any) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More */}
          <div className="text-right">
            <span className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
