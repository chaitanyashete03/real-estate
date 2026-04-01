"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-white/90 shadow-md backdrop-blur-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-secondary font-bold text-xl">
            DB
          </div>
          <span
            className={cn(
              "font-display font-bold text-xl tracking-wide",
              isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
            )}
          >
            Dilip Bhandge
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-secondary",
                    isScrolled ? "text-gray-700" : "text-gray-200"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:+919876543210">
            <Button
              variant={isScrolled ? "default" : "outline"}
              className={cn(
                "rounded-full px-6",
                !isScrolled && "border-white text-white hover:bg-white/20"
              )}
            >
              <PhoneCall size={18} className="mr-2" /> Let's Talk
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden z-50 p-2",
            isScrolled || isMobileMenuOpen ? "text-gray-900" : "text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col items-center justify-center bg-white transition-transform duration-300 ease-in-out md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <ul className="flex flex-col items-center gap-8 text-2xl font-semibold text-primary font-display">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-secondary transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <a href="tel:+919876543210" className="mt-12 w-full px-12">
          <Button className="w-full bg-secondary text-primary" size="lg">
            <PhoneCall size={20} className="mr-2" /> Call Now
          </Button>
        </a>
      </div>
    </header>
  );
}
