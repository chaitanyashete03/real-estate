import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Building, Search, ChevronDown, Tag } from "lucide-react";
import dynamic from "next/dynamic";

// Dynamically import THREE to avoid SSR issues
const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
  ssr: false,
});

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

  const [intent, setIntent] = useState<"buy" | "sell" | "rent">("buy");
  const [location, setLocation] = useState("");

  useEffect(() => {
    let gsap: typeof import("gsap").gsap;
    let ScrollTrigger: typeof import("gsap/ScrollTrigger").ScrollTrigger;

    const init = async () => {
      const gsapModule = await import("gsap");
      const stModule = await import("gsap/ScrollTrigger");

      gsap = gsapModule.gsap;
      ScrollTrigger = stModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      // Entry animation timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 60, skewY: 2 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.2 },
          "-=0.4"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          searchRef.current,
          { opacity: 0, y: 40, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          "-=0.4"
        )
        .fromTo(
          ".hero-scroll-cue",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.2"
        );

      // Parallax: background image moves slower than scroll
      gsap.to(".hero-bg-image", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating hero badges
      gsap.to(".floating-badge-1", {
        y: -15,
        duration: 2.5,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
      });
      gsap.to(".floating-badge-2", {
        y: 10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 0.5,
      });
      gsap.to(".floating-badge-3", {
        y: -8,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut",
        delay: 1,
      });
    };

    init();

    return () => {
      // Cleanup GSAP ScrollTriggers
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
      });
    };
  }, []);

  const handleSearch = (e: React.MouseEvent) => {
    if (intent === "sell") {
      e.preventDefault();
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative h-screen min-h-[700px] w-full overflow-hidden"
      aria-label="Hero section"
    >
      {/* ── Layered Background ── */}
      <div className="absolute inset-0 z-0">
        {/* Layer 1: Base image (slower parallax) */}
        <div className="hero-bg-image absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Pune real estate skyline"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        {/* Layer 2: Gradient overlay */}
        <div className="absolute inset-0 gradient-hero" />

        {/* Layer 3: Three.js Antigravity Canvas */}
        <ThreeBackground />
      </div>

      {/* ── Floating Micro-Tags (paralax layers) ── */}
      <div
        className="floating-badge-1 glass absolute left-[6%] top-[25%] z-20 hidden rounded-2xl px-4 py-3 text-white lg:block"
        aria-hidden="true"
      >
        <p className="text-xs font-medium text-white/70">Properties Sold</p>
        <p className="text-2xl font-bold text-secondary">500+</p>
      </div>

      <div
        className="floating-badge-2 glass absolute right-[8%] top-[30%] z-20 hidden rounded-2xl px-4 py-3 text-white lg:block"
        aria-hidden="true"
      >
        <p className="text-xs font-medium text-white/70">RERA Verified</p>
        <p className="text-2xl font-bold text-secondary">100%</p>
      </div>

      <div
        className="floating-badge-3 glass absolute right-[12%] bottom-[30%] z-20 hidden rounded-2xl px-4 py-3 text-white lg:block"
        aria-hidden="true"
      >
        <p className="text-xs font-medium text-white/70">Years Experience</p>
        <p className="text-2xl font-bold text-secondary">15+</p>
      </div>

      {/* ── Hero Content ── */}
      <div className="container-padding relative z-20 flex h-full flex-col justify-center pt-20">
        {/* Badge */}
        <div className="hero-badge mb-6 inline-flex items-center gap-2">
          <span className="h-px w-10 bg-secondary" />
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            Exclusive Properties in Pune
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="max-w-4xl text-5xl font-bold leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Your Pune <span className="text-gradient-gold">Dream Home</span>
          <br />
          <em className="not-italic">Starts Here.</em>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200 sm:text-xl"
        >
          Over a decade of trust, transparency, and premium real estate
          expertise across Pune — with{" "}
          <strong className="text-secondary">Dilip Bhandge</strong>.
        </p>

        {/* Search Bar */}
        <div
          ref={searchRef}
          className="glass mt-10 max-w-3xl rounded-2xl p-1 shadow-2xl"
        >
          <div className="grid grid-cols-1 gap-1 sm:grid-cols-3">
            {/* Location */}
            <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3">
              <MapPin size={18} className="shrink-0 text-primary" />
              <div className="w-full">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="e.g. Wakad, Pune"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-0.5 w-full bg-transparent text-sm font-medium text-gray-900 outline-none placeholder:text-gray-400"
                  aria-label="Enter location"
                />
              </div>
            </div>

            {/* Intent Dropdown */}
            <div className="flex items-center gap-3 rounded-xl bg-white px-4 py-3">
              <Tag size={18} className="shrink-0 text-primary" />
              <div className="w-full">
                <label className="block text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                  I want to...
                </label>
                <select
                  value={intent}
                  onChange={(e) => setIntent(e.target.value as any)}
                  className="mt-0.5 w-full appearance-none bg-transparent text-sm font-medium text-gray-900 outline-none"
                  aria-label="Select intent"
                >
                  <option value="buy">Buy a Home</option>
                  <option value="rent">Rent a Flat</option>
                  <option value="sell">Sell My Property</option>
                </select>
              </div>
            </div>

            {/* Search Button */}
            <Link
              href={intent === "sell" ? "#contact" : "/properties"}
              onClick={handleSearch}
              className="flex items-center justify-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-bold text-primary transition-all hover:bg-secondary-light hover:shadow-lg active:scale-95"
              aria-label={intent === "sell" ? "Contact us to sell" : "Search properties"}
            >
              <Search size={18} />
              {intent === "sell" ? "List with Us" : "Search Properties"}
            </Link>
          </div>
        </div>

        {/* Quick links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {["Buy in Pune", "Rent Flats", "Sell Property", "Under 1 Cr"].map(
            (tag) => (
              <Link
                key={tag}
                href={tag === "Sell Property" ? "#contact" : "/properties"}
                className="rounded-full border border-white/30 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-all hover:border-secondary hover:text-secondary"
              >
                {tag}
              </Link>
            )
          )}
        </div>
      </div>

      {/* ── Scroll Cue ── */}
      <div className="hero-scroll-cue absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2">
        <span className="text-xs font-medium uppercase tracking-widest text-white/60">
          Scroll
        </span>
        <ChevronDown
          size={20}
          className="animate-bounce text-secondary"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
