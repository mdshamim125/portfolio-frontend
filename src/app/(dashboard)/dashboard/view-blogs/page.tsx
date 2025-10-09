"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pencil, Trash } from "lucide-react";

type Blog = {
  _id: string;
  title: string;
  author: string;
  category: string;
  createdAt: string;
};

const ViewAllBlogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/blog`, {
          cache: "no-store", // always fresh
        });
        const data = await res.json();
        setBlogs(data?.data || []); // assuming { data: [...] }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <p className="text-center py-6">Loading blogs...</p>;
  }

  return (
    <Card className="max-w-6xl mx-auto mt-10 shadow-md">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-6">All Blogs</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <TableRow key={blog._id}>
                  <TableCell className="font-medium">{blog.title}</TableCell>
                  <TableCell>{blog.author}</TableCell>
                  <TableCell>{blog.category}</TableCell>
                  <TableCell>
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="text-center flex justify-between items-center space-x-2">

                    {/* Edit Blog */}
                    <Link href={`/edit-blog/${blog._id}`}>
                        <Pencil className="h-4 w-4" />
                    </Link>

                    {/* Delete Blog */}
                    <Button variant="destructive" size="icon">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-4">
                  No blogs found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ViewAllBlogs;
