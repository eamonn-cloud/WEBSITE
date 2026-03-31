import { Briefcase, Users, HardHat, Landmark, Building2, Megaphone } from "lucide-react";

export interface IndustryData {
  slug: string;
  name: string;
  icon: typeof Briefcase;
  heroTagline: string;
  problems: {
    title: string;
    description: string;
  }[];
  solution: {
    diagnosis: string;
    redesign: string;
    enablement: string;
  };
  impact: {
    before: string;
    after: string;
    metric: string;
  }[];
  caseStudy: {
    quote: string;
    company: string;
    result: string;
  };
  primaryPainPoint: string;
  keySolution: string;
}

export const industriesData: IndustryData[] = [
  {
    slug: "professional-services",
    name: "Professional Services",
    icon: Briefcase,
    heroTagline: "Transforming billable chaos into predictable, high-margin delivery engines.",
    problems: [
      {
        title: "Inconsistent Service Delivery",
        description: "Every engagement feels like starting from scratch, with no standardized playbooks or repeatable processes."
      },
      {
        title: "Low Utilization Rates",
        description: "Senior talent wasted on admin tasks while billable hours slip through the cracks."
      },
      {
        title: "Manual Client Reporting",
        description: "Hours spent compiling reports that could be automated, eroding profitability."
      },
      {
        title: "Knowledge Silos",
        description: "Critical expertise trapped in individuals' heads, not embedded in systems."
      }
    ],
    solution: {
      diagnosis: "We audit your entire service delivery workflow—from client intake to project close—identifying where time and margin leak out.",
      redesign: "We install standardized Service Delivery SOPs, automated utilization tracking, and templated client reporting systems.",
      enablement: "Your team is trained to operate the new systems independently, with embedded dashboards for real-time visibility."
    },
    impact: [
      { before: "Manual time tracking", after: "Automated capture", metric: "12 hrs/week saved" },
      { before: "65% utilization", after: "85% utilization", metric: "+20% billable hours" },
      { before: "Weekly manual reports", after: "Real-time dashboards", metric: "90% time reduction" }
    ],
    caseStudy: {
      quote: "We recovered €180K in unbilled hours within the first quarter.",
      company: "Mid-market Consulting Firm",
      result: "85% utilization rate achieved"
    },
    primaryPainPoint: "Inconsistent service delivery, low utilization rates, and manual client reporting.",
    keySolution: "Standardized Service Delivery SOPs and Automated Utilization Tracking."
  },
  {
    slug: "recruitment",
    name: "Recruitment",
    icon: Users,
    heroTagline: "Scaling your desk-to-desk operations to handle 10x volume without hiring more back-office staff.",
    problems: [
      {
        title: "Manual Back-Office Overload",
        description: "Compliance, onboarding, and payroll consuming 40%+ of your team's time."
      },
      {
        title: "Slow Time-to-Hire",
        description: "Candidates lost to competitors while your team drowns in admin."
      },
      {
        title: "Fragmented Candidate Pipeline",
        description: "No single source of truth—data scattered across spreadsheets, ATS, and emails."
      },
      {
        title: "Compliance Risk Exposure",
        description: "Manual tracking of right-to-work, contracts, and certifications creating audit vulnerabilities."
      }
    ],
    solution: {
      diagnosis: "We map your complete candidate-to-placement journey, identifying every manual touchpoint and compliance gap.",
      redesign: "We install an automated workflow from candidate intake to placement, with integrated compliance checkpoints.",
      enablement: "Your recruiters focus on relationships while systems handle the paperwork."
    },
    impact: [
      { before: "7-day onboarding", after: "24-hour onboarding", metric: "85% faster" },
      { before: "Manual compliance", after: "Automated tracking", metric: "Zero audit flags" },
      { before: "3 admin per 10 desks", after: "1 admin per 20 desks", metric: "60% cost reduction" }
    ],
    caseStudy: {
      quote: "We doubled placements without adding a single back-office hire.",
      company: "Technical Recruitment Agency",
      result: "40 hours/week automated"
    },
    primaryPainPoint: "High volume of manual back-office tasks (compliance, onboarding, payroll) and slow time-to-hire.",
    keySolution: "Automated Candidate-to-Placement Workflow and Compliance System Integration."
  },
  {
    slug: "construction",
    name: "Construction",
    icon: HardHat,
    heroTagline: "Eliminating the gap between site and office that's bleeding your margins.",
    problems: [
      {
        title: "Fragmented Site-Office Communication",
        description: "Critical updates lost in WhatsApp groups and phone calls—no audit trail, no accountability."
      },
      {
        title: "Uncontrolled Change Orders",
        description: "Scope creep eating 15%+ of project margins with no systematic approval process."
      },
      {
        title: "Project Margin Erosion",
        description: "Costs discovered too late, when there's nothing left to recover."
      },
      {
        title: "Documentation Chaos",
        description: "Drawings, certifications, and sign-offs scattered across vans, emails, and filing cabinets."
      }
    ],
    solution: {
      diagnosis: "We audit your project management flow from tender to handover, identifying every leak point.",
      redesign: "We install a centralized project management platform with automated change order approval workflows.",
      enablement: "Site and office operate from one system—real-time visibility, no excuses."
    },
    impact: [
      { before: "Paper-based sign-offs", after: "Digital approval chain", metric: "4 hrs/day saved" },
      { before: "15% margin erosion", after: "Controlled change orders", metric: "+12% margin recovery" },
      { before: "Scattered documentation", after: "Single digital hub", metric: "100% audit-ready" }
    ],
    caseStudy: {
      quote: "We recovered €320K on a single project through change order control.",
      company: "Commercial Construction Firm",
      result: "15% margin improvement"
    },
    primaryPainPoint: "Fragmented communication between site and office, uncontrolled change orders, and project margin erosion.",
    keySolution: "Centralized Project Management Platform and Automated Change Order Approval Workflow."
  },
  {
    slug: "lending-finance",
    name: "Lending & Finance",
    icon: Landmark,
    heroTagline: "Compressing loan processing from weeks to hours while eliminating compliance exposure.",
    problems: [
      {
        title: "Slow Manual Processing",
        description: "Loan applications taking 7+ days when competitors do it in hours."
      },
      {
        title: "High Compliance Risk",
        description: "Manual data entry and document handling creating regulatory exposure."
      },
      {
        title: "Fragmented Data Systems",
        description: "Customer data scattered across legacy systems with no single source of truth."
      },
      {
        title: "Underwriting Bottlenecks",
        description: "Senior underwriters buried in paperwork instead of complex decisions."
      }
    ],
    solution: {
      diagnosis: "We map your complete underwriting workflow—from application to disbursement—identifying every delay.",
      redesign: "We install automated underwriting workflows with a single-source-of-truth data architecture.",
      enablement: "Your team makes decisions, not chase documents."
    },
    impact: [
      { before: "7-day processing", after: "24-hour processing", metric: "85% faster" },
      { before: "Manual document chase", after: "Automated collection", metric: "Zero manual follow-up" },
      { before: "Siloed data", after: "Unified customer view", metric: "100% data visibility" }
    ],
    caseStudy: {
      quote: "We now process 3x the volume with the same team size.",
      company: "Motor Finance Provider",
      result: "24-hour decision turnaround"
    },
    primaryPainPoint: "Slow, manual loan/application processing, high compliance risk, and fragmented data across systems.",
    keySolution: "Automated Underwriting Workflow and Single Source of Truth Data Architecture."
  },
  {
    slug: "property",
    name: "Property",
    icon: Building2,
    heroTagline: "Automating tenant lifecycle management to scale your portfolio without scaling your team.",
    problems: [
      {
        title: "Inefficient Tenant Onboarding",
        description: "Manual reference checks, contract generation, and key handovers consuming days."
      },
      {
        title: "Reactive Maintenance Management",
        description: "Tenants calling, emailing, and texting—no unified system, no SLA tracking."
      },
      {
        title: "Poor Portfolio Visibility",
        description: "No real-time view of occupancy, arrears, or maintenance status across properties."
      },
      {
        title: "Landlord Communication Gaps",
        description: "Manual reporting to landlords creating relationship friction."
      }
    ],
    solution: {
      diagnosis: "We audit your complete property management workflow—from lead to lease-end.",
      redesign: "We install automated tenant lifecycle management with integrated maintenance ticketing.",
      enablement: "One dashboard for tenants, landlords, and your team."
    },
    impact: [
      { before: "5-day onboarding", after: "Same-day onboarding", metric: "80% faster" },
      { before: "Phone/email maintenance", after: "Unified ticketing", metric: "40 hrs/week saved" },
      { before: "Monthly landlord reports", after: "Real-time dashboards", metric: "Zero reporting admin" }
    ],
    caseStudy: {
      quote: "We automated 90% of tenant onboarding, saving 40 hours per week.",
      company: "Multi-site Property Manager",
      result: "500+ units managed with 3-person team"
    },
    primaryPainPoint: "Inefficient tenant/landlord onboarding, manual maintenance request handling, and poor portfolio visibility.",
    keySolution: "Automated Tenant Lifecycle Management and Integrated Maintenance Ticketing System."
  },
  {
    slug: "agencies",
    name: "Agencies",
    icon: Megaphone,
    heroTagline: "Installing project governance that protects your margins and your client relationships.",
    problems: [
      {
        title: "Chronic Scope Creep",
        description: "'Quick requests' that balloon into unpaid work, eroding project profitability."
      },
      {
        title: "Low Project Profitability",
        description: "No real-time visibility into project health until it's too late."
      },
      {
        title: "Client Communication Chaos",
        description: "Feedback scattered across Slack, email, and comments—no clear audit trail."
      },
      {
        title: "Resource Allocation Guesswork",
        description: "Over-servicing some clients while others wait."
      }
    ],
    solution: {
      diagnosis: "We audit your project lifecycle—from pitch to close—identifying where margin leaks out.",
      redesign: "We install a Project Scoping & Change Order Governance System with automated client reporting.",
      enablement: "Clear boundaries, transparent pricing, and happy clients."
    },
    impact: [
      { before: "Verbal scope changes", after: "Documented change orders", metric: "+18% margin recovery" },
      { before: "Monthly client reports", after: "Real-time dashboards", metric: "80% reporting time saved" },
      { before: "Over-servicing", after: "Balanced allocation", metric: "25% capacity unlocked" }
    ],
    caseStudy: {
      quote: "We recovered €150K in previously unbilled scope changes in 6 months.",
      company: "Digital Marketing Agency",
      result: "18% average margin improvement"
    },
    primaryPainPoint: "Scope creep, low project profitability, and lack of clear client communication boundaries.",
    keySolution: "Project Scoping & Change Order Governance System and Automated Client Reporting."
  }
];

export function getIndustryBySlug(slug: string): IndustryData | undefined {
  return industriesData.find(industry => industry.slug === slug);
}
