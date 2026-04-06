"use client";
/**
 * ContactForm.tsx
 * React Hook Form + Zod validated contact form.
 * Integrates with Formspree (replace YOUR_FORM_ID with actual ID).
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, Loader2, Phone, Mail, MapPin } from "lucide-react";

// ─── Zod Schema ───────────────────────────────────────────────────────────────
const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number"),
  interest: z.enum(["buy", "sell", "rent", "invest", "other"] as const, {
    message: "Please select your interest",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

// ─── Contact Info ─────────────────────────────────────────────────────────────
const contactInfo = [
  {
    icon: <Phone size={20} />,
    label: "Call Us",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: <Mail size={20} />,
    label: "Email Us",
    value: "dilip@bhandgerealty.com",
    href: "mailto:dilip@bhandgerealty.com",
  },
  {
    icon: <MapPin size={20} />,
    label: "Visit Us",
    value: "Kalyani Nagar, Pune — 411006",
    href: "https://maps.google.com/?q=Kalyani+Nagar+Pune",
  },
];

// ─── Field Component ──────────────────────────────────────────────────────────
function Field({
  label,
  error,
  children,
  required,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs font-medium text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-medium text-gray-900 outline-none transition-all focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20 placeholder:text-gray-400";

// ─── Main Component ───────────────────────────────────────────────────────────
export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      // Replace 'YOUR_FORM_ID' with your Formspree form ID
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 6000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch {
      alert("Something went wrong. Please call us directly at +91 98765 43210");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-50 py-24 lg:py-32"
      aria-label="Contact form"
    >
      {/* Decorations */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl container-padding">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            <span className="h-px w-8 bg-secondary" />
            Begin Your Story
            <span className="h-px w-8 bg-secondary" />
          </span>
          <h2
            className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Let&apos;s Find Your{" "}
            <span className="text-gradient-gold">Perfect Home</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Share your requirements and we&apos;ll connect you with the best
            properties in Pune within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          {/* Contact Info Sidebar */}
          <div className="space-y-6 lg:col-span-2">
            <div className="rounded-2xl bg-primary p-8 text-white">
              <h3
                className="mb-6 text-2xl font-bold"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Get in Touch
              </h3>

              <div className="space-y-5">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 rounded-xl p-3 transition-all hover:bg-white/10"
                  >
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-white/60">
                        {info.label}
                      </p>
                      <p className="mt-1 font-medium text-white">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office hours */}
              <div className="mt-8 rounded-xl bg-white/10 p-4">
                <p className="text-sm font-semibold text-secondary">Office Hours</p>
                <p className="mt-1 text-sm text-white/80">
                  Mon – Sat: 9:00 AM – 7:00 PM
                  <br />
                  Sun: 10:00 AM – 4:00 PM
                </p>
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210?text=Hi%20Dilip%20sir%2C%20I%20am%20interested%20in%20properties%20in%20Pune."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-green-500 py-4 text-base font-bold text-white shadow-lg shadow-green-500/30 transition-all hover:bg-green-600 hover:-translate-y-0.5"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {isSuccess ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 rounded-2xl bg-green-50 p-10 text-center">
                <CheckCircle size={56} className="text-green-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Message Received!
                </h3>
                <p className="text-gray-600">
                  Thank you for reaching out. Dilip sir will contact you within
                  24 hours. You can also WhatsApp for immediate assistance.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="rounded-2xl bg-white p-8 shadow-sm"
                noValidate
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field label="Full Name" error={errors.name?.message} required>
                    <input
                      {...register("name")}
                      type="text"
                      placeholder="Rajesh Kumar"
                      className={inputClass}
                      autoComplete="name"
                    />
                  </Field>

                  <Field label="Email Address" error={errors.email?.message} required>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="rajesh@example.com"
                      className={inputClass}
                      autoComplete="email"
                    />
                  </Field>

                  <Field label="Phone Number" error={errors.phone?.message} required>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="9876543210"
                      className={inputClass}
                      autoComplete="tel"
                      maxLength={10}
                    />
                  </Field>

                  <Field label="I'm interested in" error={errors.interest?.message} required>
                    <select {...register("interest")} className={inputClass}>
                      <option value="">Select your interest</option>
                      <option value="buy">🏠 Buying a Property</option>
                      <option value="sell">🏷️ Selling a Property</option>
                      <option value="rent">🔑 Renting a Property</option>
                      <option value="invest">📈 Investment Advice</option>
                      <option value="other">💬 Other Enquiry</option>
                    </select>
                  </Field>

                  <Field
                    label="Your Message"
                    error={errors.message?.message}
                    required
                  >
                    <textarea
                      {...register("message")}
                      rows={4}
                      placeholder="Tell us about your requirements — location, budget, BHK preference..."
                      className={`${inputClass} resize-none`}
                    />
                  </Field>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-light hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:outline-none"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-xs text-gray-400">
                  By submitting, you agree to be contacted by Dilip Bhandge Real
                  Estate. Your data is never shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
