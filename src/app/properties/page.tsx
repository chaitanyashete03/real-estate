import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/propertiesData";
import { Filter, SlidersHorizontal, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Properties | Dilip Bhandge Real Estate",
  description: "Browse premium properties across Pune. Find luxury flats, villas, and commercial spaces tailored to your needs. RERA verified listings.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl container-padding">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-secondary mb-3">
              <span className="h-px w-8 bg-secondary" />
              Pune Real Estate
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900">
              Explore Properties
            </h1>
            <p className="text-gray-600 mt-4 max-w-xl text-lg">
              Find your perfect home from our curated selection of premium RERA-approved properties in top locations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button className="bg-white border-2 border-gray-100 text-gray-900 hover:bg-gray-50 rounded-xl px-6">
              <MapIcon size={18} className="mr-2 text-primary" /> Map View
            </Button>
            <Button className="bg-primary text-white md:hidden rounded-xl px-6">
              <Filter size={18} className="mr-2" /> Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:col-span-1 hidden md:block">
            <div className="glass-card rounded-2xl p-6 sticky top-32">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold font-display flex items-center text-primary">
                  <SlidersHorizontal size={20} className="mr-3" /> Filters
                </h2>
                <button className="text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-primary transition-colors">Reset</button>
              </div>

              <div className="space-y-8">
                {/* Location Filter */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">Location</label>
                  <select className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-sm font-semibold outline-none focus:border-primary transition-all">
                    <option>All Locations</option>
                    <option>Wakad</option>
                    <option>Hinjewadi</option>
                    <option>Baner</option>
                    <option>Kothrud</option>
                  </select>
                </div>

                {/* Budget Filter */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">Budget Range</label>
                  <select className="w-full rounded-xl bg-slate-50 border border-slate-200 p-3.5 text-sm font-semibold outline-none focus:border-primary transition-all">
                    <option>Any Budget</option>
                    <option>Under 50 Lakhs</option>
                    <option>50 Lakhs - 1 Cr</option>
                    <option>1 Cr - 3 Cr</option>
                    <option>Above 3 Cr</option>
                  </select>
                </div>

                {/* BHK Filter */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">Configuration</label>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, "4+"].map(num => (
                      <button key={num} className="px-4 py-3 border border-slate-200 rounded-xl text-xs font-bold transition-all hover:border-primary hover:bg-primary/5 active:scale-95">
                        {num} BHK
                      </button>
                    ))}
                  </div>
                </div>

                 {/* Property Type */}
                 <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3 block">Property Type</label>
                  <div className="space-y-3">
                    {["Apartment", "Villa", "Penthouse", "Studio"].map(type => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex h-5 w-5 items-center justify-center rounded border-2 border-slate-200 transition-all group-hover:border-primary">
                          <input type="checkbox" className="peer absolute h-full w-full opacity-0 cursor-pointer" />
                          <div className="h-2.5 w-2.5 rounded-sm bg-primary opacity-0 transition-opacity peer-checked:opacity-100" />
                        </div>
                        <span className="text-sm font-medium text-gray-600 group-hover:text-primary transition-colors">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="w-full bg-primary mt-10 rounded-xl py-6 font-bold shadow-xl shadow-primary/20">Apply Filters</Button>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-500">
                Found <span className="text-primary font-bold">{properties.length}</span> exceptional properties
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Sort by:</span>
                <select className="border-none bg-transparent text-sm font-bold text-gray-900 outline-none cursor-pointer">
                  <option>Featured</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {properties.map((prop) => (
                <PropertyCard key={prop.id} {...prop} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
