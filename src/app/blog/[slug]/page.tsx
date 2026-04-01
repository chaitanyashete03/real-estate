import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "../page";

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.id === params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Dilip Bhandge Blog`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.id === params.slug);
  
  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white pt-24 pb-20">
      <article className="mx-auto max-w-4xl px-6 md:px-12 mt-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-primary mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to all articles
        </Link>
        
        <div className="mb-10 text-center">
          <span className="inline-flex items-center px-4 py-2 bg-slate-100 rounded-full text-sm font-semibold text-primary mb-6">
            <Tag size={16} className="mr-2" /> {post.category}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-8 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center"><User size={16} className="mr-2" /> By {post.author}</span>
            <span className="flex items-center"><Calendar size={16} className="mr-2" /> {post.date}</span>
          </div>
        </div>

        <div className="relative aspect-video w-full rounded-3xl overflow-hidden shadow-xl mb-12">
           <Image src={post.image} alt={post.title} fill className="object-cover" priority />
        </div>

        <div className="prose prose-lg max-w-none text-gray-600">
          <p className="lead text-xl text-gray-800 font-medium mb-8">
            {post.excerpt}
          </p>
          <p>
            Real estate in Maharashtra is continuously evolving, and localities like Wakad are at the forefront of this transformation. With rapid infrastructure development, proximity to major IT hubs like Hinjewadi, and excellent connectivity to Mumbai via the Expressway, property investments here are yielding significant returns.
          </p>
          <h2>Infrastructure Development</h2>
          <p>
            The upcoming metro line and ring road projects are set to drastically reduce commute times, making the area even more attractive to professionals and families alike. Builders are focusing on delivering holistic townships with world-class amenities to cater to the modern home buyer.
          </p>
          <blockquote>
            "An investment in the right locality today is the foundation for generational wealth tomorrow." - Dilip Bhandge
          </blockquote>
          <h2>Future Projections</h2>
          <p>
            Market analysts predict a steady capital appreciation of 8-10% annually in emerging corridors. For NRIs and local investors, early entry into these under-construction projects provides the dual benefit of lower entry prices and maximum ROI upon project completion.
          </p>
          
          <div className="mt-16 bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center">
             <h3 className="text-2xl font-bold font-display text-gray-900 mb-4 mt-0">Ready to invest in {post.category === "NRI Services" ? "India" : "Wakad"}?</h3>
             <p className="mb-6">Contact our team for a personalized property consultation.</p>
             <Link href="/contact" className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors">
               Book a Consultation
             </Link>
          </div>
        </div>

      </article>
    </main>
  );
}
