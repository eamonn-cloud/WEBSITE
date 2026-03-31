import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { getIndustryBySlug } from "@/data/industriesData";

export default function LendingFinance() {
  const industry = getIndustryBySlug("lending-finance");
  
  if (!industry) {
    return null;
  }

  return <IndustryPageTemplate industry={industry} />;
}
