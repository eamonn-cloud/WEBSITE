import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { getIndustryBySlug } from "@/data/industriesData";

export default function Agencies() {
  const industry = getIndustryBySlug("agencies");
  
  if (!industry) {
    return null;
  }

  return <IndustryPageTemplate industry={industry} />;
}
