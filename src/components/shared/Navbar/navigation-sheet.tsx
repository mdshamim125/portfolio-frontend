"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export const NavigationSheet = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/about", label: "About" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="p-2 rounded-md border border-gray-200 dark:border-slate-700">
        <Menu className="h-5 w-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-64 p-6">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co/6BDDyvD/portfolio.png"
              alt="Logo"
              width={32}
              height={32}
              className="rounded-md border border-sky-500/30"
            />
            <span className="text-sky-600 font-semibold">Shamim</span>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-6 text-lg font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="hover:text-sky-500 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};
