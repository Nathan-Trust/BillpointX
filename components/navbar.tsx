"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { NavLogo } from "@/components/logo";
import { cn } from "@/lib/utils"; // your utility for merging classes

export function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/terms", label: "T & C" },
    { href: "/privacy", label: "Privacy and Policy" },
    { href: "/support", label: "Support" },
  ];

  return (
    <header className="border-b border-gray-100 fixed top-0 z-50 left-0 w-full bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <NavLogo className="h-8 w-auto" />
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-gray-700 hover:text-black transition-colors",
                pathname === href && "text-black font-semibold"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
        <Button asChild className="bg-black text-white hover:bg-gray-800">
          <Link href="/download">Get the App</Link>
        </Button>
      </div>
    </header>
  );
}
