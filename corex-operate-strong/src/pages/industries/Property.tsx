import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { getIndustryBySlug } from "@/data/industriesData";

export default function Property() {
  const industry = getIndustryBySlug("property");
  
  if (!industry) {
    return null;
  }

  return <IndustryPageTemplate industry={industry} />;
}
