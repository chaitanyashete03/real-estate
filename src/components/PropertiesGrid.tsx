"use client";
/**
 * PropertiesGrid.tsx
 * Filterable property grid (Buy / Sell / Rent) using Zustand state.
 * Cards have glassmorphic hover lift + micro-story badge.
 */

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, BedDouble, Bath, Square, BadgeCheck, ArrowRight, Tag } from "lucide-react";
import { create } from "zustand";
import { properties, type Property } from "@/lib/propertiesData";

// ─── Zustand Store for filter ─────────────────────────────────────────────────
interface FilterStore {
  activeFilter: "all" | "buy" | "sell" | "rent";
  setFilter: (filter: "all" | "buy" | "sell" | "rent") => void;
}

const useFilterStore = create<FilterStore>((set) => ({
  activeFilter: "all",
  setFilter: (filter) => set({ activeFilter: filter }),
}));

// ─── Filter Tabs ─────────────────────────────────────────────────────────────
const FILTERS: { key: FilterStore["activeFilter"]; label: string; emoji: string }[] = [
  { key: "all", label: "All Properties", emoji: "🏙️" },
  { key: "buy", label: "Buy", emoji: "🏠" },
  { key: "sell", label: "Sell", emoji: "🏷️" },
  { key: "rent", label: "Rent", emoji: "🔑" },
];

// ─── Property Card ────────────────────────────────────────────────────────────
function PropertyCardAdvanced({ property }: { property: Property }) {
  return (
    <Link
      href={`/properties/${property.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      aria-label={`View details for ${property.title}`}
    >
      {/* Image */}
      <div className="relative aspect-4/3 w-full overflow-hidden">
        <Image
          src={property.image}
          alt={property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Badges row */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {/* Listing type badge */}
          <span
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-sm ${
              property.listing_type === "buy"
                ? "bg-primary/90 text-white"
                : property.listing_type === "rent"
                ? "bg-accent/90 text-white"
                : "bg-secondary/90 text-primary"
            }`}
          >
            {property.listing_type}
          </span>

          {/* Possession */}
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700 shadow-sm backdrop-blur-sm">
            {property.possession}
          </span>
        </div>

        {/* RERA */}
        {property.reraVerified && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-green-500/90 px-3 py-1 text-xs font-semibold text-white shadow-sm backdrop-blur-sm">
            <BadgeCheck size={13} />
            RERA
          </div>
        )}

        {/* Story badge */}
        {property.badge && (
          <div className="absolute bottom-3 left-3 rounded-xl bg-secondary/95 px-3 py-1.5 text-xs font-bold text-primary shadow-md backdrop-blur-sm">
            ✦ {property.badge}
          </div>
        )}

        {/* Hover price overlay */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-center text-xl font-bold text-white drop-shadow-lg">
            {property.price}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="line-clamp-1 text-lg font-bold text-gray-900 transition-colors group-hover:text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {property.title}
        </h3>

        <div className="mt-1.5 flex items-center gap-1 text-sm text-gray-500">
          <MapPin size={13} className="shrink-0 text-accent" />
          <span className="line-clamp-1">{property.location}</span>
        </div>

        {/* Stats bar */}
        <div className="my-4 grid grid-cols-3 gap-2 border-y border-gray-100 py-3 text-xs text-gray-600">
          <div className="flex flex-col items-center gap-1">
            <BedDouble size={16} className="text-gray-400" />
            <span className="font-semibold">{property.bhk} BHK</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-gray-100">
            <Bath size={16} className="text-gray-400" />
            <span className="font-semibold">{property.bathrooms}</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Square size={16} className="text-gray-400" />
            <span className="font-semibold">{property.area}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="mt-auto flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400">Starting from</p>
            <p className="text-lg font-bold text-primary">{property.price}</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary transition-all group-hover:bg-primary group-hover:text-white">
            View Details <ArrowRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function PropertiesGrid() {
  const { activeFilter, setFilter } = useFilterStore();
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = activeFilter === "all"
    ? properties
    : properties.filter((p) => p.listing_type === activeFilter);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      gsap.fromTo(
        ".properties-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".properties-header",
            start: "top 85%",
          },
        }
      );
    };
    init();
  }, []);

  // Animate cards when filter changes
  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      gsap.fromTo(
        ".property-card-item",
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        }
      );
    };
    init();
  }, [activeFilter]);

  return (
    <section
      ref={sectionRef}
      id="properties"
      className="relative bg-slate-50 py-24 lg:py-32"
      aria-label="Properties showcase"
    >
      {/* Parallax decoration blobs */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-accent/5 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl container-padding">
        {/* Header */}
        <div className="properties-header mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
              <span className="h-px w-8 bg-secondary" />
              Curated Listings
            </span>
            <h2
              className="mt-3 text-4xl font-bold text-gray-900 md:text-5xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Discover Your{" "}
              <span className="text-gradient-blue">Dream Property</span>
            </h2>
            <p className="mt-3 max-w-lg text-gray-500">
              Every listing tells a story. Find yours — whether you&apos;re
              buying, selling, or renting in Pune.
            </p>
          </div>

          <Link
            href="/properties"
            className="hidden shrink-0 items-center gap-2 rounded-full border-2 border-primary px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white md:flex"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* Filter Tabs */}
        <div
          className="mb-10 flex flex-wrap gap-2"
          role="group"
          aria-label="Property type filters"
        >
          {FILTERS.map(({ key, label, emoji }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              aria-pressed={activeFilter === key}
              className={`filter-tab rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                activeFilter === key
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } ${activeFilter === key ? "active" : ""}`}
            >
              {emoji} {label}
            </button>
          ))}
        </div>

        {/* Grid or CTA */}
        {activeFilter === "sell" ? (
          <div className="mx-auto mt-10 max-w-4xl">
            <div className="glass group relative overflow-hidden rounded-[2rem] p-10 text-center shadow-2xl transition-all hover:shadow-primary/10">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl transition-transform duration-700 group-hover:scale-125"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl transition-transform duration-700 group-hover:scale-125"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/20 text-secondary">
                  <Tag size={32} />
                </div>

                <h3
                  className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Ready to Sell Your{" "}
                  <span className="text-secondary">Pune Property?</span>
                </h3>

                <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-500 leading-relaxed">
                  Join 500+ satisfied homeowners who trusted Dilip Bhandge to
                  get the best market value for their flats, villas, and lands.
                  Our premium storytelling approach ensures your property stands
                  out.
                </p>

                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-bold text-white shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95"
                  >
                    ✦ List My Property
                  </button>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center gap-2 rounded-full border-2 border-primary/20 px-10 py-4 text-sm font-bold text-primary transition-all hover:border-primary hover:bg-primary/5"
                  >
                    Call for Valuation
                  </a>
                </div>

                <div className="mt-12 grid grid-cols-1 gap-6 border-t border-gray-100 pt-10 sm:grid-cols-3">
                  {[
                    { label: "Market Matching", desc: "Expert valuation" },
                    { label: "Premium Photos", desc: "Professional media" },
                    { label: "Global Reach", desc: "targeted marketing" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center">
                      <p className="text-sm font-bold uppercase tracking-wider text-primary">
                        {stat.label}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{stat.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((property) => (
              <div key={property.id} className="property-card-item">
                <PropertyCardAdvanced property={property} />
              </div>
            ))}
          </div>
        )}

        {filtered.length === 0 && (
          <div className="py-20 text-center text-gray-500">
            <p className="text-lg font-medium">No properties found for this filter.</p>
            <button
              className="mt-4 text-primary underline"
              onClick={() => setFilter("all")}
            >
              Show all
            </button>
          </div>
        )}

        {/* Mobile view all */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            href="/properties"
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white shadow-lg"
          >
            View All Properties <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
