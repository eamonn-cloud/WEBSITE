import { Layout } from "@/components/layout/Layout";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { CTASection } from "@/components/shared/CTASection";
import { ArrowRight, Check, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import type { IndustryData } from "@/data/industriesData";

interface IndustryPageTemplateProps {
  industry: IndustryData;
}

export function IndustryPageTemplate({ industry }: IndustryPageTemplateProps) {
  const Icon = industry.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-deep-navy text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-navy via-deep-navy to-primary-blue/30" />
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 bg-primary-blue/20 border border-primary-blue/30 px-4 py-2 mb-6">
              <Icon className="h-5 w-5 text-primary-blue" />
              <span className="label-caps text-primary-blue">{industry.name}</span>
            </div>
            <h1 className="heading-display text-white mb-6">
              {industry.name}{" "}
              <span className="heading-accent">Operational Excellence</span>
            </h1>
            <p className="body-large text-white/80 max-w-2xl">
              {industry.heroTagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button variant="cta" size="lg" asChild>
                <Link to="/assessment" className="flex items-center gap-2">
                  Take the Assessment
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild className="border-white/30 text-white hover:bg-white/10">
                <Link to="/contact">Schedule a Call</Link>
              </Button>
            </div>
          </div>
        </div>
        <WaveDivider fill="fill-background" />
      </section>

      {/* Section 1: The Operational Chaos */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="label-caps text-primary-blue mb-4">The Operational Chaos</p>
            <h2 className="heading-section text-foreground">
              Problems <span className="heading-accent">We Solve</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {industry.problems.map((problem, index) => (
              <div 
                key={index}
                className="bg-muted border border-border p-8 hover:border-primary-blue/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-destructive/10 flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                  </div>
                  <div>
                    <h3 className="heading-card text-foreground mb-2">{problem.title}</h3>
                    <p className="body-base text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="fill-deep-navy" />

      {/* Section 2: The COREx Solution */}
      <section className="section-padding bg-deep-navy text-white">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="label-caps text-primary-blue mb-4">The COREX Solution</p>
            <h2 className="heading-section text-white">
              Systems, <span className="heading-accent">Not Advice</span>
            </h2>
            <p className="body-large text-white/70 max-w-2xl mx-auto mt-4">
              Our 90-Day Transformation model delivers measurable results, not PowerPoint decks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-blue flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div className="bg-white/5 border border-white/10 p-8 pt-12">
                <h3 className="heading-card text-white mb-4">Diagnosis</h3>
                <p className="body-base text-white/70">{industry.solution.diagnosis}</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-blue flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div className="bg-white/5 border border-white/10 p-8 pt-12">
                <h3 className="heading-card text-white mb-4">Redesign & Integration</h3>
                <p className="body-base text-white/70">{industry.solution.redesign}</p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-blue flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div className="bg-white/5 border border-white/10 p-8 pt-12">
                <h3 className="heading-card text-white mb-4">Enablement & Handoff</h3>
                <p className="body-base text-white/70">{industry.solution.enablement}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="fill-background" />

      {/* Section 3: Quantified Impact */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="label-caps text-primary-blue mb-4">Quantified Impact</p>
            <h2 className="heading-section text-foreground">
              What We <span className="heading-accent">Install</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary-blue">
                  <th className="text-left py-4 px-6 font-semibold text-foreground">Before</th>
                  <th className="text-left py-4 px-6 font-semibold text-foreground">After</th>
                  <th className="text-left py-4 px-6 font-semibold text-primary-blue">Impact</th>
                </tr>
              </thead>
              <tbody>
                {industry.impact.map((item, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-4 px-6 text-muted-foreground">{item.before}</td>
                    <td className="py-4 px-6 text-foreground font-medium">{item.after}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-2 bg-primary-blue/10 text-primary-blue px-3 py-1 font-semibold text-sm">
                        <Check className="h-4 w-4" />
                        {item.metric}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <WaveDivider fill="fill-muted" />

      {/* Section 4: Case Study Snippet */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="label-caps text-primary-blue mb-4">Client Success</p>
            <h2 className="heading-section text-foreground mb-12">
              Case Study <span className="heading-accent">Spotlight</span>
            </h2>
            
            <div className="bg-background border border-border p-10 md:p-16 relative">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary-blue" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary-blue" />
              
              <blockquote className="text-2xl md:text-3xl font-serif italic text-foreground mb-8">
                "{industry.caseStudy.quote}"
              </blockquote>
              <div className="flex flex-col items-center gap-2">
                <p className="font-semibold text-foreground">{industry.caseStudy.company}</p>
                <p className="text-primary-blue font-medium">{industry.caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider fill="fill-deep-navy" />

      {/* CTA Section */}
      <CTASection
        variant="dark"
        title="Ready to Install Excellence?"
        subtitle={`Transform your ${industry.name.toLowerCase()} operations with the COREX 90-Day methodology.`}
      />
    </Layout>
  );
}
