"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function BookVisitPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 flex items-center justify-center pt-20">
         <div className="bg-white p-10 md:p-16 rounded-3xl shadow-xl text-center max-w-lg mx-4">
           <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center text-green-500 mx-auto mb-6">
             <Calendar size={48} />
           </div>
           <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Visit Confirmed!</h1>
           <p className="text-lg text-gray-600 mb-8">
             Thank you for scheduling a site visit. Our executive will contact you shortly to confirm the exact timings and provide location details.
           </p>
           <Button onClick={() => window.location.href = "/"} size="lg" className="w-full">
             Back to Home
           </Button>
         </div>
      </main>
    );
  }

  return (
    <main className="min-h-[90vh] bg-slate-50 flex items-center justify-center pt-24 pb-20">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full mx-4 border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2 text-center">Schedule a Site Visit</h1>
        <p className="text-gray-500 text-center mb-8">Choose a date and time that works best for you to explore properties.</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Which property are you interested in?</label>
             <select required className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                <option value="" disabled selected>Select a Option</option>
                <option>Lodha Belmondo</option>
                <option>Godrej Woodsville</option>
                <option>Kohinoor Westview Reserve</option>
                <option>VTP Blue Waters</option>
                <option>I haven't decided yet / Show me options</option>
             </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-700 flex items-center"><Calendar size={16} className="mr-2" /> Preferred Date</label>
               <input required type="date" className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
             </div>
             <div className="space-y-2">
               <label className="text-sm font-medium text-gray-700 flex items-center"><Clock size={16} className="mr-2" /> Preferred Time</label>
               <select required className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
                  <option>Morning (10 AM - 12 PM)</option>
                  <option>Afternoon (12 PM - 3 PM)</option>
                  <option>Evening (3 PM - 6 PM)</option>
               </select>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input required type="text" placeholder="John Doe" className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Phone Number</label>
              <input required type="tel" placeholder="+91 98765 43210" className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
            </div>
          </div>

          <div className="pt-4">
             <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-primary font-bold text-lg h-14">
               Confirm Site Visit
             </Button>
          </div>
        </form>
      </div>
    </main>
  );
}
