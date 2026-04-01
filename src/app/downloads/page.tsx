import { FileText, Download, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Download Center | Dilip Bhandge Real Estate",
  description: "Download property brochures, floor plans, area guides, and real estate investment reports for Pune.",
};

const downloads = [
  { id: 1, title: "Pune Real Estate Market Report 2024", type: "PDF Guide", size: "4.2 MB", category: "Market Research" },
  { id: 2, title: "NRI Home Buying Guide", type: "eBook", size: "2.1 MB", category: "Guides" },
  { id: 3, title: "Lodha Belmondo - Official e-Brochure", type: "Brochure", size: "8.5 MB", category: "Property Brochures" },
  { id: 4, title: "Godrej Woodsville - Floor Plans", type: "Floor Plans", size: "3.4 MB", category: "Property Brochures" },
  { id: 5, title: "Checklist: Legal Documents for Property Purchase", type: "Checklist", size: "1.2 MB", category: "Legal Resources" }
];

export default function DownloadsPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-20">
      
      {/* Header */}
      <section className="bg-primary py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
          Resource <span className="text-secondary">Center</span>
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Access free, high-quality resources, market insights, brochures, and legal checklists to help you make informed decisions.
        </p>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-5xl px-6 md:px-12 py-16 -mt-10 relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          
          <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
            <h2 className="text-2xl font-bold font-display text-gray-900">Available Downloads</h2>
            <div className="hidden md:flex gap-2">
               <Button variant="outline" size="sm" className="rounded-full bg-gray-50">All</Button>
               <Button variant="ghost" size="sm" className="rounded-full">Brochures</Button>
               <Button variant="ghost" size="sm" className="rounded-full">Guides</Button>
            </div>
          </div>

          <div className="space-y-4">
             {downloads.map((item) => (
                <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all group bg-slate-50 hover:bg-white">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="h-12 w-12 bg-white rounded-xl border border-gray-200 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-xs font-medium text-gray-500 mt-1">
                        <span className="text-secondary">{item.category}</span> • {item.type} • {item.size}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full sm:w-auto shrink-0 group-hover:bg-primary group-hover:text-white transition-colors border-gray-200">
                    <Download size={16} className="mr-2" /> Download
                  </Button>
                </div>
             ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-2xl p-6 border border-blue-100 flex flex-col md:flex-row items-center gap-6">
             <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 shrink-0 mx-auto md:mx-0">
               <TrendingUp size={32} />
             </div>
             <div className="text-center md:text-left flex-1">
               <h4 className="font-bold text-gray-900 text-lg">Want personalized investment reports?</h4>
               <p className="text-gray-600 text-sm mt-1">Leave your contact details and our research team will send you a customized ROI analysis for top properties in Pune.</p>
             </div>
             <Button className="w-full md:w-auto shrink-0 bg-blue-600 hover:bg-blue-700 text-white">
               Request Report
             </Button>
          </div>
        </div>
      </section>

    </main>
  );
}
