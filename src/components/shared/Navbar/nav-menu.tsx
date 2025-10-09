/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";

export const NavMenu = (props: any) => (
  <nav className="flex items-center justify-between w-full">
    {/* Logo */}
    <Link href="/" className="flex items-center gap-3 relative">
      <div className="relative">
        <Image
          src="https://i.ibb.co/6BDDyvD/portfolio.png"
          alt="Logo"
          width={40}
          height={40}
          priority
          className="w-10 h-10 rounded-md shadow-lg border border-sky-500/30 relative z-10"
        />
        <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-sky-400 to-indigo-500 opacity-30 blur-sm"></div>
      </div>
      <span className="font-semibold text-lg text-sky-600 hidden sm:block">Shamim</span>
    </Link>

    {/* Desktop Links */}
    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-8 font-medium">
        {[
          { href: "/", label: "Home" },
          { href: "/projects", label: "Projects" },
          { href: "/blogs", label: "Blogs" },
          { href: "/about", label: "About" },
        ].map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink asChild>
              <Link
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-sky-500 transition-colors"
              >
                {item.label}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  </nav>
);
