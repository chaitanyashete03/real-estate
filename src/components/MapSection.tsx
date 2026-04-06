"use client";
/**
 * MapSection.tsx
 * Interactive Leaflet map showing office location in Kalyani Nagar, Pune.
 * Dynamically imported to avoid SSR issues with Leaflet.
 */

import { useEffect, useRef } from "react";

// Office coordinates — Kalyani Nagar, Pune
const OFFICE_LAT = 18.5476;
const OFFICE_LNG = 73.9013;

export function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    const initMap = async () => {
      // Dynamic import to avoid SSR
      const L = (await import("leaflet")).default;
      await import("leaflet/dist/leaflet.css");

      // Fix Leaflet's default icon path issue in Next.js
      delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
      });

      const map = L.map(mapRef.current!, {
        center: [OFFICE_LAT, OFFICE_LNG],
        zoom: 15,
        zoomControl: false,
        scrollWheelZoom: false,
      });

      L.control.zoom({ position: "bottomright" }).addTo(map);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19,
      }).addTo(map);

      // Custom gold marker
      const goldIcon = L.divIcon({
        className: "custom-marker",
        html: `
          <div style="
            width:44px;height:44px;
            background: linear-gradient(135deg, #C6A43F, #e8cc6a);
            border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);
            border:3px solid white;
            box-shadow:0 4px 12px rgba(0,0,0,0.3);
            display:flex;align-items:center;justify-content:center;
          ">
            <div style="transform:rotate(45deg);font-size:18px;">🏠</div>
          </div>
        `,
        iconSize: [44, 44],
        iconAnchor: [22, 44],
        popupAnchor: [0, -44],
      });

      L.marker([OFFICE_LAT, OFFICE_LNG], { icon: goldIcon })
        .addTo(map)
        .bindPopup(
          `<div style="padding:8px;min-width:200px;font-family:Inter,sans-serif;">
            <strong style="font-size:15px;color:#0A2472;">Dilip Bhandge Real Estate</strong>
            <br><span style="color:#555;font-size:13px;">Kalyani Nagar, Pune — 411006</span>
            <br><br>
            <a href="https://maps.google.com/?q=Kalyani+Nagar+Pune"
               target="_blank" rel="noopener"
               style="color:#C6A43F;font-weight:600;font-size:13px;text-decoration:none;">
              📍 Get Directions →
            </a>
          </div>`,
          { closeButton: false }
        )
        .openPopup();

      mapInstanceRef.current = map;
    };

    initMap();

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section
      id="location"
      className="relative bg-white py-24 lg:py-32"
      aria-label="Office location map"
    >
      <div className="mx-auto max-w-7xl container-padding">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary">
            <span className="h-px w-8 bg-secondary" />
            Find Us
            <span className="h-px w-8 bg-secondary" />
          </span>
          <h2
            className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Visit Our{" "}
            <span className="text-gradient-blue">Pune Office</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            We are conveniently located in Kalyani Nagar — the heart of Pune.
            Walk in for a free consultation, Monday to Saturday.
          </p>
        </div>

        {/* Map container */}
        <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-gray-200">
          <div
            ref={mapRef}
            style={{ height: "500px", width: "100%" }}
            aria-label="Interactive map showing office location at Kalyani Nagar, Pune"
            role="region"
          />
        </div>

        {/* Info cards below map */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            { icon: "📍", label: "Address", value: "Kalyani Nagar, Pune — 411006" },
            { icon: "🕐", label: "Mon – Sat", value: "9:00 AM – 7:00 PM" },
            { icon: "🚗", label: "Nearest Metro", value: "Ruby Hall Clinic Station" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 rounded-2xl bg-slate-50 px-6 py-4"
            >
              <span className="text-2xl" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  {item.label}
                </p>
                <p className="mt-0.5 font-semibold text-gray-900">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
