// Get all projects
export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project`, {
    cache: "no-store", // prevents stale cache in Next.js (optional)
  });
  return await res.json();
};

// Get project by ID
export const getBlogById = async (id: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/project/${id}`);
  return await res.json();
};
