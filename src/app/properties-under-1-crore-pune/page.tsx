import { LocationPageTemplate } from "@/components/ui/LocationPageTemplate";

export const metadata = {
  title: "Properties Under 1 Crore in Pune | Dilip Bhandge",
  description: "Best 2 BHK and 3 BHK properties in Pune under 1 Crore. Affordable yet premium homes with high ROI potential across top locations.",
};

export default function PuneUnder1CrPage() {
  return (
    <LocationPageTemplate
      locationName="Pune"
      title="Properties Under 1 Cr in Pune"
      description="Are you looking for premium homes that fit your budget? Explore our handpicked selection of high-quality apartments and flats across Pune, all priced under 1 Crore."
      highlightText="Affordable luxury is not a myth. Find your dream home without stretching your budget."
    />
  );
}
