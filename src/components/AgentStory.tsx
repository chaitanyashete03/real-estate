"use client";
/**
 * AgentStory.tsx
 * Scroll-triggered timeline showcasing Dilip Bhandge's journey.
 * GSAP ScrollTrigger reveals each milestone + animated stat counters.
 */

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Award, Users, Star, TrendingUp, Shield, Heart } from "lucide-react";

const timeline = [
  {
    year: "2009",
    title: "The Beginning",
    description:
      "Started as a property consultant in Pune's emerging Baner–Aundh corridor, guided by a simple philosophy: every client deserves transparency and trust.",
    icon: <Heart size={20} />,
    color: "from-primary to-primary-light",
  },
  {
    year: "2013",
    title: "Growing Expertise",
    description:
      "Closed over 100 deals across Wakad, Hinjewadi, and Kothrud. Became a certified RERA consultant and expanded to builder partnerships.",
    icon: <TrendingUp size={20} />,
    color: "from-accent to-accent-light",
  },
  {
    year: "2017",
    title: "Award-Winning Agent",
    description:
      "Recognised as Top Real Estate Agent in Pune by Maharashtra Housing Federation. Built a network of 25+ premium builders across the city.",
    icon: <Award size={20} />,
    color: "from-secondary to-secondary-light",
  },
  {
    year: "2020",
    title: "500+ Happy Families",
    description:
      "Milestone: 500 families successfully settled. Launched a buyer-education initiative to help first-time homeowners navigate the market.",
    icon: <Users size={20} />,
    color: "from-primary to-accent",
  },
  {
    year: "2024",
    title: "15 Years of Trust",
    description:
      "Today, with 15 years of experience, Dilip Bhandge Real Estate is synonymous with integrity, premium listings, and client-first service across Pune.",
    icon: <Star size={20} />,
    color: "from-secondary to-primary",
  },
];

const stats = [
  { value: 500, suffix: "+", label: "Happy Families", icon: <Users size={24} /> },
  { value: 15, suffix: "", label: "Years Experience", icon: <Shield size={24} /> },
  { value: 25, suffix: "+", label: "Builder Partners", icon: <Award size={24} /> },
  { value: 100, suffix: "%", label: "RERA Verified", icon: <Star size={24} /> },
];

function useCountUp(target: number, suffix: string, ref: React.RefObject<HTMLSpanElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));

    const update = () => {
      start = Math.min(start + step, target);
      if (el) el.textContent = start + suffix;
      if (start < target) requestAnimationFrame(update);
    };

    // Use IntersectionObserver to trigger on view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          start = 0;
          requestAnimationFrame(update);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, [target, suffix, ref]);
}

function StatCounter({ value, suffix, label, icon }: (typeof stats)[0]) {
  const numRef = useRef<HTMLSpanElement>(null);
  useCountUp(value, suffix, numRef);

  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl glass-card p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </div>
      <span ref={numRef} className="stat-number">
        0{suffix}
      </span>
      <span className="text-sm font-medium text-gray-600">{label}</span>
    </div>
  );
}

export function AgentStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const init = async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      // Reveal the timeline items
      gsap.utils.toArray<HTMLElement>(".timeline-item").forEach((item, i) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            x: i % 2 === 0 ? -60 : 60,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // Animate the vertical line
      gsap.fromTo(
        ".timeline-progress-line",
        { scaleY: 0, transformOrigin: "top center" },
        {
          scaleY: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 60%",
            end: "bottom 40%",
            scrub: true,
          },
        }
      );

      // Agent photo reveal
      gsap.fromTo(
        ".agent-photo",
        { opacity: 0, scale: 0.85, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".agent-photo",
            start: "top 80%",
          },
        }
      );
    };

    init();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-white py-24 lg:py-32"
      aria-label="Agent story and timeline"
    >
      {/* Background decoration */}
      <div
        className="pointer-events-none absolute -left-24 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl container-padding">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            <span className="h-px w-8 bg-secondary" />
            The Story Behind the Brand
            <span className="h-px w-8 bg-secondary" />
          </span>
          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl"
            style={{ fontFamily: "var(--font-display)" }}>
            Meet{" "}
            <span className="text-gradient-blue">Dilip Bhandge</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
            From a first-generation consultant to Pune&apos;s most trusted real estate
            advisor — a 15-year journey built on one promise: <em>you first</em>.
          </p>
        </div>

        {/* Agent Profile + Stats */}
        <div className="mb-20 grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8 items-center">
          {/* Photo */}
          <div className="agent-photo relative mx-auto flex flex-col items-center lg:col-span-1">
            <div className="relative h-80 w-80 overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Dilip Bhandge - Real Estate Agent"
                fill
                className="object-cover"
                sizes="320px"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
            </div>
            {/* Badge */}
            <div className="animate-pulse-glow absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-2xl bg-secondary px-6 py-2 text-center text-primary shadow-xl whitespace-nowrap">
              <p className="text-xs font-bold uppercase tracking-widest">RERA Certified Agent</p>
              <p className="text-sm font-semibold">MH-RERA No. A52100XXXXX</p>
            </div>
          </div>

          {/* Quote + Stats */}
          <div className="lg:col-span-2">
            <blockquote className="mb-8 border-l-4 border-secondary pl-6 text-xl italic text-gray-700 leading-relaxed">
              &ldquo;Real estate is not about bricks and cement. It is about
              finding the place where your family&apos;s story unfolds. I am
              here to make that story beautiful.&rdquo;
              <footer className="mt-3 text-base font-semibold not-italic text-primary">
                — Dilip Bhandge
              </footer>
            </blockquote>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {stats.map((stat) => (
                <StatCounter key={stat.label} {...stat} />
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline-container relative">
          <h3 className="mb-12 text-center text-2xl font-bold text-gray-800"
            style={{ fontFamily: "var(--font-display)" }}>
            The Journey
          </h3>

          {/* Vertical line */}
          <div className="absolute left-1/2 top-16 hidden h-[calc(100%-4rem)] w-0.5 -translate-x-1/2 lg:block">
            <div
              className="timeline-progress-line h-full rounded-full"
              style={{
                background:
                  "linear-gradient(to bottom, #0A2472, #C6A43F, #2AA9B4)",
              }}
            />
          </div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                className={`timeline-item relative flex flex-col gap-6 lg:flex-row lg:items-center ${
                  i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className="glass-card w-full rounded-2xl p-6 lg:w-[45%]">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${item.color} text-white shadow-md`}
                    >
                      {item.icon}
                    </div>
                    <span className="text-sm font-bold uppercase tracking-widest text-secondary">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-display)" }}>
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>

                {/* Center dot */}
                <div className="hidden lg:flex lg:w-[10%] lg:justify-center">
                  <div className="timeline-dot" />
                </div>

                {/* Spacer */}
                <div className="hidden lg:block lg:w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
