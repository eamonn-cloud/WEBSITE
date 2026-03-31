import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { getIndustryBySlug } from "@/data/industriesData";

export default function ProfessionalServices() {
  const industry = getIndustryBySlug("professional-services");
  
  if (!industry) {
    return null;
  }

  return <IndustryPageTemplate industry={industry} />;
}
