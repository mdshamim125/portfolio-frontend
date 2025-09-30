// export const getBlogById = async (blogId: string) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`);
//   return await res.json();
// };

// Create a new blog
export const createBlog = async (blogData: any) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blogData),
  });
  return await res.json();
};

// Get all blogs
export const getAllBlogs = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    cache: "no-store", // prevents stale cache in Next.js (optional)
  });
  return await res.json();
};

// Get blog by ID
export const getBlogById = async (blogId: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`);
  return await res.json();
};

// Update blog
export const updateBlog = async (blogId: string, blogData: any) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    }
  );
  return await res.json();
};

// Delete blog
export const deleteBlog = async (blogId: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_API}/blog/${blogId}`,
    {
      method: "DELETE",
    }
  );
  return await res.json();
};
