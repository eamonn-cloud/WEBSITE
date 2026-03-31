import { Layout } from "@/components/layout/Layout";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Wrench,
  Settings,
  Users,
  Target,
  Zap,
  Shield,
  CheckCircle,
  ArrowRight,
  Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";
import partnershipsBg from "@/assets/partnerships-bg.jpg";

const agencyServices = [
  {
    icon: Wrench,
    title: "The 'Clean Up'",
    description: "We fix the leaky buckets before you pour more leads in.",
    details: "Audit and repair broken processes, data silos, and operational gaps that kill your results.",
  },
  {
    icon: Settings,
    title: "The 'Engine'",
    description: "We build the CRM and automation systems that prove your ROI.",
    details: "Install the infrastructure that tracks, measures, and demonstrates the value you create.",
  },
  {
    icon: Users,
    title: "The 'Handoff'",
    description: "We ensure their team can actually handle the growth you're creating.",
    details: "Train and enable client teams so your work sticks and scales without dependency.",
  },
];

const partnershipBenefits = [
  "Ability to take on more clients",
  "Revenue Share / White-Label Options",
  "Direct Access to Implementation Leads",
];

const founderServices = [
  {
    title: "Operational Audits",
    description: "Deep-dive into your systems to identify what's broken and what's blocking growth.",
  },
  {
    title: "System Build-Outs",
    description: "Install the CRM, automation, and reporting infrastructure you actually need.",
  },
  {
    title: "Team Enablement",
    description: "Train your team to own and operate the systems without external dependency.",
  },
];

const whyPartnerReasons = [
  {
    icon: Wrench,
    title: "Implementation First",
    description: "Builders, not talkers. We do the work alongside you.",
  },
  {
    icon: Target,
    title: "Tool Agnostic",
    description: "We work with your stack, not force you into ours.",
  },
  {
    icon: Shield,
    title: "Delivery Guarantee",
    description: "If the scope isn't met, we keep working until it is.",
  },
];

export default function Partnerships() {
  return (
    <Layout>
      {/* Hero with Background Image */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${partnershipsBg})` }}
        >
          <div className="absolute inset-0 bg-deep-navy/80" />
        </div>
        <WaveDivider variant="bottom" fill="fill-light-blue" />
        
        <div className="container-wide mx-auto relative z-10 section-padding">
          <div className="max-w-4xl animate-fade-in">
            <Badge variant="outline" className="border-primary-blue text-primary-blue bg-white/10 mb-4">
              Partnerships
            </Badge>
            <h1 className="heading-display text-white mb-6">
              Strategic <span className="heading-accent">partnerships</span>
              <br />that actually deliver.
            </h1>
            <p className="body-large text-white/80">
              We don't do 'referral loops' or corporate fluff. We partner with agencies, consultants, and founders to install the systems that make growth possible.
            </p>
          </div>
        </div>
      </section>

      {/* For Agencies & Consultants */}
      <section className="section-padding bg-light-blue relative">
        <div className="container-wide mx-auto">
          <div className="mb-12">
            <Badge variant="outline" className="border-primary-blue text-primary-blue mb-4">
              For Agencies, Consultants or Fractional Executives
            </Badge>
            <h2 className="heading-section text-deep-navy mb-4">
              Stop letting <span className="heading-accent">operational chaos</span> kill your results.
            </h2>
            <p className="body-base text-muted-foreground max-w-3xl">
              You deliver the strategy, the creative, or the leads. But if your client's backend is a mess, your work won't stick. We partner with Marketing, Sales, and Fractional CFO agencies to be their 'Implementation Arm'.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {agencyServices.map((service) => (
              <Card 
                key={service.title} 
                className="border-border bg-background shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-7 w-7 text-primary-blue" />
                  </div>
                  <h3 className="font-bold text-deep-navy text-lg">{service.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-deep-navy mb-2">{service.description}</p>
                  <p className="text-sm text-muted-foreground">{service.details}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-primary-blue bg-background shadow-lg">
            <CardContent className="pt-6">
              <h3 className="font-bold text-deep-navy mb-4">Partnership Benefits</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {partnershipBenefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary-blue flex-shrink-0" />
                    <span className="text-sm font-medium text-deep-navy">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* For High-Growth Founders with Wave */}
      <section className="section-padding bg-background relative">
        <WaveDivider variant="top" fill="fill-light-blue" />
        
        <div className="container-wide mx-auto pt-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="animate-fade-in">
              <Badge variant="outline" className="border-primary-blue text-primary-blue mb-4">
                For High-Growth Founders
              </Badge>
              <h2 className="heading-section text-deep-navy mb-4">
                Your <span className="heading-accent">'Second-in-Command'</span> on demand.
              </h2>
              <p className="body-base text-muted-foreground mb-8">
                You don't need another 'advisor.' You need an implementation partner who understands that systems = freedom.
              </p>

              <div className="space-y-6">
                {founderServices.map((service, index) => (
                  <div 
                    key={service.title} 
                    className="flex gap-4 group hover:bg-muted/50 p-4 -mx-4 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary-blue text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-deep-navy mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-deep-navy p-8 md:p-12 shadow-xl">
              <Zap className="h-10 w-10 text-primary-blue mb-6" />
              <h3 className="heading-card text-primary-foreground mb-4">
                Built for operators who don't have time to waste.
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                No 6-month discovery phases. No PowerPoint decks you'll never use. Just installed systems that work.
              </p>
              <Link to="/how-we-work" className="inline-flex items-center gap-2 text-primary-blue font-medium hover:gap-3 transition-all group">
                <span>See how we work</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner with COREx */}
      <section className="section-padding bg-muted relative">
        <WaveDivider variant="top" fill="fill-background" />
        
        <div className="container-narrow mx-auto text-center pt-8">
          <h2 className="heading-section text-deep-navy mb-4">
            No Advising. Just <span className="heading-accent">engineered outcomes</span>.
          </h2>
          <p className="body-base text-muted-foreground mb-12 max-w-2xl mx-auto">
            We're not here to tell you what to do. We're here to build it with you.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyPartnerReasons.map((reason) => (
              <div 
                key={reason.title} 
                className="text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="inline-flex p-4 bg-background border border-border mb-4 shadow-md group-hover:shadow-lg transition-shadow">
                  <reason.icon className="h-8 w-8 text-primary-blue" />
                </div>
                <h3 className="font-bold text-deep-navy mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership CTA */}
      <section className="section-padding bg-deep-navy text-white">
        <div className="container-narrow mx-auto text-center">
          <h2 className="heading-section mb-4 text-white">
            Ready to explore a partnership?
          </h2>
          <p className="body-large mb-10 max-w-2xl mx-auto text-white/70">
            Delivery-based guarantee tied to scope. No advisory language.
          </p>
          <a
            href="https://meetings-eu1.hubspot.com/eamonn-glancy/partnership-discussion"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-blue text-white font-semibold px-8 py-4 hover:bg-primary-blue/90 transition-colors text-lg"
          >
            <Calendar className="h-5 w-5" />
            Book a Partnership Discussion
          </a>
        </div>
      </section>
    </Layout>
  );
}
