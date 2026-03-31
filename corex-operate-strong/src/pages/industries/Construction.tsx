import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { getIndustryBySlug } from "@/data/industriesData";

export default function Construction() {
  const industry = getIndustryBySlug("construction");
  
  if (!industry) {
    return null;
  }

  return <IndustryPageTemplate industry={industry} />;
}
