
"use client";

import { useState } from "react";
import { Container, Icons } from "@/components";

import Link from "next/link";

const Navbar = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="px-4 h-14 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <Container reverse>
        <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
          {/* Logo */}
          <div className="flex items-start">
            <Link href="/" className="flex items-center gap-2">
              <Icons.logo className="w-8 h-8" />
              <span className="text-lg font-medium">Astra</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center justify-center gap-8">
              <Link href="#" className="hover:text-foreground/80 text-sm">Home</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">About</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Skills</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Projects</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Services</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Blog</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Contacts</Link>
             
              
            </ul>
          </nav>

          {/* Hamburger Icon (Visible on Mobile) */}
          <button
            className="block md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {/* add hamburger */}
            <Icons.logo className="w-6 h-6" />
          </button>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-14 left-0 right-0 bg-background shadow-lg">
              <ul className="flex flex-col items-center gap-4 py-4">
              <Link href="#" className="hover:text-foreground/80 text-sm">Home</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">About</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Skills</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Projects</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Services</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Blog</Link>
              <Link href="#" className="hover:text-foreground/80 text-sm">Contacts</Link>
              </ul>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Navbar;
