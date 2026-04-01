import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { properties } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { MapPin, BedDouble, Bath, Square, BadgeCheck, PhoneCall, Download, Send, CheckCircle2 } from "lucide-react";

export function generateMetadata({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id);
  if (!property) return { title: "Property Not Found" };
  return {
    title: `${property.title} in ${property.location} | Dilip Bhandge Real Estate`,
    description: `Buy ${property.bhk} BHK ${property.propertyType} at ${property.title}, ${property.location}. RERA Verified. Contact for best price.`,
  };
}

export default function PropertyPage({ params }: { params: { id: string } }) {
  const property = properties.find(p => p.id === params.id);
  
  if (!property) {
    notFound();
  }

  const amenities = [
    "Swimming Pool", "Gymnasium", "Club House", "24/7 Security", 
    "Power Backup", "Car Parking", "Children's Play Area", "Jogging Track"
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Gallery Header */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 mt-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700">
                {property.propertyType}
              </span>
              <span className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-700">
                {property.possession}
              </span>
              {property.reraVerified && (
                <span className="flex items-center gap-1 px-3 py-1 bg-green-50 border border-green-200 rounded-full text-xs font-semibold text-green-700">
                  <BadgeCheck size={14} /> RERA Approved
                </span>
              )}
            </div>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-2">
              {property.title}
            </h1>
            <p className="flex items-center text-gray-500 text-lg">
              <MapPin size={18} className="mr-1 text-primary" /> {property.location}
            </p>
          </div>
          <div className="text-left md:text-right">
            <p className="text-sm text-gray-500 mb-1">Starting Price</p>
            <p className="text-3xl md:text-4xl font-bold text-primary">{property.price}</p>
          </div>
        </div>

        {/* Hero Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[600px] rounded-2xl overflow-hidden">
          <div className="md:col-span-3 md:row-span-2 relative h-full">
            <Image src={property.image} alt={property.title} fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 75vw" />
          </div>
          <div className="hidden md:block relative h-full">
             <Image src="https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?q=80&w=800&auto=format&fit=crop" alt="Interior" fill className="object-cover" />
          </div>
          <div className="hidden md:block relative h-full">
            <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center cursor-pointer transition-colors hover:bg-black/20">
              <span className="text-white font-bold text-lg">+12 Photos</span>
            </div>
            <Image src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop" alt="Bedroom" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <section className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col lg:flex-row gap-8">
        
        {/* Left Content */}
        <div className="w-full lg:w-2/3 space-y-10">
          
          {/* Quick Stats */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 flex justify-between items-center text-center divide-x divide-gray-100">
            <div className="flex-1 flex flex-col items-center">
              <BedDouble size={28} className="text-gray-400 mb-2" />
              <span className="text-lg font-bold text-gray-900">{property.bhk} BHK</span>
              <span className="text-xs text-gray-500">Bedrooms</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <Bath size={28} className="text-gray-400 mb-2" />
              <span className="text-lg font-bold text-gray-900">{property.bathrooms}</span>
              <span className="text-xs text-gray-500">Bathrooms</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <Square size={28} className="text-gray-400 mb-2" />
              <span className="text-lg font-bold text-gray-900">{property.area}</span>
              <span className="text-xs text-gray-500">Super Built-up</span>
            </div>
          </div>

          {/* Overview */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Property Overview</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Welcome to <strong>{property.title}</strong>, a premium residential project offering luxurious {property.bhk} BHK apartments in the heart of {property.location}. 
              Experience the perfect blend of modern architecture and natural surroundings, designed to provide a lifestyle of unmatched comfort and convenience.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 text-sm">
               <div><p className="text-gray-500 mb-1">Project Status</p><p className="font-semibold text-gray-900">{property.possession}</p></div>
               <div><p className="text-gray-500 mb-1">Furnishing</p><p className="font-semibold text-gray-900">{property.furnishing}</p></div>
               <div><p className="text-gray-500 mb-1">RERA ID</p><p className="font-semibold text-green-600 underline cursor-pointer">P52100012345</p></div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Premium Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {amenities.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 size={24} className="text-secondary mb-2" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/3">
          <div className="sticky top-28 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Interested in this property?</h3>
              <p className="text-sm text-gray-500 mb-6">Get the best price and complete details from Dilip Bhandge.</p>
              
              <div className="space-y-3">
                <a href={`https://wa.me/919876543210?text=Hi, I'm interested in ${property.title}`} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">
                    <Send size={18} className="mr-2" /> WhatsApp Now
                  </Button>
                </a>
                <a href="tel:+919876543210">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                    <PhoneCall size={18} className="mr-2" /> Request Call Back
                  </Button>
                </a>
                <Link href="/book-visit" className="block">
                  <Button className="w-full bg-primary text-white hover:bg-primary/90">
                    Schedule Site Visit
                  </Button>
                </Link>
              </div>
            </div>

            {/* Price Breakup */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex justify-between items-center">
                Price Estimation
                <span className="text-sm font-normal text-gray-500">*Estimated</span>
              </h3>
              <div className="space-y-3 text-sm text-gray-600 mb-6">
                <div className="flex justify-between"><span>Base Price</span><span className="font-semibold text-gray-900">{property.price}</span></div>
                <div className="flex justify-between"><span>Stamp Duty (6%)</span><span>₹ 7.50 L</span></div>
                <div className="flex justify-between"><span>Registration (1%)</span><span>₹ 1.25 L</span></div>
                <div className="flex justify-between pt-3 border-t border-gray-100">
                  <span className="font-bold text-gray-900">Total Est. Price</span>
                  <span className="font-bold text-primary">₹ 1.33 Cr</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <Download size={16} className="mr-2" /> Download Brochure
              </Button>
            </div>
          </div>
        </aside>

      </section>

      {/* Sticky Mobile CTA Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 p-4 flex gap-3 md:hidden z-40 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <a href="tel:+919876543210" className="flex-1">
          <Button variant="outline" className="w-full border-primary text-primary">Call</Button>
        </a>
        <a href={`https://wa.me/919876543210?text=Hi, I'm interested in ${property.title}`} target="_blank" rel="noopener noreferrer" className="flex-1">
          <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white">WhatsApp</Button>
        </a>
      </div>
    </main>
  );
}
