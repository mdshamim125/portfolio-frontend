"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { toast } from "sonner";

export const create = async (data: FormData) => {
  const blogInfo = Object.fromEntries(data.entries());

  const modifiedData = {
    title: blogInfo.title?.toString() || "",
    content: blogInfo.content?.toString() || "",
    author: blogInfo.author?.toString() || "Anonymous",
    category: blogInfo.category?.toString() || "General",
    thumbnail: blogInfo.thumbnail?.toString() || "",
    tags: blogInfo.tags
      ? blogInfo.tags
          .toString()
          .split(",")
          .map((tag) => tag.trim())
      : [],
  };

  // console.log(modifiedData);

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(modifiedData),
  });

  

  if (!res.ok) {
    toast.error("Failed to create blog");
  }

  const result = await res.json();
console.log(result);
  if (result?.data?.id || result?.data?._id) {
    revalidateTag("BLOGS");
    revalidatePath("/blogs");
    redirect("/blogs");
  }

  return result;
};
