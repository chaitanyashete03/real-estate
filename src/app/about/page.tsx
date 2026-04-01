import Image from "next/image";
import { Award, Briefcase, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "About Dilip Bhandge | Real Estate Expert in Pune",
  description: "Learn about Dilip Bhandge, top real estate consultant in Maharashtra. Over 15 years of trust, transparency, and premium property sales.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-12 md:py-20 lg:flex items-center gap-16">
        <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
          <div className="relative aspect-4/3 max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl z-10">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
              alt="Dilip Bhandge - Real Estate Expert"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Abstract Backing */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/10 rounded-full blur-3xl z-0" />

          {/* Trust Badge */}
          <div className="absolute -bottom-6 -right-6 md:right-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-slide-up">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-full bg-primary text-secondary flex items-center justify-center font-bold text-xl">
                15+
              </div>
              <div>
                <p className="font-bold text-gray-900">Years of</p>
                <p className="text-gray-500">Excellence</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <span className="text-secondary font-semibold tracking-wider uppercase mb-4 block">About Me</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
            Building Trust Through <br /> <span className="text-primary">Transparent Real Estate</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            I'm Dilip Bhandge, your dedicated real estate partner in Maharashtra. My journey started with a simple vision: to bring absolute transparency and trust to the Indian real estate market.
          </p>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            With over a decade of experience, I specialize in premium residential projects, luxury villas, and high-yield commercial spaces across Pune's top tier locations including Wakad, Hinjewadi, and Baner.
          </p>

          <div className="flex items-center gap-4 mb-8">
            <div className="h-12 w-12 rounded-full bg-green-50 flex items-center justify-center border border-green-200 text-green-600">
              <Award size={24} />
            </div>
            <div>
              <p className="font-bold text-gray-900">MahaRERA Registered</p>
              <p className="text-xs text-gray-500">Reg No. A52100001234</p>
            </div>
          </div>

          <a href="tel:+919876543210">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get in Touch <ArrowRight size={18} className="ml-2" />
            </Button>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-slate-50 py-20 border-y border-gray-200">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-primary">
              <Users size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 font-display">500+</h3>
            <p className="text-gray-500 mt-2">Happy Families</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-primary">
              <Briefcase size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 font-display">25+</h3>
            <p className="text-gray-500 mt-2">Builder Tie-ups</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-primary">
              <Award size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 font-display">15+</h3>
            <p className="text-gray-500 mt-2">Awards Won</p>
          </div>
          <div className="text-center">
            <div className="mx-auto h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-4 text-primary">
              <Star size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 font-display">4.9/5</h3>
            <p className="text-gray-500 mt-2">Google Reviews</p>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-20 lg:flex gap-16">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl font-bold text-primary mb-6 font-display">Our Mission</h2>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-secondary pl-6">
            To empower home buyers and investors with accurate data, unbiased advice, and a seamless, hassle-free property buying experience in Maharashtra.
          </p>
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-primary mb-6 font-display">Our Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed border-l-4 border-secondary pl-6">
            To be the most trusted and preferred real estate consulting brand in India, known for 100% transparency, ethical practices, and customer-first approach.
          </p>
        </div>
      </section>
    </main>
  );
}
