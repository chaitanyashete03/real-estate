import Image from "next/image";
import { Star, Quote } from "lucide-react";

export const metadata = {
  title: "Client Testimonials | Dilip Bhandge Real Estate",
  description: "Read what hundreds of happy families and investors have to say about working with Dilip Bhandge for their property needs in Pune.",
};

const testimonials = [
  {
    id: 1,
    name: "Rajesh & Priya Sharma",
    location: "Bought 3 BHK in Wakad",
    rating: 5,
    text: "Buying our first home felt daunting until we met Dilip sir. He was completely transparent about the pricing, RERA approvals, and hidden costs. He guided us like family. Highly recommended!",
    date: "January 2024"
  },
  {
    id: 2,
    name: "Vikram Desai",
    location: "NRI Investor, Dubai",
    rating: 5,
    text: "As an NRI, managing property investments in Pune was difficult. Dilip's team took care of end-to-end services, from finding the right commercial space to handling the paperwork flawlessly.",
    date: "November 2023"
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    location: "Sold Property in Baner",
    rating: 4,
    text: "I needed to sell my apartment quickly due to relocation. Dilip Bhandge got me a great deal within 3 weeks and ensured the entire legal transfer process was smooth.",
    date: "August 2023"
  },
  {
    id: 4,
    name: "Amitabh Verma",
    location: "Bought Plot in Hinjewadi",
    rating: 5,
    text: "Trust is the most important factor in real estate, and Dilip has earned mine 100%. He showed me properties that perfectly fit my budget without trying to upsell. Best consultant in Pune.",
    date: "July 2023"
  }
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-primary py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Client <span className="text-secondary">Stories</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Don't just take our word for it. Here is what our clients have experienced while finding their dream homes with us.
        </p>
      </section>

      {/* Stats Board */}
      <section className="mx-auto max-w-5xl px-6 md:px-12 -mt-10 relative z-10 mb-20">
         <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 flex flex-col md:flex-row items-center justify-around text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
           <div className="p-4 w-full">
             <div className="text-4xl font-display font-bold text-primary mb-1">4.9/5</div>
             <div className="flex justify-center text-secondary mb-2">
               {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
             </div>
             <div className="text-sm text-gray-500">Average Rating</div>
           </div>
           <div className="p-4 w-full">
             <div className="text-4xl font-display font-bold text-primary mb-1">500+</div>
             <div className="text-gray-900 font-medium mb-1 mt-3">Happy Families</div>
             <div className="text-sm text-gray-500">Since 2010</div>
           </div>
           <div className="p-4 w-full">
             <div className="text-4xl font-display font-bold text-primary mb-1">100%</div>
             <div className="text-gray-900 font-medium mb-1 mt-3">Transparency</div>
             <div className="text-sm text-gray-500">No hidden costs</div>
           </div>
         </div>
      </section>

      {/* Testimonials Grid */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-shadow hover:shadow-md relative">
              <Quote size={48} className="text-primary/10 absolute top-6 right-8" />
              <div className="flex text-secondary mb-4">
                 {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < item.rating ? "currentColor" : "none"} className={i < item.rating ? "text-secondary" : "text-gray-300"} />
                 ))}
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 italic hover:not-italic">
                "{item.text}"
              </p>
              <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                 <div>
                   <h4 className="font-bold text-gray-900">{item.name}</h4>
                   <p className="text-xs text-gray-500">{item.location}</p>
                 </div>
                 <span className="text-xs text-gray-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
         <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Are you a past client?</h2>
         <p className="text-gray-600 mb-8">Your feedback helps us improve and helps others make informed decisions. Please consider leaving us a review on Google.</p>
         <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-3 bg-white border border-gray-200 text-gray-800 rounded-lg hover:bg-gray-50 shadow-sm font-medium transition-colors">
            Write a Google Review
         </a>
      </section>
    </main>
  );
}
