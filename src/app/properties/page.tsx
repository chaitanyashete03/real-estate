import { PropertyCard } from "@/components/ui/PropertyCard";
import { properties } from "@/lib/constants";
import { Filter, SlidersHorizontal, Map as MapIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Properties | Dilip Bhandge Real Estate",
  description: "Browse premium properties across Pune. Find luxury flats, villas, and commercial spaces tailored to your needs.",
};

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Explore Properties
            </h1>
            <p className="text-gray-600 max-w-xl text-lg">
              Find your perfect home from our curated selection of premium RERA-approved properties in top locations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="bg-white">
              <MapIcon size={18} className="mr-2" /> Map View
            </Button>
            <Button variant="outline" className="bg-white md:hidden">
              <Filter size={18} className="mr-2" /> Filters
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-1/4 hidden md:block">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-32">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold font-display flex items-center">
                  <SlidersHorizontal size={20} className="mr-2 text-primary" /> Filters
                </h2>
                <button className="text-sm text-gray-500 underline">Reset</button>
              </div>

              {/* Location Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 block">Location</h3>
                <select className="w-full rounded-lg bg-slate-50 border border-gray-200 p-3 text-sm outline-none">
                  <option>All Locations</option>
                  <option>Wakad</option>
                  <option>Hinjewadi</option>
                  <option>Baner</option>
                  <option>Kothrud</option>
                </select>
              </div>

              {/* Budget Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 block">Budget Range</h3>
                <select className="w-full rounded-lg bg-slate-50 border border-gray-200 p-3 text-sm outline-none">
                  <option>Any Budget</option>
                  <option>Under 50 Lakhs</option>
                  <option>50 Lakhs - 1 Cr</option>
                  <option>1 Cr - 3 Cr</option>
                  <option>Above 3 Cr</option>
                </select>
              </div>

              {/* BHK Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 block">BHK Configuration</h3>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, "4+"].map(num => (
                    <button key={num} className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:border-primary hover:bg-primary/5 transition-colors">
                      {num} BHK
                    </button>
                  ))}
                </div>
              </div>

               {/* Property Type */}
               <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 block">Property Type</h3>
                <div className="flex flex-col gap-2">
                  {["Apartment", "Villa", "Plot", "Commercial"].map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded text-primary border-gray-300 focus:ring-primary" />
                      <span className="text-sm text-gray-700">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-primary mt-4">Apply Filters</Button>
            </div>
          </aside>

          {/* Properties Grid */}
          <div className="w-full lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-gray-600">Showing <span className="font-bold text-gray-900">{properties.length}</span> properties</span>
              <select className="border-none bg-transparent text-sm font-medium text-gray-700 outline-none">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
