import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export const metadata = {
  title: "Real Estate Blog & Insights | Dilip Bhandge",
  description: "Read the latest news, market trends, investment guides, and real estate insights for Pune and Maharashtra.",
};

export const blogPosts = [
  {
    id: "investing-in-wakad-2024",
    title: "Why Wakad is the Best Real Estate Investment in 2024",
    excerpt: "Discover the infrastructure developments and ROI potential that make Wakad the hottest locality in West Pune.",
    category: "Market Trends",
    date: "March 15, 2026",
    author: "Dilip Bhandge",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "rera-benefits-for-buyers",
    title: "How MahaRERA Empowers Home Buyers",
    excerpt: "Everything you need to know about your rights as a home buyer and how RERA protects your investment.",
    category: "Legal & RERA",
    date: "February 28, 2026",
    author: "Legal Team",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "nri-home-loan-process",
    title: "The Complete NRI Guide to Getting a Home Loan in India",
    excerpt: "A step-by-step breakdown of documentation, eligibility, and the loan approval process for Non-Resident Indians.",
    category: "NRI Services",
    date: "January 10, 2026",
    author: "Financial Advisor",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase mb-4 block">Our Journal</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Real Estate Insights</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest market trends, legal updates, area guides, and investment strategies in Maharashtra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group transition-all hover:shadow-xl hover:-translate-y-1">
              <Link href={`/blog/${post.id}`} className="block relative h-64 overflow-hidden">
                 <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-primary">
                    {post.category}
                 </div>
                 <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </Link>
              <div className="p-8">
                 <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                    <span className="flex items-center"><User size={14} className="mr-1" /> {post.author}</span>
                 </div>
                 <Link href={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                 </Link>
                 <p className="text-gray-600 mb-6 line-clamp-3">
                    {post.excerpt}
                 </p>
                 <Link href={`/blog/${post.id}`} className="inline-flex items-center font-semibold text-primary group-hover:text-secondary transition-colors">
                    Read Article <ArrowRight size={16} className="ml-2" />
                 </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
