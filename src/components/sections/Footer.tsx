import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin, ArrowRight } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-primary pt-24 pb-12 text-gray-400 overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-secondary/5 blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl container-padding">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Story */}
          <div className="space-y-8">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary font-bold text-2xl transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-xl shadow-secondary/20">
                DB
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                  Dilip Bhandge
                </span>
                <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.2em] text-secondary">
                  Real Estate Experts
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Crafting premium real estate experiences in Pune for over 15 years. Built on the pillars of <span className="text-white font-medium">trust</span>, <span className="text-white font-medium">transparency</span>, and <span className="text-white font-medium">unmatched expertise</span>.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "#" },
                { Icon: Instagram, href: "#" },
                { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i}
                  href={href} 
                  className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-white transition-all hover:bg-secondary hover:text-primary hover:-translate-y-1"
                  aria-label={`Follow us on ${Icon.name}`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="mb-8 text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Explore
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                { name: "Premium Properties", href: "/properties" },
                { name: "About the Agent", href: "/about" },
                { name: "Investment Consulting", href: "/services" },
                { name: "Success Stories", href: "/testimonials" },
                { name: "Contact & Support", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="group flex items-center gap-2 transition-colors hover:text-secondary">
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations Hub */}
          <div>
            <h4 className="mb-8 text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Top Hubs
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              {[
                "Luxury Flats in Wakad",
                "IT Hubs in Hinjewadi",
                "Premium Baner Estates",
                "Elite Kothrud Homes",
                "Riverside Mahalunge",
              ].map((loc) => (
                <li key={loc}>
                  <Link href="/properties" className="group flex items-center gap-2 transition-colors hover:text-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-secondary" />
                    {loc}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Visit */}
          <div>
            <h4 className="mb-8 text-lg font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
              Get In Touch
            </h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-secondary">
                  <MapPin size={20} />
                </div>
                <span className="leading-relaxed">Office 405, Premium Plaza,<br />Wakad, Pune 411057</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-secondary">
                  <Phone size={20} />
                </div>
                <a href="tel:+919876543210" className="font-bold text-white transition-colors hover:text-secondary">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-secondary">
                  <Mail size={20} />
                </div>
                <a href="mailto:info@dilipbhandge.com" className="transition-colors hover:text-white">info@bhandgerealty.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-20 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 text-xs font-semibold uppercase tracking-widest md:flex-row">
          <p className="text-gray-500">© {currentYear} Dilip Bhandge Real Estate. Crafted for Excellence.</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms</Link>
            <Link href="/rera" className="transition-colors hover:text-white text-secondary">RERA Certified ✓</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
