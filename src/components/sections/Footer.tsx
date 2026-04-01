import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-gray-300 pt-16 pb-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 gap-12 md:grid-cols-4">
        
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary font-bold text-xl">
              DB
            </div>
            <span className="font-display font-bold text-xl text-white">
              Dilip Bhandge
            </span>
          </Link>
          <p className="text-sm text-gray-400 mb-6 max-w-xs">
            Premium real estate consultant serving Maharashtra, bringing you the best residential and commercial properties with 100% transparency.
          </p>
          <div className="flex gap-4">
            <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
            <li><Link href="/properties" className="hover:text-secondary transition-colors">Properties</Link></li>
            <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link href="/services" className="hover:text-secondary transition-colors">Services</Link></li>
            <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Top Locations */}
        <div>
          <h4 className="text-white font-semibold mb-6">Top Locations</h4>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/properties-in-wakad" className="hover:text-secondary transition-colors">Properties in Wakad</Link></li>
            <li><Link href="/flats-in-hinjewadi" className="hover:text-secondary transition-colors">Flats in Hinjewadi</Link></li>
            <li><Link href="/baner-properties" className="hover:text-secondary transition-colors">Baner Real Estate</Link></li>
            <li><Link href="/kothrud-homes" className="hover:text-secondary transition-colors">Kothrud Homes</Link></li>
            <li><Link href="/properties-under-1-crore-pune" className="hover:text-secondary transition-colors">Properties under 1 Cr</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white font-semibold mb-6">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary shrink-0 mt-0.5" />
              <span>Office No. 405, Premium Plaza, Wakad, Pune, Maharashtra 411057</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-secondary shrink-0" />
              <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-secondary shrink-0" />
              <a href="mailto:info@dilipbhandge.com" className="hover:text-white transition-colors">info@dilipbhandge.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
        <p>© {new Date().getFullYear()} Dilip Bhandge Real Estate. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="/rera-compliance" className="hover:text-white transition-colors">RERA Compliance</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
