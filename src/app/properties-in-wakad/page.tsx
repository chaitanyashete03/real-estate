import { LocationPageTemplate } from "@/components/ui/LocationPageTemplate";

export const metadata = {
  title: "Premium Properties in Wakad, Pune | Dilip Bhandge",
  description: "Explore 2 BHK, 3 BHK, and luxury real estate in Wakad, Pune. Verified listings, RERA approved projects, and the best prices guaranteed.",
};

export default function WakadPropertiesPage() {
  return (
    <LocationPageTemplate
      locationName="Wakad"
      title="Properties in Wakad, Pune"
      description="Wakad represents the perfect harmony of residential comfort and commercial proximity. Located just minutes away from Hinjewadi IT Park and the Mumbai-Pune Expressway."
      highlightText="Discover top-tier developments from premium builders in Pune's fastest-growing suburb."
    />
  );
}
