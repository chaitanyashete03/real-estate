/**
 * page.tsx — Homepage
 * Assembles all storytelling sections with scroll-driven narrative flow.
 */

import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { AgentStory } from "@/components/AgentStory";
import { PropertiesGrid } from "@/components/PropertiesGrid";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { MapSection } from "@/components/MapSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dilip Bhandge | Premium Real Estate Agent in Pune | Buy, Sell & Rent",
  description:
    "Find your dream home in Pune with Dilip Bhandge — Pune's most trusted real estate agent. Browse flats, villas, and apartments in Wakad, Hinjewadi, Baner, Kothrud, and more. RERA verified listings. 15+ years experience.",
  keywords: [
    "real estate agent pune",
    "flats in pune",
    "buy flat pune",
    "rent apartment pune",
    "sell property pune",
    "dilip bhandge",
    "hinjewadi property",
    "wakad flats",
    "baner apartments",
  ],
  openGraph: {
    title: "Dilip Bhandge | Premium Real Estate — Pune",
    description:
      "Your Pune Dream Home Starts Here. Browse RERA-verified properties for Buy, Sell & Rent.",
    url: "https://bhandgerealty.com",
    siteName: "Dilip Bhandge Real Estate",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dilip Bhandge Real Estate — Pune",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilip Bhandge | Premium Real Estate — Pune",
    description: "Your Pune Dream Home Starts Here.",
  },
};

// ─── JSON-LD Local Business Schema ───────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Dilip Bhandge Real Estate",
  url: "https://bhandgerealty.com",
  telephone: "+91-98765-43210",
  email: "dilip@bhandgerealty.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kalyani Nagar",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411006",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 18.5476,
    longitude: 73.9013,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday"],
      opens: "10:00",
      closes: "16:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
  areaServed: {
    "@type": "City",
    name: "Pune",
  },
};

// ─── CTA Section ──────────────────────────────────────────────────────────────
function StorytellingCTA() {
  return (
    <section
      className="relative overflow-hidden py-24"
      aria-label="Call to action — Begin your story"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-primary" />
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 50%, rgba(198,164,63,0.6) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(42,169,180,0.4) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-4xl container-padding text-center">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
          <span className="h-px w-8 bg-secondary" />
          Your Next Chapter
          <span className="h-px w-8 bg-secondary" />
        </span>

        <h2
          className="mt-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Ready to Write Your{" "}
          <span className="text-gradient-gold">Home Story?</span>
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-white/80">
          Whether you&apos;re buying your first home, selling for the best price,
          or finding the perfect rental — let&apos;s begin this journey together.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-base font-bold text-primary shadow-xl shadow-secondary/30 transition-all hover:bg-white hover:shadow-white/30 hover:-translate-y-0.5"
          >
            ✦ Begin Your Story
          </a>

          <Link
            href="/properties"
            className="flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/10"
          >
            Explore Properties →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content">
        {/* 1. Hero — "Your Pune Dream Home Starts Here" */}
        <Hero />

        {/* 2. Agent Story — Scroll-triggered timeline */}
        <AgentStory />

        {/* 3. Properties Grid — Filterable Buy/Sell/Rent */}
        <PropertiesGrid />

        {/* 4. Storytelling CTA */}
        <StorytellingCTA />

        {/* 5. Testimonials — 3D tilt carousel */}
        <Testimonials />

        {/* 6. Contact Form — "Begin Your Story" */}
        <ContactForm />

        {/* 7. Map — Office Location */}
        <MapSection />
      </main>
    </>
  );
}
