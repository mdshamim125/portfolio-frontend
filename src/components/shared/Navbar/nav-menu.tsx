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
  <nav className="flex items-center justify-between w-full px-4 py-2 bg-transparent">
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

    <NavigationMenu {...props}>
      <NavigationMenuList className="gap-6 font-medium">
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/">Home</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/projects">Projects</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/blogs">Blogs</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link href="/about">About</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  </nav>
);
