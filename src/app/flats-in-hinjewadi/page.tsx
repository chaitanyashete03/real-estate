import { LocationPageTemplate } from "@/components/ui/LocationPageTemplate";

export const metadata = {
  title: "Luxury Flats in Hinjewadi | IT Hub Living | Dilip Bhandge",
  description: "Find the best flats for sale in Hinjewadi, Pune. Excellent ROI, proximity to major IT parks, and premium lifestyle amenities.",
};

export default function HinjewadiFlatsPage() {
  return (
    <LocationPageTemplate
      locationName="Hinjewadi"
      title="Flats in Hinjewadi, Pune"
      description="Invest in the heart of Pune's IT revolution. Hinjewadi offers high-rental yield properties, smart home living, and a cosmopolitan lifestyle tailored for modern professionals."
      highlightText="Walk to work. Live in luxury. Explore Hinjewadi's best properties today."
    />
  );
}
