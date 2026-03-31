import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, BarChart, FileCheck, Clock, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import operationsBg from "@/assets/operations-bg.jpg";

const engagementSteps = [{
  number: "01",
  title: "Discovery & Scoping",
  description: "Deep-dive into current operations. Map workflows, identify leakage points, quantify opportunities. Define transformation objectives."
}, {
  number: "02",
  title: "Outcome Definition",
  description: "Agree on specific, measurable outcomes. Document success criteria. Set scope boundaries. Define investment and timeline."
}, {
  number: "03",
  title: "System Design",
  description: "Architect the operational systems. Design processes, data flows, and integrations. Create implementation roadmap."
}, {
  number: "04",
  title: "Implementation",
  description: "Build and deploy systems. Integrate tools. Configure automation. Test thoroughly before go-live."
}, {
  number: "05",
  title: "Training & Handoff",
  description: "Enable your team to own the new systems. Document all processes. Establish operating cadences. Complete handoff."
}];

const operatingCadence = [{
  icon: Calendar,
  title: "Weekly Operator Reviews",
  description: "Standing meetings to review progress, address blockers, and make tactical decisions. Direct access to implementation leads."
}, {
  icon: Users,
  title: "Executive Decision Loop",
  description: "Bi-weekly strategic alignment with leadership. Major decisions, scope changes, and priority adjustments."
}, {
  icon: BarChart,
  title: "Performance Reporting",
  description: "Real-time dashboards and regular reporting on implementation progress, outcomes achieved, and ROI metrics."
}];

const whatYouGet = [
  "End-to-end process rebuild across sales, delivery, and ops.",
  "Clean workflows teams actually follow.",
  "Systems connected so data moves once.",
  "Automation where volume is highest.",
  "AI added only where it cuts time or cost.",
  "Team training so work sticks.",
  "Full handoff with docs and owners.",
];

const howWeWorkDetails = [
  "Diagnose in days, not months.",
  "Lock scope early. No drift.",
  "Build in sprints with weekly delivery.",
  "Ship usable systems, not decks.",
];

export default function HowWeWork() {
  return (
    <Layout>
      {/* Hero with Background Image */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${operationsBg})` }}
        >
          <div className="absolute inset-0 bg-deep-navy/80" />
        </div>
        <WaveDivider variant="bottom" fill="fill-background" />
        
        <div className="container-wide mx-auto relative z-10 section-padding">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="heading-display text-white mb-6">
              Structured
              <br />
              <span className="heading-accent">transformation</span>.
            </h1>
            <p className="body-large text-white/80">
              Set expectations. Reduce risk. Maintain control throughout the engagement.
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Flow */}
      <section className="section-padding bg-background relative">
        <div className="container-wide mx-auto">
          <h2 className="heading-section text-foreground mb-16">
            From <span className="heading-accent">discovery</span> to handoff.
          </h2>
          
          <div className="space-y-0">
            {engagementSteps.map((step, index) => (
              <div 
                key={step.number} 
                className="grid md:grid-cols-12 gap-6 py-8 border-b border-border last:border-0 group hover:bg-muted/50 transition-colors duration-300 px-4 -mx-4"
              >
                <div className="md:col-span-2">
                  <span className="text-5xl font-bold text-primary-blue/30 group-hover:text-primary-blue/50 transition-colors">{step.number}</span>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operating Cadence with Wave */}
      <section className="section-padding bg-deep-navy text-white relative">
        <WaveDivider variant="top" fill="fill-background" />
        <WaveDivider variant="bottom" fill="fill-muted" />
        
        <div className="container-wide mx-auto relative z-10">
          <div className="max-w-2xl mb-16">
            <h2 className="heading-section text-white mb-4">
              Stay informed. Stay in <span className="heading-accent">control</span>.
            </h2>
            <p className="body-large text-white/70">
              Transparent communication at every stage.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {operatingCadence.map(item => (
              <div 
                key={item.title} 
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 bg-primary-blue/20 flex items-center justify-center mb-6 group-hover:bg-primary-blue/30 transition-colors">
                  <item.icon className="h-7 w-7 text-primary-blue stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment */}
      <section className="section-padding bg-muted relative">
        <div className="container-wide mx-auto">
          <h2 className="heading-section text-foreground mb-12">
            Clear scope. Clear <span className="heading-accent">delivery</span>.
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Engagement Details */}
            <div className="border border-border p-8 bg-background shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Engagement Name</p>
                  <p className="text-lg font-semibold text-foreground">Operational System Rebuild</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Duration</p>
                  <p className="text-lg font-semibold text-foreground">8 to 12 weeks</p>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="bg-deep-navy p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <FileCheck className="h-6 w-6 text-primary-blue" />
                <h3 className="text-xl font-semibold text-white">What You Get</h3>
              </div>
              <ul className="space-y-3">
                {whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary-blue mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Work + Delivery Promise */}
            <div className="space-y-6">
              <div className="border border-border p-8 bg-background shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-foreground mb-4">How We Work</h3>
                <ul className="space-y-3">
                  {howWeWorkDetails.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <span className="w-1.5 h-1.5 bg-primary-blue mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-primary-blue p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-white mb-2">Delivery Promise</h3>
                <p className="text-white/90 font-medium">On scope. On time. Or we fix it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
}
