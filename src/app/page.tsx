import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PropertyCard } from "@/components/ui/PropertyCard";
import { Search, MapPin, Building, PhoneCall } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full mt-[80px]">
        {/* Background Video/Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent z-10" />
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80"
            alt="Luxury Indian Real Estate"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 flex h-full flex-col justify-center px-6 md:px-12 lg:px-24">
          <span className="text-secondary font-semibold tracking-wider uppercase mb-4 animate-fade-in">
            Exclusive Properties in Maharashtra
          </span>
          <h1 className="max-w-3xl text-4xl font-display font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
            Find Your Dream Home With <span className="text-secondary">Dilip Bhandge</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-200 sm:text-xl">
            Over a decade of trust, transparency, and premium real estate expertise across Pune and Maharashtra.
          </p>

          {/* Quick Search Bar */}
          <div className="mt-10 max-w-4xl rounded-2xl bg-white/10 backdrop-blur-md p-4 shadow-xl border border-white/20 sm:p-6 lg:p-8 animate-slide-up">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 items-end">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Location</label>
                <div className="flex items-center rounded-lg bg-white px-3 py-2 text-gray-900 border border-gray-200">
                  <MapPin size={18} className="text-gray-400 mr-2" />
                  <input type="text" placeholder="e.g. Wakad, Pune" className="w-full bg-transparent outline-none" />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Property Type</label>
                <div className="flex items-center rounded-lg bg-white px-3 py-2 text-gray-900 border border-gray-200">
                  <Building size={18} className="text-gray-400 mr-2" />
                  <select className="w-full bg-transparent outline-none appearance-none">
                    <option>All Types</option>
                    <option>Apartment</option>
                    <option>Villa</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-white">Budget</label>
                <div className="flex items-center rounded-lg bg-white px-3 py-2 text-gray-900 border border-gray-200">
                  <span className="text-gray-400 mr-2">₹</span>
                  <select className="w-full bg-transparent outline-none appearance-none">
                    <option>Any Budget</option>
                    <option>Under 1 Cr</option>
                    <option>1 Cr - 3 Cr</option>
                    <option>Above 3 Cr</option>
                  </select>
                </div>
              </div>
              <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold shadow-lg">
                <Search className="mr-2" size={20} /> Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Section */}
      <section className="bg-primary py-12 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 md:px-12 divide-x divide-white/10">
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-bold font-display text-secondary">500+</span>
            <span className="mt-2 text-sm text-gray-300">Happy Families</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-bold font-display text-secondary">25+</span>
            <span className="mt-2 text-sm text-gray-300">Top Builders</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-4xl font-bold font-display text-secondary">15</span>
            <span className="mt-2 text-sm text-gray-300">Years Experience</span>
          </div>
          <div className="flex flex-col items-center justify-center relative">
            <span className="text-4xl font-bold font-display text-secondary">100%</span>
            <span className="mt-2 text-sm text-gray-300">RERA Verified</span>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-primary font-semibold tracking-wider uppercase mb-2">Featured Projects</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-gray-900">
                Discover Premium <br/> Homes
              </h3>
            </div>
            <Link href="/properties">
              <Button variant="outline" className="mt-6 md:mt-0">
                View All Properties
              </Button>
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <PropertyCard
              id="prop-1"
              title="Lodha Belmondo"
              location="Mumbai-Pune Expy, Pune"
              price="₹ 1.25 Cr"
              bhk={3}
              bathrooms={3}
              area="1,500 sqft"
              image="https://images.unsplash.com/photo-1613490908653-ff39b7f575de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              reraVerified={true}
              possession="Ready to Move"
            />
            <PropertyCard
              id="prop-2"
              title="Godrej Woodsville"
              location="Hinjewadi Phase 1, Pune"
              price="₹ 95 L"
              bhk={2}
              bathrooms={2}
              area="950 sqft"
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              reraVerified={true}
              possession="Under Construction"
            />
            <PropertyCard
              id="prop-3"
              title="Kohinoor Westview Reserve"
              location="Wakad, Pune"
              price="₹ 1.10 Cr"
              bhk={3}
              bathrooms={2}
              area="1,120 sqft"
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              reraVerified={true}
              possession="Dec 2025"
            />
          </div>
        </div>
      </section>

      {/* Call to Action Promo */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-primary z-0" />
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          {/* Abstract pattern placeholder */}
          <div className="w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-white to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl text-center px-6">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Looking for a property that perfectly fits your lifestyle?
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let me help you navigate the real estate market with ease. Book a free consultation today for personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-primary hover:bg-white hover:text-primary transition-colors text-lg px-8 h-14">
                Book Free Consultation
              </Button>
            </Link>
            <a href="tel:+919876543210">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 text-lg px-8 h-14 w-full sm:w-auto">
                <PhoneCall className="mr-2" size={20} /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
