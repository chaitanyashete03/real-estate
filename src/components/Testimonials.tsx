"use client";
/**
 * Testimonials.tsx
 * Testimonial carousel with Framer Motion + subtle 3D tilt effect.
 * Auto-advances every 5 seconds, supports keyboard navigation.
 */

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner, Wakad",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b05b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "Dilip bhai made our dream of owning a home in Pune a reality. His knowledge of the market and patience in guiding us through every step was incredible. We found our perfect 3 BHK in exactly our budget!",
    rating: 5,
    property: "3 BHK Apartment, Wakad",
  },
  {
    id: 2,
    name: "Rahul & Sneha Patil",
    role: "Investors, Hinjewadi",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "We invested in two properties through Dilip Bhandge Real Estate and both have given us excellent returns. His investment advice is spot on and he is always available to answer queries.",
    rating: 5,
    property: "2x Investment Properties, Hinjewadi",
  },
  {
    id: 3,
    name: "Dr. Anil Kulkarni",
    role: "Doctor, Baner",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "As a first-time buyer, I was overwhelmed. Dilip sir simplified everything — from RERA compliance to loan assistance. Got a beautiful 4 BHK villa in Baner. Highly recommended!",
    rating: 5,
    property: "4 BHK Villa, Baner",
  },
  {
    id: 4,
    name: "Meenakshi Iyer",
    role: "Software Engineer, Kharadi",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    text: "I was relocating from Bangalore and needed a flat urgently. Dilip sir arranged virtual tours, handled the paperwork remotely, and I moved in within 3 weeks. Absolutely seamless!",
    rating: 5,
    property: "3 BHK Rent, Kharadi",
  },
];

const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction > 0 ? 15 : -15,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    rotateY: direction < 0 ? 15 : -15,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  }),
};

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? "text-secondary" : "text-gray-300"}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function Testimonials() {
  const [[current, direction], setPage] = useState([0, 0]);

  const paginate = useCallback(
    (newDirection: number) => {
      setPage(([prev]) => [
        (prev + newDirection + testimonials.length) % testimonials.length,
        newDirection,
      ]);
    },
    []
  );

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5500);
    return () => clearInterval(timer);
  }, [paginate]);

  const testimonial = testimonials[current];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-primary py-24 lg:py-32"
      aria-label="Client testimonials"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Large decorative quote */}
      <div
        className="pointer-events-none absolute -left-4 top-8 text-[200px] font-bold leading-none text-white/5 select-none"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="mx-auto max-w-5xl container-padding">
        {/* Section header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            <span className="h-px w-8 bg-secondary" />
            Client Stories
            <span className="h-px w-8 bg-secondary" />
          </span>
          <h2
            className="mt-4 text-4xl font-bold text-white md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative" style={{ perspective: "1200px" }}>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="glass rounded-3xl p-8 md:p-12"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Quote icon */}
              <Quote
                size={40}
                className="mb-6 text-secondary/60"
                aria-hidden="true"
              />

              {/* Testimonial text */}
              <p className="mb-8 text-xl leading-relaxed text-white/90 md:text-2xl">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author row */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-secondary/60 ring-offset-2 ring-offset-primary">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 text-right">
                  <StarRating rating={testimonial.rating} />
                  <p className="text-xs text-secondary/80 font-medium">
                    {testimonial.property}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setPage([i, i > current ? 1 : -1])}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-secondary"
                      : "w-2 bg-white/30 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => paginate(-1)}
                aria-label="Previous testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-secondary focus-visible:outline-none"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => paginate(1)}
                aria-label="Next testimonial"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary transition-all hover:bg-secondary-light focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
