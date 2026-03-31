import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { WaveDivider } from "@/components/shared/WaveDivider";
import {
  TrendingUp,
  Cog,
  Server,
  AlertTriangle,
  CheckCircle,
  Building2,
  Stethoscope,
  HardHat,
  Wrench,
  Briefcase,
} from "lucide-react";
import systemsBg from "@/assets/systems-bg.jpg";

const systemAreas = [
  {
    icon: TrendingUp,
    title: "Revenue Operations",
    symptoms: [
      "Deals slip without warning",
      "Pipeline data is unreliable",
      "Sales and delivery disconnected",
      "No visibility into customer lifecycle",
      "Forecasts are guesswork",
    ],
    installs: [
      "Unified pipeline management system",
      "Lead-to-revenue tracking",
      "Automated stage progression",
      "Customer success workflows",
      "Forecast accuracy frameworks",
    ],
    outputs: [
      "Real-time pipeline dashboards",
      "Revenue attribution reporting",
      "Automated renewal management",
      "Customer health scoring",
    ],
  },
  {
    icon: Cog,
    title: "Operational Efficiency",
    symptoms: [
      "Processes live in people's heads",
      "Same work done multiple ways",
      "Constant firefighting",
      "Manual data entry everywhere",
      "No way to measure efficiency",
    ],
    installs: [
      "Standardized process library",
      "Workflow automation engine",
      "Exception handling system",
      "Real-time operational dashboards",
      "Continuous improvement loops",
    ],
    outputs: [
      "Process documentation",
      "Automation playbooks",
      "Performance scorecards",
      "Capacity planning models",
    ],
  },
  {
    icon: Server,
    title: "Scaling Infrastructure",
    symptoms: [
      "Spreadsheets everywhere",
      "Systems don't talk to each other",
      "Every report is custom",
      "Onboarding takes months",
      "Compliance is a scramble",
    ],
    installs: [
      "Integrated data architecture",
      "Master data management",
      "Self-service reporting layer",
      "Governance framework",
      "Scalable onboarding system",
    ],
    outputs: [
      "Data dictionary and schemas",
      "Integration documentation",
      "Reporting templates",
      "Governance policies",
    ],
  },
];

const industries = [
  { icon: Briefcase, name: "Professional Services", focus: "Project profitability, resource utilization, client delivery" },
  { icon: Building2, name: "Property", focus: "Portfolio management, tenant lifecycle, maintenance operations" },
  { icon: Briefcase, name: "Lending", focus: "Motor, aviation, private finance underwriting" },
  { icon: HardHat, name: "Construction", focus: "Project tracking, subcontractor management, cost control" },
  { icon: Briefcase, name: "Recruitment", focus: "Candidate pipeline, placement tracking, client delivery" },
];

export default function WhatWeFix() {
  return (
    <Layout>
      {/* Hero with Background Image */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${systemsBg})` }}
        >
          <div className="absolute inset-0 bg-deep-navy/85" />
        </div>
        <WaveDivider variant="bottom" fill="fill-muted" />
        
        <div className="container-wide mx-auto relative z-10 section-padding">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="heading-display text-white mb-6">
              The operational
              <br />
              <span className="heading-accent">debt</span> stopping growth.
            </h1>
            <p className="body-large text-white/80">
              We diagnose symptoms, install systems, and deliver documented outputs you own forever.
            </p>
          </div>
        </div>
      </section>

      {/* System Areas */}
      <section className="section-padding bg-muted relative">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {systemAreas.map((area) => (
              <div 
                key={area.title} 
                className="bg-background border border-border p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-7 w-7 text-primary-blue stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-6">{area.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                      <span className="text-xs uppercase tracking-wider font-semibold text-destructive">Symptoms</span>
                    </div>
                    <ul className="space-y-2">
                      {area.symptoms.map((symptom, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-destructive mt-2 flex-shrink-0" />
                          {symptom}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Cog className="h-4 w-4 text-primary-blue" />
                      <span className="text-xs uppercase tracking-wider font-semibold text-primary-blue">What We Install</span>
                    </div>
                    <ul className="space-y-2">
                      {area.installs.map((install, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1 h-1 bg-primary-blue mt-2 flex-shrink-0" />
                          {install}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <div className="flex items-center gap-2 mb-3">
                      <CheckCircle className="h-4 w-4 text-foreground" />
                      <span className="text-xs uppercase tracking-wider font-semibold text-foreground">Outputs You Keep</span>
                    </div>
                    <ul className="space-y-2">
                      {area.outputs.map((output, index) => (
                        <li key={index} className="text-sm text-foreground font-medium flex items-start gap-2">
                          <span className="w-1 h-1 bg-foreground mt-2 flex-shrink-0" />
                          {output}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Focus with Wave */}
      <section className="section-padding bg-deep-navy text-white relative">
        <WaveDivider variant="top" fill="fill-muted" />
        <WaveDivider variant="bottom" fill="fill-background" />
        
        <div className="container-wide mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-section text-white mb-4">
              Deep experience in <span className="heading-accent">B2B operations</span>.
            </h2>
            <p className="body-large text-white/70 max-w-2xl mx-auto">
              We work with €3M–€50M B2B companies where operational complexity creates measurable leakage.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <div 
                key={industry.name} 
                className="bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 bg-primary-blue/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-blue/30 transition-colors">
                  <industry.icon className="h-6 w-6 text-primary-blue stroke-[1.5]" />
                </div>
                <h3 className="font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-xs text-white/60">{industry.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection variant="default" />
    </Layout>
  );
}
