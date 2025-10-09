"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, PlusCircle, LogOut, Menu, X, FileText } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";

export default function Sidebar() {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Mobile top bar with menu button */}
      <div className="lg:hidden flex items-center justify-between bg-black text-white px-4 py-3 border-b">
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <button onClick={() => setIsOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Sidebar drawer for mobile */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-black text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex lg:flex-col`}
      >
        {/* Close button (only mobile) */}
        <div className="flex items-center justify-between px-4 py-3 border-b lg:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="flex flex-col min-h-screen justify-between">
          {/* Top navigation */}
          <nav className="flex-1 space-y-2 p-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-4 w-4" />
              Home
            </Link>

            <Link
              href="/dashboard/create-blog"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <PlusCircle className="h-4 w-4" />
              Create Blog
            </Link>

            <Link
              href="/dashboard/view-blogs"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-100 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <FileText className="h-4 w-4" />
              All Blogs
            </Link>
          </nav>

          {/* Bottom action */}
          <div className="p-4 border-t border-gray-500">
            {session.status === "authenticated" && (
              <Button
                variant="destructive"
                className="w-full justify-start gap-2 cursor-pointer"
                onClick={() => {
                  setIsOpen(false);
                  signOut();
                }}
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Background overlay when drawer is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
