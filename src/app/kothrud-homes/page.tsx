import { LocationPageTemplate } from "@/components/ui/LocationPageTemplate";

export const metadata = {
  title: "Kothrud Homes for Sale | Heritage & Value | Dilip Bhandge",
  description: "Find the best homes and flats for sale in Kothrud, Pune. Established neighborhoods, excellent schools, and peaceful living.",
};

export default function KothrudHomesPage() {
  return (
    <LocationPageTemplate
      locationName="Kothrud"
      title="Homes in Kothrud, Pune"
      description="Kothrud beautifully balances Pune's rich cultural heritage with modern amenities. Known for its peaceful environment and established social infrastructure, it's perfect for families."
      highlightText="Invest in a legacy. Discover premium properties in Pune's most established residential hub."
    />
  );
}
