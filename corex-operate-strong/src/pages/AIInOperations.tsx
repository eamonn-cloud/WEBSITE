import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/shared/CTASection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Database, 
  Workflow, 
  ArrowRight, 
  CheckCircle, 
  TrendingUp,
  Cpu,
  Zap,
  Shield,
  Clock,
  Target,
  BarChart3,
  Network,
  Layers
} from "lucide-react";
import { Link } from "react-router-dom";
import systemsBg from "@/assets/systems-bg.jpg";

const aiUseCases = [
  {
    title: "Intelligent Data Validation",
    problem: "Manual data entry errors and incomplete records in CRM/ERP leading to flawed reporting.",
    solution: "AI models validate and enrich incoming data (e.g., lead forms, client intake) against external sources, ensuring a clean, single source of truth before a human ever touches it.",
    icon: Database,
  },
  {
    title: "Predictive Resource Allocation",
    problem: "Inconsistent project delivery and last-minute resource scrambling due to poor forecasting.",
    solution: "AI analyzes historical project data and current pipeline velocity to predict resource needs and project bottlenecks 30-60 days in advance, automating resource allocation alerts.",
    icon: TrendingUp,
  },
  {
    title: "Automated Handoffs & Routing",
    problem: "Slow, error-prone handoffs between Sales, Delivery, and Finance teams.",
    solution: "AI classifies incoming requests (e.g., support tickets, change orders) and automatically routes them to the correct system/team member with 99% accuracy, eliminating manual triage.",
    icon: Workflow,
  },
  {
    title: "Revenue Leakage Detection",
    problem: "Unbilled hours, missed upsells, and contract value erosion across client accounts.",
    solution: "AI continuously monitors project data against contracts to flag revenue leakage in real-time, alerting account managers before margin is lost.",
    icon: Target,
  },
];

const impactMetrics = [
  {
    metric: "85%",
    label: "Reduction in manual data entry time",
    description: "AI-powered validation eliminates repetitive data cleaning tasks",
  },
  {
    metric: "99%",
    label: "Data validation accuracy",
    description: "Machine learning models catch errors humans miss",
  },
  {
    metric: "30 days",
    label: "Earlier bottleneck detection",
    description: "Predictive analytics surface issues before they impact delivery",
  },
  {
    metric: "4.2x",
    label: "ROI on AI integration",
    description: "Average return within 6 months of implementation",
  },
];

const technicalPillars = [
  {
    icon: Shield,
    title: "Data Integrity First",
    description: "We ensure your data pipelines are clean before any AI model is introduced. Garbage in, garbage out is not an option.",
  },
  {
    icon: Cpu,
    title: "Modern Technology Stack",
    description: "We leverage modern LLMs (GPT, Gemini) for classification and summarization, and proprietary ML models for predictive analytics—all integrated via secure APIs.",
  },
  {
    icon: Layers,
    title: "Embedded Architecture",
    description: "AI is embedded directly into the workflow (Slack bots, CRM plugins, automated triggers), not a separate application your team needs to learn.",
  },
];

const philosophyPoints = [
  "AI is a Phase 3 tool—it requires clean data and defined processes to work.",
  "We don't experiment with your operations. We implement proven patterns.",
  "Every AI component must have a measurable ROI before deployment.",
  "Human oversight remains core—AI augments, it doesn't replace.",
];

export default function AIInOperations() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${systemsBg})` }}
        >
          <div className="absolute inset-0 bg-deep-navy/85" />
        </div>
        
        <div className="container-wide mx-auto relative z-10 section-padding">
          <div className="max-w-4xl animate-fade-in">
            <p className="label-caps text-primary-blue mb-4">The AI Engine</p>
            <h1 className="heading-display text-white mb-6">
              AI is the Engine of
              <br />
              <span className="heading-accent">Operational Excellence</span>.
              <br />
              We Install It.
            </h1>
            <p className="body-large text-white/80 max-w-2xl mb-8">
              We don't consult on AI strategy. We integrate AI-powered automation directly into your core workflows to eliminate data leakage and accelerate handoffs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <Link to="/assessment" className="flex items-center gap-2">
                  Is Your Operation AI-Ready?
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ctaOutline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Schedule a Diagnosis</Link>
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/10" />
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="label-caps text-primary-blue mb-4">Our Philosophy</p>
            <h2 className="heading-section text-foreground mb-6">
              Execution Over <span className="heading-accent">Experimentation</span>.
            </h2>
            <p className="body-large text-muted-foreground">
              AI is only valuable when integrated into a robust, clean operational system. That's why AI integration is the final phase of our methodology—not the starting point.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-muted hover:bg-muted/80 transition-colors">
                  <CheckCircle className="h-6 w-6 text-primary-blue flex-shrink-0 mt-0.5" />
                  <p className="text-foreground font-medium">{point}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-deep-navy p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-6">
                <Brain className="h-8 w-8 text-primary-blue" />
                <h3 className="text-xl font-semibold text-white">The COREx AI Approach</h3>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-blue/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-blue font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Diagnosis</p>
                    <p className="text-white/70 text-sm">Map data flows and identify leakage points</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-blue/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-blue font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Foundation</p>
                    <p className="text-white/70 text-sm">Clean processes and data pipelines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">AI Integration</p>
                    <p className="text-white/70 text-sm">Deploy AI where it cuts time or cost</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-border" />

      {/* Use Cases Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="label-caps text-primary-blue mb-4">AI Use Cases</p>
            <h2 className="heading-section text-foreground mb-6">
              Where We Eliminate <span className="heading-accent">Leakage</span>.
            </h2>
            <p className="body-large text-muted-foreground">
              Specific, high-ROI operational use cases where AI integration delivers measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {aiUseCases.map((useCase, index) => (
              <Card key={index} className="border-border bg-background hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                      <useCase.icon className="h-7 w-7 text-primary-blue stroke-[1.5]" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{useCase.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">The Problem</p>
                      <p className="text-muted-foreground text-sm">{useCase.problem}</p>
                    </div>
                    <div className="border-t border-border pt-4">
                      <p className="text-xs uppercase tracking-wider text-primary-blue mb-2">COREx AI Solution</p>
                      <p className="text-foreground text-sm font-medium">{useCase.solution}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-white/10" />

      {/* Technical Depth Section */}
      <section className="section-padding bg-deep-navy text-white">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="label-caps text-primary-blue mb-4">Technical Depth</p>
            <h2 className="heading-section text-white mb-6">
              How We Build the <span className="heading-accent">Engine</span>.
            </h2>
            <p className="body-large text-white/70">
              Our technical approach focuses on data integrity and system architecture—not flashy demos.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="bg-white/5 border border-white/10 p-8 lg:p-12 mb-12">
            <h3 className="text-lg font-semibold text-white mb-8 text-center">AI Integration Architecture</h3>
            <div className="grid md:grid-cols-5 gap-4 items-center">
              {/* Data Sources */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-white/50 text-center">Data Sources</p>
                <div className="space-y-2">
                  <div className="bg-white/10 p-3 text-center text-sm text-white/80">CRM</div>
                  <div className="bg-white/10 p-3 text-center text-sm text-white/80">ERP</div>
                  <div className="bg-white/10 p-3 text-center text-sm text-white/80">Forms</div>
                </div>
              </div>
              
              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-primary-blue" />
              </div>
              
              {/* AI Engine */}
              <div className="bg-primary-blue/20 border border-primary-blue/40 p-6 text-center">
                <Brain className="h-10 w-10 text-primary-blue mx-auto mb-3" />
                <p className="text-white font-semibold mb-2">AI Engine</p>
                <p className="text-xs text-white/60">Validation • Classification • Prediction</p>
              </div>
              
              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center">
                <ArrowRight className="h-8 w-8 text-primary-blue" />
              </div>
              
              {/* Outputs */}
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-wider text-white/50 text-center">Outputs</p>
                <div className="space-y-2">
                  <div className="bg-white/10 p-3 text-center text-sm text-white/80">Clean Data</div>
                  <div className="bg-white/10 p-3 text-center text-sm text-white/80">Alerts</div>
                  <div className="bg-white/10 p-3 text-center text-sm text-white/80">Routing</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technical Pillars */}
          <div className="grid md:grid-cols-3 gap-8">
            {technicalPillars.map((pillar, index) => (
              <div 
                key={index}
                className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary-blue/20 flex items-center justify-center mb-6">
                  <pillar.icon className="h-7 w-7 text-primary-blue stroke-[1.5]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/70">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-border" />

      {/* Quantified Impact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl mb-16">
            <p className="label-caps text-primary-blue mb-4">Quantified Impact</p>
            <h2 className="heading-section text-foreground mb-6">
              AI That Delivers <span className="heading-accent">Results</span>.
            </h2>
            <p className="body-large text-muted-foreground">
              Measurable outcomes from AI integration, not theoretical projections.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((item, index) => (
              <div 
                key={index}
                className="border border-border bg-background p-8 hover:shadow-lg hover:border-primary-blue/30 transition-all duration-300"
              >
                <p className="text-4xl lg:text-5xl font-bold text-primary-blue mb-2">{item.metric}</p>
                <p className="text-foreground font-semibold mb-2">{item.label}</p>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-deep-navy text-white">
        <div className="container-wide mx-auto text-center">
          <h2 className="heading-section text-white mb-6">
            Is Your Operation <span className="heading-accent">AI-Ready</span>?
          </h2>
          <p className="body-large text-white/70 max-w-2xl mx-auto mb-8">
            Find out where AI can eliminate leakage and accelerate handoffs in your operations. Schedule a diagnosis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/assessment" className="flex items-center gap-2">
                Take the Assessment
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ctaOutline" size="lg" asChild className="border-white text-white hover:bg-white/10">
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}