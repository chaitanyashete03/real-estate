"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X, PhoneCall } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 py-3 shadow-lg shadow-black/5 backdrop-blur-xl border-b border-white/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between container-padding">
        {/* Logo */}
        <Link href="/" className="group relative z-50 flex items-center gap-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-secondary font-bold text-xl transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-primary/20">
            DB
          </div>
          <div className="flex flex-col">
            <span
              className={`font-display text-xl font-bold tracking-tight leading-none transition-colors duration-300 ${
                isScrolled || isMobileMenuOpen ? "text-primary" : "text-white"
              }`}
            >
              Dilip Bhandge
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
              isScrolled || isMobileMenuOpen ? "text-gray-500" : "text-white/60"
            }`}>
              Real Estate Experts
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-10 md:flex">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative text-sm font-bold tracking-wide transition-all duration-300 hover:text-secondary group ${
                    isScrolled ? "text-gray-700" : "text-white/90"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          <a href="tel:+919876543210">
            <Button
              className={`rounded-full px-7 font-bold transition-all duration-300 ${
                isScrolled
                  ? "bg-primary text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95"
                  : "bg-white/10 text-white border border-white/30 backdrop-blur-md hover:bg-white/20 hover:scale-105 active:scale-95"
              }`}
            >
              <PhoneCall size={16} className="mr-2" /> Let's Talk
            </Button>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`z-50 rounded-xl p-2 transition-colors md:hidden ${
            isScrolled || isMobileMenuOpen ? "text-primary bg-gray-100" : "text-white bg-white/10 backdrop-blur-sm"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/95 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #0A2472 1px, transparent 0)', backgroundSize: '24px 24px' }} />
        
        <nav className="relative z-10 flex flex-col items-center">
          <ul className="flex flex-col items-center gap-10 text-center">
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isMobileMenuOpen ? 1 : 0
                }}
                className="transition-all duration-500"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-display text-4xl font-bold text-primary transition-colors hover:text-secondary"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div 
             className="mt-16 w-64 transition-all duration-700 delay-300"
             style={{ 
               transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
               opacity: isMobileMenuOpen ? 1 : 0
             }}
          >
            <a href="tel:+919876543210">
              <Button className="w-full rounded-2xl bg-secondary py-7 text-lg font-bold text-primary shadow-2xl shadow-secondary/20" size="lg">
                <PhoneCall size={20} className="mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
