import { LocationPageTemplate } from "@/components/ui/LocationPageTemplate";

export const metadata = {
  title: "Premium Baner Real Estate | Dilip Bhandge",
  description: "Exclusive properties in Baner, Pune. Discover luxury apartments, villas, and commercial spaces with high ROI and premium lifestyle.",
};

export default function BanerPropertiesPage() {
  return (
    <LocationPageTemplate
      locationName="Baner"
      title="Real Estate in Baner, Pune"
      description="Baner is synonymous with upscale living and vibrant nightlife. Offering some of the most luxurious developments in West Pune, it is the destination for high-net-worth individuals."
      highlightText="Experience the pinnacle of luxury living in Pune's most sought-after neighborhood."
    />
  );
}
