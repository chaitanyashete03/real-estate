// src/lib/propertiesData.ts
// Static property data — replace with CMS later (e.g., Contentlayer or Sanity)

export interface Property {
  id: string;
  slug: string;
  title: string;
  story: string; // micro-story tagline
  listing_type: "buy" | "sell" | "rent";
  location: string;
  area_name: string;
  price: string;
  price_raw: number; // in lakhs for sorting
  bhk: number;
  bathrooms: number;
  area: string;
  image: string;
  gallery: string[];
  reraVerified: boolean;
  possession: string;
  propertyType: string;
  furnishing: string;
  amenities: string[];
  description: string;
  badge?: string; // e.g. "Family Nest", "Investor's Choice"
}

export const properties: Property[] = [
  {
    id: "prop-1",
    slug: "lodha-belmondo-punawale",
    title: "Lodha Belmondo",
    story: "Family Nest",
    listing_type: "buy",
    location: "Mumbai-Pune Expy, Punawale",
    area_name: "Punawale",
    price: "₹ 1.25 Cr",
    price_raw: 125,
    bhk: 3,
    bathrooms: 3,
    area: "1,500 sqft",
    image:
      "https://images.unsplash.com/photo-1613490908653-ff39b7f575de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1613490908653-ff39b7f575de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    reraVerified: true,
    possession: "Ready to Move",
    propertyType: "Apartment",
    furnishing: "Semi-Furnished",
    amenities: ["Swimming Pool", "Gym", "Club House", "24x7 Security", "Parking", "Power Backup"],
    description:
      "Lodha Belmondo is a masterpiece of luxury living on the Mumbai-Pune Expressway. Surrounded by nature and crafted with world-class amenities, this 3 BHK apartment is perfect for families who want the best of both worlds — serenity and city access.",
    badge: "Family Nest",
  },
  {
    id: "prop-2",
    slug: "godrej-woodsville-hinjewadi",
    title: "Godrej Woodsville",
    story: "Investor's Choice",
    listing_type: "buy",
    location: "Hinjewadi Phase 1, Pune",
    area_name: "Hinjewadi",
    price: "₹ 95 L",
    price_raw: 95,
    bhk: 2,
    bathrooms: 2,
    area: "950 sqft",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    reraVerified: true,
    possession: "Under Construction",
    propertyType: "Apartment",
    furnishing: "Unfurnished",
    amenities: ["Gym", "Children's Play Area", "Jogging Track", "24x7 Security", "Parking"],
    description:
      "Strategically located in Hinjewadi Phase 1 — Pune's premier IT hub — Godrej Woodsville offers excellent rental yield and capital appreciation. An ideal investment for the discerning buyer.",
    badge: "Investor's Choice",
  },
  {
    id: "prop-3",
    slug: "kohinoor-westview-wakad",
    title: "Kohinoor Westview Reserve",
    story: "Premium Living",
    listing_type: "buy",
    location: "Wakad, Pune",
    area_name: "Wakad",
    price: "₹ 1.10 Cr",
    price_raw: 110,
    bhk: 3,
    bathrooms: 2,
    area: "1,120 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    reraVerified: true,
    possession: "Dec 2025",
    propertyType: "Apartment",
    furnishing: "Unfurnished",
    amenities: ["Swimming Pool", "Gym", "Amphitheatre", "Yoga Deck", "24x7 Security"],
    description:
      "Kohinoor Westview Reserve sets a new benchmark for premium living in Wakad. Its thoughtful architecture, lush green spaces, and world-class amenities make it the perfect home for modern families.",
    badge: "Premium Living",
  },
  {
    id: "prop-4",
    slug: "vtp-blue-waters-mahalunge",
    title: "VTP Blue Waters",
    story: "Smart Office Hub",
    listing_type: "rent",
    location: "Mahalunge, Pune",
    area_name: "Mahalunge",
    price: "₹ 28,000/mo",
    price_raw: 85,
    bhk: 2,
    bathrooms: 2,
    area: "850 sqft",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    reraVerified: true,
    possession: "Immediate",
    propertyType: "Apartment",
    furnishing: "Fully Furnished",
    amenities: ["Gym", "Swimming Pool", "24x7 Security", "High-Speed Internet", "Parking"],
    description:
      "A fully furnished 2 BHK available for rent near Baner-Mahalunge road. Perfect for working professionals seeking comfort close to Pune's IT corridor.",
    badge: "Rental Gem",
  },
  {
    id: "prop-5",
    slug: "kalpataru-jade-baner",
    title: "Kalpataru Jade Residences",
    story: "Elite Heritage",
    listing_type: "buy",
    location: "Baner, Pune",
    area_name: "Baner",
    price: "₹ 2.80 Cr",
    price_raw: 280,
    bhk: 4,
    bathrooms: 4,
    area: "2,200 sqft",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490908653-ff39b7f575de?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    reraVerified: true,
    possession: "Ready to Move",
    propertyType: "Villa",
    furnishing: "Fully Furnished",
    amenities: [
      "Private Garden",
      "Swimming Pool",
      "Home Theatre",
      "Club House",
      "24x7 Security",
      "3-Car Parking",
    ],
    description:
      "A rare 4 BHK villa listing in the heart of Baner. Fully furnished, move-in ready, and dripping with luxury — the Kalpataru Jade Residences is a statement of elite living.",
    badge: "Elite Heritage",
  },
  {
    id: "prop-6",
    slug: "rohan-abhilasha-wagholi",
    title: "Rohan Abhilasha",
    story: "First Home Dream",
    listing_type: "buy",
    location: "Wagholi, Pune",
    area_name: "Wagholi",
    price: "₹ 60 L",
    price_raw: 60,
    bhk: 1,
    bathrooms: 1,
    area: "600 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    reraVerified: true,
    possession: "Ready to Move",
    propertyType: "Apartment",
    furnishing: "Semi-Furnished",
    amenities: ["Children's Play Area", "24x7 Security", "Parking", "Power Backup"],
    description:
      "Your first home deserves to be special. Rohan Abhilasha offers affordable 1 BHK apartments in the rapidly growing Wagholi corridor — perfect for young professionals and first-time buyers.",
    badge: "First Home Dream",
  },
  {
    id: "prop-7",
    slug: "marvel-grandeur-kharadi",
    title: "Marvel Grandeur",
    story: "Corner Penthouse",
    listing_type: "rent",
    location: "Kharadi, Pune",
    area_name: "Kharadi",
    price: "₹ 45,000/mo",
    price_raw: 150,
    bhk: 3,
    bathrooms: 3,
    area: "1,800 sqft",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    reraVerified: true,
    possession: "Immediate",
    propertyType: "Penthouse",
    furnishing: "Fully Furnished",
    amenities: ["Rooftop Terrace", "Swimming Pool", "Gym", "24x7 Security", "Concierge"],
    description:
      "Experience penthouse living in Kharadi — Pune's fastest growing business district. This 3 BHK corner unit offers panoramic city views and unmatched luxury.",
    badge: "Corner Penthouse",
  },
  {
    id: "prop-8",
    slug: "majestique-mountains-kothrud",
    title: "Majestique Mountains",
    story: "Hill Serenity",
    listing_type: "buy",
    location: "Kothrud, Pune",
    area_name: "Kothrud",
    price: "₹ 1.85 Cr",
    price_raw: 185,
    bhk: 3,
    bathrooms: 3,
    area: "1,650 sqft",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    ],
    reraVerified: true,
    possession: "Ready to Move",
    propertyType: "Apartment",
    furnishing: "Semi-Furnished",
    amenities: ["Mountain View", "Swimming Pool", "Gym", "Meditation Garden", "24x7 Security"],
    description:
      "Overlooking the Sahyadri hills, Majestique Mountains in Kothrud offers a rare opportunity to own a hill-view 3 BHK apartment. Wake up to mountains and breezes every morning.",
    badge: "Hill Serenity",
  },
];

export const locations = [
  "Wakad",
  "Hinjewadi",
  "Baner",
  "Kothrud",
  "Mahalunge",
  "Wagholi",
  "Kharadi",
  "Punawale",
];

export const getPropertyBySlug = (slug: string): Property | undefined =>
  properties.find((p) => p.slug === slug);

export const getPropertyById = (id: string): Property | undefined =>
  properties.find((p) => p.id === id);
