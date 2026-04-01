"use client";

import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent Successfully! We will get back to you shortly.");
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      <section className="bg-primary py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Get in <span className="text-secondary">Touch</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We are here to help you find your perfect property. Reach out to us for any queries, site visits, or expert consultation.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 md:px-12 py-16 lg:flex gap-12 -mt-16 relative z-10">
        
        {/* Contact Info Cards */}
        <div className="lg:w-1/3 flex flex-col gap-6">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
               <Phone size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-500 mb-2">Mon-Sat from 9am to 7pm.</p>
              <a href="tel:+919876543210" className="text-primary font-semibold hover:text-secondary transition-colors text-lg">
                +91 98765 43210
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
               <Mail size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-500 mb-2">Our friendly team is here to help.</p>
              <a href="mailto:info@dilipbhandge.com" className="text-primary font-semibold hover:text-secondary transition-colors text-lg break-all">
                info@dilipbhandge.com
              </a>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
               <MapPin size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Office</h3>
              <p className="text-gray-500 mb-2">Come say hello.</p>
              <p className="font-medium text-gray-800">
                Office No. 405, Premium Plaza, Wakad, Pune, Maharashtra 411057
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:w-2/3 mt-12 lg:mt-0">
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input required id="name" type="text" placeholder="John Doe" className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <input required id="phone" type="tel" placeholder="+91 98765 43210" className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address (Optional)</label>
                <input id="email" type="email" placeholder="john@example.com" className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                <textarea required id="message" rows={4} placeholder="I am looking for a 2 BHK in Wakad..." className="w-full p-4 rounded-xl border border-gray-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"></textarea>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white text-lg h-14">
                <Send size={20} className="mr-2" /> Send Message
              </Button>
            </form>
          </div>
        </div>

      </section>

      {/* Map Section */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 pb-16">
         <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-slate-200 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.42878788414!2d73.7663!3d18.5996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzU4LjYiTiA3M8KwNDUnNTguNyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Office Location Map"
              className="absolute inset-0"
            />
         </div>
      </section>
    </main>
  );
}
