import { useState } from "react";
import LogoParticleHero from "@/components/shared/LogoParticleHero";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/shared/CTASection";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ProcessStep } from "@/components/shared/ProcessStep";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Cog,
  Server,
  Workflow,
  Users,
  CheckCircle,
  Building,
  Shield,
  Search,
  Lightbulb,
  Rocket,
  Target,
  Briefcase,
  TrendingUp,
  Factory,
  Building2,
  UserSearch,
  Landmark,
  Home,
  Settings,
  ExternalLink,
} from "lucide-react";
import c11Logo from "@/assets/c11-recovery-logo.png";
import cosyCabinsLogo from "@/assets/cosy-cabins-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import teamImage from "@/assets/team-collaboration.jpg";
import explainerVideo from "@/assets/corex-explainer.mp4";
import claudeBadge from "@/assets/badges/claude-badge.png";
import zapierBadge from "@/assets/badges/zapier-badge.png";
import hubspotBadge from "@/assets/badges/hubspot-badge.png";
import pmpBadge from "@/assets/badges/pmp-badge.png";

const industriesData = [
  {
    icon: Briefcase,
    name: "Professional Services",
    color: "bg-primary-blue",
    solutions: [
      "Streamlined client onboarding and project intake",
      "Automated time tracking and billing workflows",
      "Real-time capacity and utilization dashboards",
    ],
  },
  {
    icon: UserSearch,
    name: "Recruitment",
    color: "bg-orange-500",
    solutions: [
      "End-to-end candidate pipeline automation",
      "Placement tracking with commission calculations",
      "Client and candidate communication workflows",
    ],
  },
  {
    icon: Building2,
    name: "Construction",
    color: "bg-slate-600",
    solutions: [
      "Project milestone and subcontractor tracking",
      "Automated procurement and material ordering",
      "Safety compliance and documentation systems",
    ],
  },
  {
    icon: Landmark,
    name: "Lending & Finance",
    color: "bg-emerald-600",
    solutions: [
      "Motor, aviation, and private finance underwriting flows",
      "Automated credit decisioning and risk scoring",
      "Compliance documentation and audit trails",
    ],
  },
  {
    icon: Home,
    name: "Property",
    color: "bg-amber-600",
    solutions: [
      "Tenant lifecycle and lease management automation",
      "Maintenance request and vendor coordination",
      "Revenue and occupancy tracking dashboards",
    ],
  },
  {
    icon: Factory,
    name: "Manufacturing",
    color: "bg-indigo-600",
    solutions: [
      "Production scheduling and capacity planning",
      "Inventory and supply chain visibility",
      "Quality control and defect tracking systems",
    ],
  },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Digital Operating Model Design",
    description: "Launch streamlined operational systems that outperform manual processes.",
    bullets: [
      "Reduced cycle times",
      "Self-service workflows",
      "Automated handoffs",
      "Real-time visibility",
    ],
  },
  {
    icon: Cog,
    title: "Process Automation & Optimization",
    description: "Connect your siloed tools into a unified operational ecosystem.",
    bullets: [
      "Unified data layer",
      "Process automation",
      "Real-time sync",
      "Scalable architecture",
    ],
  },
  {
    icon: Server,
    title: "Technology Implementation",
    description: "Put AI and tech into daily work to drive revenue, speed, and margin.",
    bullets: [
      "Automate high-volume operations",
      "Turn data into actionable signals",
      "Embed tech inside current systems",
      "Set access controls for safety",
    ],
  },
  {
    icon: Users,
    title: "Change Management & Adoption",
    description: "Build operational capability that scales with your business.",
    bullets: [
      "Process documentation",
      "Training programs",
      "Knowledge transfer",
      "Ongoing support",
    ],
  },
];

const processSteps = [
  { icon: Search, title: "Assess", description: "Analyze current operations & identify gaps." },
  { icon: Lightbulb, title: "Design", description: "Create tailored digital transformation roadmap." },
  { icon: Rocket, title: "Implement", description: "Deploy solutions & ensure seamless integration." },
  { icon: Target, title: "Stabilize", description: "Optimize & measure results." },
];

const metrics = [
  { value: "96.8%", label: "OF WORK DELIVERED ON SCOPE." },
  { value: "€1M–€5M", label: "ANNUAL LEAKAGE RECOVERED." },
];

const proofPoints = [
  {
    industry: "C11 Recovery Sports Ltd",
    logo: c11Logo,
    clientSnapshot: "Mobile sports recovery startup. New concept, no existing systems.",
    problem: "Just an idea. No sales process, no delivery flow, no ops structure.",
    built: [
      "End-to-end revenue flow: lead capture → booking → payment → service delivery",
      "Automated scheduling and client comms",
      "Self-service booking system with zero admin touch",
      "Ops dashboard for session tracking and capacity planning",
    ],
    howItWorked: "Designed sales, delivery, and ops as one connected system from day one. No manual handoffs. No spreadsheet tracking. Every step automated before volume hit.",
    impact: "Launch-ready in weeks. Zero manual booking overhead. Built to scale without adding headcount.",
    whyItMattered: "Most startups bolt on ops later and pay for it. C11 launched with systems that run themselves.",
  },
  {
    industry: "Cosy Cabins",
    logo: cosyCabinsLogo,
    clientSnapshot: "Modular cabin company. B2B and B2C. Scaling fast at ~$6M ARR. Founder-led.",
    problem: "Business ran on spreadsheets, WhatsApp, and memory. No single system for sales, projects, or marketing. Founder was the bottleneck. No visibility on deals or delivery.",
    built: [
      "Single operating system for the entire company",
      "Real sales engine with clear pipeline",
      "Connected sales, delivery, and finance",
      "Automated tracking and team alerts",
    ],
    howItWorked: "Designed how the business should run end to end. One place to see all customers and projects. Quotes tracked automatically. Founder stepped out of daily admin. Team ran the business from systems, not messages.",
    impact: "Close rate hit ~29%. MRR grew to ~$500k. Business now runs at ~$6M ARR.",
    whyItMattered: "Turned a founder-run, manual business into a system-run company.",
  },
];

const whyChooseUs = [
  "End-to-End Digital Transformation Expertise",
  "Proven ROI: Faster, Leaner Processes",
  "Hands-On Implementation",
  "Tailored Solutions for Your Industry",
];

const certifications = [
  { 
    name: "Anthropic, Claude Code Certification", 
    url: "http://verify.skilljar.com/c/33zxvk9yfmzj",
    logo: claudeBadge
  },
  { 
    name: "Zapier Solutions Partner", 
    url: "https://zapier.com/partnerdirectory/corex-operations",
    logo: zapierBadge
  },
  { 
    name: "HubSpot Solutions Partner", 
    url: "https://ecosystem.hubspot.com/marketplace/solutions/corex-operations",
    logo: hubspotBadge
  },
  { 
    name: "PMI PMP Certification", 
    url: "https://www.credly.com/badges/6ebeffe5-6eea-49a7-9ec2-37dd7aacdc79/public_url",
    logo: pmpBadge
  }
];

export default function Index() {
  const [expandedIndustry, setExpandedIndustry] = useState<string | null>(null);

  return (
    <Layout>
      {/* Hero Section - Full bleed with background image and VSL */}
      <section
        className="relative min-h-[90vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(4, 15, 61, 0.95), rgba(4, 15, 61, 0.7)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Twinkling star field */}
        <div className="hero-stars absolute inset-0 pointer-events-none" aria-hidden="true" />

        {/* Shooting stars — three COREX-brand colour layers */}
        {/* Layer 1: Brand blue streak → cyan tip */}
        <ShootingStars
          starColor="#B9FAF8"
          trailColor="#005eb7"
          minSpeed={14}
          maxSpeed={30}
          minDelay={1000}
          maxDelay={3200}
          starWidth={12}
          starHeight={1.5}
        />
        {/* Layer 2: Cyan streak → light blue tip — slower, rarer */}
        <ShootingStars
          starColor="#BBE3F7"
          trailColor="#B9FAF8"
          minSpeed={8}
          maxSpeed={20}
          minDelay={2400}
          maxDelay={5000}
          starWidth={10}
          starHeight={1}
        />
        {/* Layer 3: White streak → brand blue tip — fast accent */}
        <ShootingStars
          starColor="#005eb7"
          trailColor="#ffffff"
          minSpeed={18}
          maxSpeed={38}
          minDelay={1800}
          maxDelay={4000}
          starWidth={8}
          starHeight={1}
        />

        <WaveDivider variant="bottom" fill="fill-background" />
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="max-w-2xl relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in">
                We Install
                <br />
                <span className="heading-accent">Operational</span>
                <br />
                Excellence Systems
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.1s" }}>
                Rebuild your operations, eliminate revenue leakage, and scale without the chaos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Button asChild variant="hero" size="lg">
                  <Link to="/assessment">
                    Take the Free Assessment
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                  <Link to="/how-we-work">
                    Learn Our Approach
                  </Link>
                </Button>
              </div>
            </div>
            
            {/* Logo Particle Hero */}
            <div className="relative z-10 animate-fade-in w-full aspect-square max-w-md mx-auto" style={{ animationDelay: "0.3s" }}>
              <LogoParticleHero
                logoSrc="/COREX-02.png"
                className="w-full h-full"
                density={1.8}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Partnerships Section */}
      <section className="py-12 bg-muted border-y border-border">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-deep-navy mb-2">
              Certifications & Partnerships
            </h2>
            <p className="text-muted-foreground">
              Certified across AI, automation, and revenue operations.
            </p>
          </div>
          
          {/* Badges Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.name} verification (opens in new tab)`}
                className="group bg-background border border-border p-4 md:p-6 
                           hover:border-primary-blue hover:shadow-md 
                           transition-all duration-200 flex flex-col items-center 
                           text-center"
              >
                {/* Logo */}
                <img 
                  src={cert.logo} 
                  alt={cert.name}
                  className="h-12 md:h-16 object-contain mb-3 grayscale 
                             group-hover:grayscale-0 transition-all duration-200"
                />
                
                {/* Certification name */}
                <span className="text-xs md:text-sm font-medium text-deep-navy 
                                 leading-tight mb-2">
                  {cert.name}
                </span>
                
                {/* External link indicator */}
                <ExternalLink className="h-3 w-3 text-muted-foreground 
                                          opacity-50 group-hover:opacity-100 
                                          transition-opacity" />
              </a>
            ))}
          </div>
          
          {/* Microcopy */}
          <p className="text-center text-xs text-muted-foreground">
            Click any certification to view verification.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-border" />
              <span className="text-muted-foreground font-medium">What We Do</span>
              <div className="h-px w-12 bg-border" />
            </div>
            <h2 className="heading-section text-foreground">
              Our Core <span className="heading-accent">Services</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <ServiceCard
                key={cap.title}
                icon={cap.icon}
                title={cap.title}
                description={cap.description}
                bullets={cap.bullets}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with background image */}
      <section 
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(4, 15, 61, 0.85), rgba(4, 15, 61, 0.75)), url(${teamImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <WaveDivider variant="top" fill="fill-background" />
        <WaveDivider variant="bottom" fill="fill-muted" />
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px w-12 bg-white/30" />
                <span className="text-white/70 font-medium">Why Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
                Why Choose <span className="heading-accent">COREX</span>?
              </h2>
              <ul className="space-y-5">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-white">
                    <CheckCircle className="h-6 w-6 text-primary-blue flex-shrink-0 mt-0.5" />
                    <span className="text-lg md:text-xl font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Metrics Cards */}
            <div className="space-y-4">
              {metrics.map((metric) => (
                <div key={metric.value} className="metric-card">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-3 font-serif">
                    {metric.value}
                  </div>
                  <p className="text-sm text-white/70 uppercase tracking-wider">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section-padding bg-muted relative">
        <WaveDivider variant="top" fill="fill-background" />
        
        <div className="container-wide mx-auto pt-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary-blue text-primary-blue mb-4">
              Industries
            </Badge>
            <h2 className="heading-section text-deep-navy mb-4">
              Operational Excellence Across <span className="heading-accent">Every Sector</span>
            </h2>
            <p className="body-base text-muted-foreground max-w-2xl mx-auto">
              We install systems that eliminate revenue leakage and scale operations—tailored to your industry's specific challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industriesData.map((industry) => {
              const isExpanded = expandedIndustry === industry.name;
              return (
                <div
                  key={industry.name}
                  className={`bg-background border border-border shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl ${
                    isExpanded ? "lg:row-span-2" : ""
                  }`}
                  onClick={() => setExpandedIndustry(isExpanded ? null : industry.name)}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 ${industry.color} flex items-center justify-center`}>
                          <industry.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-bold text-deep-navy text-lg">{industry.name}</h3>
                      </div>
                      <ArrowRight 
                        className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
                          isExpanded ? "rotate-90" : ""
                        }`} 
                      />
                    </div>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pt-4 border-t border-border">
                        <p className="text-sm font-medium text-muted-foreground mb-3 flex items-center gap-2">
                          <Settings className="h-4 w-4" />
                          What We Install
                        </p>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-deep-navy">
                              <CheckCircle className="h-4 w-4 text-primary-blue flex-shrink-0 mt-0.5" />
                              <span>{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        className="relative py-20 md:py-28"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--deep-navy)) 0%, hsl(210, 50%, 20%) 100%)',
        }}
      >
        <WaveDivider variant="top" fill="fill-muted" />
        <WaveDivider variant="bottom" fill="fill-background" />
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pt-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-white/30" />
              <span className="text-white/70 font-medium">Our Method</span>
              <div className="h-px w-12 bg-white/30" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Our Proven <span className="heading-accent">Transformation Process</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We work closely with leadership and operational teams to design, implement, and stabilize digital solutions that produce measurable outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                icon={step.icon}
                title={step.title}
                description={step.description}
                step={index + 1}
              />
            ))}
          </div>
          
          <div className="text-center pb-8">
            <Button asChild variant="hero" size="lg">
              <Link to="/assessment">
                Schedule Your Consultation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px w-12 bg-border" />
              <span className="text-muted-foreground font-medium">Results</span>
              <div className="h-px w-12 bg-border" />
            </div>
            <h2 className="heading-section text-foreground">
              <span className="heading-accent">Transformation</span> in Action
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {proofPoints.map((proof) => (
              <div key={proof.industry} className="border border-border p-8 bg-card shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  {proof.logo ? (
                    <img src={proof.logo} alt={proof.industry} className="h-8 w-auto" />
                  ) : (
                    <>
                      <Building className="h-5 w-5 text-primary-blue" />
                      <span className="font-semibold text-foreground">{proof.industry}</span>
                    </>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">{proof.clientSnapshot}</p>
                
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">The Problem</p>
                  <p className="text-sm text-foreground">{proof.problem}</p>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-primary-blue mb-2">What We Built</p>
                  <ul className="space-y-1.5">
                    {proof.built.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1 h-1 bg-primary-blue mt-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">How It Worked</p>
                  <p className="text-sm text-muted-foreground">{proof.howItWorked}</p>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <p className="text-xs uppercase tracking-wider text-primary-blue mb-2">Business Impact</p>
                  <p className="text-sm font-medium text-foreground mb-3">{proof.impact}</p>
                  <p className="text-sm italic text-muted-foreground">{proof.whyItMattered}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="section-padding bg-deep-navy text-white">
        <div className="container-narrow mx-auto text-center">
          <Shield className="h-12 w-12 text-primary-blue mx-auto mb-6" />
          <h2 className="heading-section text-white mb-6">
            Delivery <span className="heading-accent">Guarantee</span>.
          </h2>
          <p className="body-large text-white/70 mb-8 max-w-2xl mx-auto">
            We guarantee delivery of the agreed operational outcomes defined in the engagement scope. If the agreed scope is not delivered to specification, we continue working at no additional cost until it is.
          </p>
          <div className="inline-flex items-center gap-2 text-primary-blue font-medium">
            <CheckCircle className="h-5 w-5" />
            Scope-based risk reversal
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}
