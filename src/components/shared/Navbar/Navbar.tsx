"use client";

import { useState, useEffect } from "react";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { UserMenu } from "./user-menu";

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <nav className="fixed top-4 inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full bg-background/80 backdrop-blur-md border border-slate-300/40 dark:border-slate-700/70 z-50 transition-all">
      <div className="flex h-full items-center justify-between px-5 md:px-8">
        {/* Left: Logo + Menu */}
        <NavMenu className="hidden md:flex" />

        {/* Right: User + Mobile menu */}
        <div className="flex items-center gap-4">
          {mounted && <UserMenu />}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};
