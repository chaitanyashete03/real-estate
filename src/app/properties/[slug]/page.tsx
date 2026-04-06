/**
 * /app/properties/[slug]/page.tsx
 * Dynamic property detail page with gallery, floor plan, amenities, and contact CTA.
 * Fetches by slug for better SEO.
 */

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, BedDouble, Bath, Square, BadgeCheck, ArrowLeft, Phone } from "lucide-react";
import { properties, getPropertyBySlug } from "@/lib/propertiesData";
import { ContactForm } from "@/components/ContactForm";

// ─── Static Params for pre-rendering ─────────────────────────────────────────
export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

// ─── Dynamic Metadata ─────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return { title: "Property Not Found" };
  }

  return {
    title: `${property.title} — ${property.location}`,
    description: property.description,
    openGraph: {
      title: `${property.title} | ${property.price}`,
      description: property.description,
      images: [{ url: property.image, width: 1200, height: 630, alt: property.title }],
    },
  };
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) notFound();

  const listingTypeColors: Record<string, string> = {
    buy: "bg-primary text-white",
    sell: "bg-secondary text-primary",
    rent: "bg-accent text-white",
  };

  return (
    <main id="main-content" className="pt-20">
      {/* ── Gallery ── */}
      <section className="relative" aria-label="Property gallery">
        <div className="grid h-[65vh] min-h-[400px] grid-cols-3 grid-rows-2 gap-2">
          {/* Main large image */}
          <div className="relative col-span-2 row-span-2 overflow-hidden">
            <Image
              src={property.gallery[0] ?? property.image}
              alt={`${property.title} — main image`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority
            />
            {/* Badges */}
            <div className="absolute left-4 top-4 flex gap-2">
              <span
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-sm ${
                  listingTypeColors[property.listing_type]
                }`}
              >
                {property.listing_type}
              </span>
              {property.reraVerified && (
                <span className="flex items-center gap-1 rounded-full bg-green-500/90 px-3 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-sm">
                  <BadgeCheck size={13} /> RERA
                </span>
              )}
            </div>
          </div>

          {/* Side images */}
          {(property.gallery.slice(1, 3).length
            ? property.gallery.slice(1, 3)
            : [property.image, property.image]
          ).map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={img}
                alt={`${property.title} — view ${i + 2}`}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl container-padding py-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* ── Left: Details ── */}
          <div className="lg:col-span-2">
            {/* Back link */}
            <Link
              href="/properties"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-primary"
            >
              <ArrowLeft size={16} /> All Properties
            </Link>

            {/* Heading */}
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                {property.badge && (
                  <span className="mb-2 inline-block rounded-full bg-secondary/20 px-3 py-1 text-xs font-bold text-secondary">
                    ✦ {property.badge}
                  </span>
                )}
                <h1
                  className="text-3xl font-bold text-gray-900 md:text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {property.title}
                </h1>
                <div className="mt-2 flex items-center gap-1.5 text-gray-500">
                  <MapPin size={15} className="text-accent" />
                  <span>{property.location}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Price</p>
                <p className="text-3xl font-bold text-primary">{property.price}</p>
              </div>
            </div>

            {/* Stats row */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: <BedDouble size={20} />, label: "Bedrooms", value: `${property.bhk} BHK` },
                { icon: <Bath size={20} />, label: "Bathrooms", value: `${property.bathrooms}` },
                { icon: <Square size={20} />, label: "Carpet Area", value: property.area },
                { icon: <BadgeCheck size={20} />, label: "Status", value: property.possession },
              ].map((stat) => ( stat.label && (
                <div
                  key={stat.label}
                  className="glass-card flex flex-col items-center gap-2 rounded-2xl p-4 text-center"
                >
                  <div className="text-primary">{stat.icon}</div>
                  <p className="text-xs font-medium text-gray-500">{stat.label}</p>
                  <p className="font-bold text-gray-900">{stat.value}</p>
                </div>
              ) ))}
            </div>

            {/* Description */}
            <div className="mt-10">
              <h2
                className="mb-4 text-2xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                About This Property
              </h2>
              <p className="leading-relaxed text-gray-600">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mt-10">
              <h2
                className="mb-5 text-2xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Amenities
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {property.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-gray-700"
                  >
                    <span className="h-2 w-2 rounded-full bg-secondary" aria-hidden="true" />
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Floor Plan Placeholder */}
            <div className="mt-10">
              <h2
                className="mb-5 text-2xl font-bold text-gray-900"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Floor Plan
              </h2>
              <div className="flex h-64 items-center justify-center rounded-2xl bg-linear-to-br from-slate-100 to-slate-200 text-center">
                <div>
                  <p className="text-4xl" aria-hidden="true">📐</p>
                  <p className="mt-2 font-semibold text-gray-600">Floor Plan Available on Request</p>
                  <a
                    href="tel:+919876543210"
                    className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white"
                  >
                    <Phone size={14} /> Request Floor Plan
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Sidebar ── */}
          <aside className="h-fit rounded-2xl bg-primary p-6 text-white shadow-xl lg:sticky lg:top-24">
            <h3
              className="mb-1 text-2xl font-bold"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Interested?
            </h3>
            <p className="mb-6 text-sm text-white/70">
              Contact Dilip Bhandge for a site visit or more details.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 rounded-xl bg-secondary py-3.5 text-base font-bold text-primary transition-all hover:bg-secondary-light"
              >
                <Phone size={18} /> Call Now
              </a>

              <a
                href={`https://wa.me/919876543210?text=Hi%20Dilip%20sir%2C%20I%20am%20interested%20in%20${encodeURIComponent(property.title)}%20in%20${encodeURIComponent(property.location)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-500 py-3.5 text-base font-bold text-white transition-all hover:bg-green-600"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                WhatsApp
              </a>

              <a
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
              >
                Send Enquiry
              </a>
            </div>

            {/* Property details summary */}
            <div className="mt-6 border-t border-white/20 pt-6 space-y-2 text-sm">
              {[
                { label: "Type", value: property.propertyType },
                { label: "Furnishing", value: property.furnishing },
                { label: "RERA", value: property.reraVerified ? "Verified ✓" : "Not verified" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between">
                  <span className="text-white/60">{row.label}</span>
                  <span className="font-semibold text-white">{row.value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* Contact form below */}
        <div className="mt-16" id="contact">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
