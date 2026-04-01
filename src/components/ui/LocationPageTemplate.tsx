import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/constants";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface LocationPageProps {
  locationName: string;
  title: string;
  description: string;
  highlightText: string;
}

export function LocationPageTemplate({ locationName, title, description, highlightText }: LocationPageProps) {
  // Mock filtering properties based on location
  const filteredProperties = properties.filter(p => 
    p.location.toLowerCase().includes(locationName.toLowerCase().replace('pune', '').trim())
  );
  
  // For demonstration, if no match, just show all
  const displayedProperties = filteredProperties.length > 0 ? filteredProperties : properties;

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      {/* Location Hero */}
      <section className="bg-primary pt-24 pb-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-black/60 z-10" />
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary/30">
             <MapPin size={16} className="mr-2" /> Local Area Guide
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <p className="text-lg text-secondary font-medium italic">
            {highlightText}
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-20 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
           <div>
             <h2 className="text-2xl font-bold font-display text-gray-900 mb-2">Find your perfect home in {locationName}</h2>
             <p className="text-gray-600">Showing {displayedProperties.length} verified premium properties in this locality.</p>
           </div>
           <Link href="/contact">
             <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-md">
                Get Expert Advice
             </Button>
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProperties.map((prop) => (
            <PropertyCard key={prop.id} {...prop} />
          ))}
        </div>
        
        {displayedProperties.length === properties.length && (
           <div className="mt-12 text-center text-gray-500">
              <p>Currently showing popular properties across Pune. Contact us for exclusive listings in {locationName}.</p>
           </div>
        )}
      </section>
      
      {/* Area Highlights */}
      <section className="bg-white py-20 border-t border-gray-100">
         <div className="mx-auto max-w-7xl px-6 md:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-12">Why Invest in {locationName}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="text-xl font-bold text-primary mb-3">Excellent Connectivity</h3>
                  <p className="text-gray-600">Seamless access to major highways, IT parks, and upcoming metro lines ensuring reduced commute times for working professionals.</p>
               </div>
               <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="text-xl font-bold text-primary mb-3">High Capital Appreciation</h3>
                  <p className="text-gray-600">Historically delivering strong year-on-year returns, making it a lucrative choice for both end-users and investors.</p>
               </div>
               <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="text-xl font-bold text-primary mb-3">Social Infrastructure</h3>
                  <p className="text-gray-600">Surrounded by reputed international schools, multi-specialty hospitals, and premium shopping malls.</p>
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
