import { Home, Key, Globe, FileCheck, CircleDollarSign, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Services | Dilip Bhandge Real Estate",
  description: "Comprehensive real estate services including Buying, Selling, NRI Services, Home Loans, and Legal Assistance.",
};

const services = [
  {
    icon: Home,
    title: "Property Buying",
    desc: "From finding the perfect home to negotiating the best price, we handle your entire property buying journey with absolute transparency."
  },
  {
    icon: Key,
    title: "Property Selling",
    desc: "Get the best market value for your property. We handle marketing, buyer screening, and complete legal documentation."
  },
  {
    icon: Globe,
    title: "NRI Services",
    desc: "Dedicated end-to-end property management and investment consulting tailored specifically for Non-Resident Indians."
  },
  {
    icon: CircleDollarSign,
    title: "Home Loans",
    desc: "Hassle-free loan processing with major Indian banks (SBI, HDFC, ICICI) at the lowest possible interest rates."
  },
  {
    icon: FileCheck,
    title: "Legal Assistance",
    desc: "Expert legal team to verify title deeds, RERA compliance, and handle all registration processes safely."
  },
  {
    icon: Home,
    title: "Vastu Consultation",
    desc: "Expert advice on Vastu Shastra to ensure your new home brings prosperity, health, and happiness."
  }
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-primary py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Premium Real Estate <span className="text-secondary">Services</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          We offer comprehensive end-to-end solutions for all your real estate needs, ensuring a smooth and hassle-free experience.
        </p>
      </section>

      {/* Services Grid */}
      <section className="mx-auto max-w-7xl px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl transition-all hover:shadow-xl hover:-translate-y-1 group">
              <div className="h-16 w-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <service.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.desc}
              </p>
              <Link href="/contact" className="text-primary font-semibold flex items-center group-hover:text-secondary transition-colors">
                Know More <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-5xl px-6 my-12">
        <div className="bg-primary rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6 relative z-10">
            Ready to find your dream property?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Book a free consultation today. Let our experts guide you to the best investments in Maharashtra.
          </p>
          <div className="relative z-10">
            <Link href="/contact">
              <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-10">
                Book Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
