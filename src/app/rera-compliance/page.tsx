import { ShieldCheck, FileText, AlertCircle, Info } from "lucide-react";

export const metadata = {
  title: "RERA Compliance & Legal | Dilip Bhandge Real Estate",
  description: "Dilip Bhandge strictly adheres to MahaRERA guidelines. View our RERA registration details, legal compliance policies, and terms of service.",
};

export default function ReraCompliancePage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <div className="text-center mb-16">
          <div className="h-20 w-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
             <ShieldCheck size={40} />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">RERA Compliance</h1>
          <p className="text-lg text-gray-600">
            We believe in 100% transparency. Dilip Bhandge Real Estate is fully registered with MahaRERA and strictly adheres to all regulations to protect your investments.
          </p>
        </div>

        <div className="space-y-8">
          {/* Registration Details */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="mr-3 text-primary" /> MahaRERA Registration Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 text-gray-700">
              <div>
                <span className="block text-sm text-gray-500 mb-1">Agent Name</span>
                <span className="font-semibold">Dilip Bhandge</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500 mb-1">MahaRERA Registration No.</span>
                <span className="font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-md">A52100001234</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500 mb-1">Registered Address</span>
                <span className="font-semibold">Office 405, Premium Plaza, Wakad, Pune, 411057</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500 mb-1">Contact Email</span>
                <span className="font-semibold">legal@dilipbhandge.com</span>
              </div>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-100">
               <a href="https://maharera.mahaonline.gov.in/" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline text-sm inline-flex items-center">
                  Verify Registration on MahaRERA Official Website
               </a>
            </div>
          </section>

          {/* Builder Due Diligence */}
          <section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <Info className="mr-3 text-primary" /> Our Project Selection Policy
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not promote or sell properties that are not registered under MahaRERA. Before listing any project on our platform or recommending it to clients, we conduct internal due diligence:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Verification of builder's past delivery track record.</li>
              <li>Checking the MahaRERA project registration certificate.</li>
              <li>Reviewing approved floor plans and commencement certificates (CC).</li>
              <li>Validating land title encumbrances where public data is made available.</li>
            </ul>
          </section>

          {/* Disclaimer */}
          <section className="bg-orange-50 p-8 rounded-2xl border border-orange-200">
             <h2 className="text-xl font-bold text-orange-800 mb-4 flex items-center">
               <AlertCircle className="mr-3" /> Disclaimer
             </h2>
             <div className="text-sm text-orange-800 space-y-4 leading-relaxed">
               <p>
                 While reasonable efforts are being made to ensure the authenticity and completeness of the Information displayed here, Dilip Bhandge Real Estate does not own the projects (unless specified) and acts strictly as a real estate agent/consultant between the user and the developer.
               </p>
               <p>
                 The details like pricing, amenities, layouts, and specifications displayed are subject to change by the respective developers without prior notice. Users are advised to verify the complete details with the developers directly or through the MahaRERA website before making any purchase decisions.
               </p>
             </div>
          </section>
        </div>
      </div>
    </main>
  );
}
