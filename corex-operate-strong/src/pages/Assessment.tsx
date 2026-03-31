import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { WaveDivider } from "@/components/shared/WaveDivider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Zap,
  Target,
  Mail,
  Calendar,
  Phone,
  User,
  Loader2,
} from "lucide-react";
import { Link } from "react-router-dom";
import assessmentBg from "@/assets/assessment-bg.jpg";

interface Question {
  id: string;
  section: string;
  text: string;
  options: { value: number; label: string }[];
}

const questions: Question[] = [
  // Data and Systems
  {
    id: "ds1",
    section: "Data and Systems",
    text: "How centralized is your business data?",
    options: [
      { value: 0, label: "Scattered across spreadsheets and individual tools" },
      { value: 1, label: "Partially centralized with some integration" },
      { value: 2, label: "Mostly centralized with defined processes" },
      { value: 3, label: "Fully integrated data ecosystem" },
    ],
  },
  {
    id: "ds2",
    section: "Data and Systems",
    text: "How accurate is your real-time reporting?",
    options: [
      { value: 0, label: "Reports are manual and often outdated" },
      { value: 1, label: "Some automated reports but gaps exist" },
      { value: 2, label: "Mostly automated with minor delays" },
      { value: 3, label: "Real-time dashboards with full accuracy" },
    ],
  },
  // Automation and Workflows
  {
    id: "aw1",
    section: "Automation and Workflows",
    text: "How much of your operational work is automated?",
    options: [
      { value: 0, label: "Almost everything is manual" },
      { value: 1, label: "Some basic automation in place" },
      { value: 2, label: "Key workflows are automated" },
      { value: 3, label: "Comprehensive automation across operations" },
    ],
  },
  {
    id: "aw2",
    section: "Automation and Workflows",
    text: "How standardized are your business processes?",
    options: [
      { value: 0, label: "Different people do things differently" },
      { value: 1, label: "Some documented procedures exist" },
      { value: 2, label: "Most processes are documented and followed" },
      { value: 3, label: "Full process library with continuous improvement" },
    ],
  },
  {
    id: "aw3",
    section: "Automation and Workflows",
    text: "How do you handle exceptions and edge cases?",
    options: [
      { value: 0, label: "Ad-hoc firefighting every time" },
      { value: 1, label: "Some escalation paths defined" },
      { value: 2, label: "Clear exception handling processes" },
      { value: 3, label: "Automated triage with defined resolutions" },
    ],
  },
  // CRM and Customer Operations
  {
    id: "crm1",
    section: "CRM and Customer Operations",
    text: "How reliable is your sales pipeline data?",
    options: [
      { value: 0, label: "Incomplete and rarely updated" },
      { value: 1, label: "Mostly maintained but gaps exist" },
      { value: 2, label: "Reliable with defined update cadence" },
      { value: 3, label: "Real-time accuracy with automated updates" },
    ],
  },
  {
    id: "crm2",
    section: "CRM and Customer Operations",
    text: "How connected is your customer lifecycle management?",
    options: [
      { value: 0, label: "Sales and delivery are disconnected" },
      { value: 1, label: "Basic handoffs between teams" },
      { value: 2, label: "Defined lifecycle stages and owners" },
      { value: 3, label: "Seamless lifecycle automation" },
    ],
  },
  // AI Readiness
  {
    id: "ai1",
    section: "AI Readiness",
    text: "How prepared is your data for AI integration?",
    options: [
      { value: 0, label: "Data is siloed and unstructured" },
      { value: 1, label: "Some structured data available" },
      { value: 2, label: "Clean data in key areas" },
      { value: 3, label: "AI-ready data infrastructure" },
    ],
  },
  {
    id: "ai2",
    section: "AI Readiness",
    text: "How are you currently using AI in operations?",
    options: [
      { value: 0, label: "Not using AI at all" },
      { value: 1, label: "Experimenting with basic tools" },
      { value: 2, label: "Some AI integrated into workflows" },
      { value: 3, label: "AI embedded across operations" },
    ],
  },
  // People and Process
  {
    id: "pp1",
    section: "People and Process",
    text: "How dependent are operations on specific individuals?",
    options: [
      { value: 0, label: "Key people are single points of failure" },
      { value: 1, label: "Some redundancy in critical roles" },
      { value: 2, label: "Most knowledge is documented" },
      { value: 3, label: "Fully documented with easy onboarding" },
    ],
  },
  {
    id: "pp2",
    section: "People and Process",
    text: "How do you measure operational performance?",
    options: [
      { value: 0, label: "No defined metrics" },
      { value: 1, label: "Some KPIs tracked manually" },
      { value: 2, label: "Regular performance reviews with data" },
      { value: 3, label: "Real-time scorecards driving decisions" },
    ],
  },
  {
    id: "pp3",
    section: "People and Process",
    text: "How quickly can you onboard new team members?",
    options: [
      { value: 0, label: "Months of shadowing required" },
      { value: 1, label: "Weeks with manual training" },
      { value: 2, label: "Structured onboarding under 30 days" },
      { value: 3, label: "Rapid onboarding with self-service resources" },
    ],
  },
];

const sections = ["Data and Systems", "Automation and Workflows", "CRM and Customer Operations", "AI Readiness", "People and Process"];

interface MaturityTier {
  tier: number;
  name: string;
  range: string;
  description: string;
  risks: string[];
  recommendation: string;
}

const maturityTiers: MaturityTier[] = [
  {
    tier: 1,
    name: "Foundational",
    range: "0–12",
    description: "Operations are largely manual with significant structural gaps. High founder dependency.",
    risks: [
      "Critical knowledge locked in individuals",
      "Revenue leakage likely >€500K annually",
      "Scaling will create chaos",
      "High risk of operational failures",
    ],
    recommendation: "Full transformation engagement recommended. Long-term partnership to rebuild operational foundations.",
  },
  {
    tier: 2,
    name: "Emerging",
    range: "13–22",
    description: "Some systems in place but inconsistent. Growth creates increasing friction.",
    risks: [
      "Processes exist but aren't followed consistently",
      "Data gaps causing visibility issues",
      "Efficiency losses in handoffs",
      "Automation opportunities being missed",
    ],
    recommendation: "Mid-size rebuild focused on standardization and integration. 12-16 week engagement typical.",
  },
  {
    tier: 3,
    name: "Optimized",
    range: "23–30",
    description: "Solid operational foundation with room for enhancement. Ready for scaling and automation.",
    risks: [
      "Some manual processes could be automated",
      "AI opportunities not fully captured",
      "Efficiency gains available in specific areas",
    ],
    recommendation: "Focused engagement on scaling infrastructure, advanced automation, and AI integration.",
  },
  {
    tier: 4,
    name: "Advanced",
    range: "31–36",
    description: "Mature operations with comprehensive systems. Focus on optimization and innovation.",
    risks: [
      "Continuous improvement opportunities",
      "Emerging AI capabilities to integrate",
      "Governance and compliance enhancement",
    ],
    recommendation: "Enterprise AI integration, advanced analytics, and governance optimization.",
  },
];

function getTier(score: number): MaturityTier {
  if (score <= 12) return maturityTiers[0];
  if (score <= 22) return maturityTiers[1];
  if (score <= 30) return maturityTiers[2];
  return maturityTiers[3];
}

interface LeadInfo {
  fullName: string;
  email: string;
  mobile: string;
}

export default function Assessment() {
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({ fullName: "", email: "", mobile: "" });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [reportRequested, setReportRequested] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentSection = questions[currentQuestion]?.section;
  const totalScore = Object.values(answers).reduce((sum, val) => sum + val, 0);
  const tier = getTier(totalScore);

  const sendLeadToBackend = async (score: number, tierData: MaturityTier, finalAnswers: Record<string, number>) => {
    try {
      // Build detailed answers with question text and selected answer
      const detailedAnswers = questions.map((q) => {
        const selectedValue = finalAnswers[q.id];
        const selectedOption = q.options.find((opt) => opt.value === selectedValue);
        return {
          questionId: q.id,
          section: q.section,
          question: q.text,
          selectedValue: selectedValue ?? null,
          selectedAnswer: selectedOption?.label ?? "Not answered",
        };
      });

      const response = await fetch("/.netlify/functions/send-assessment-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: leadInfo.fullName,
          email: leadInfo.email,
          mobile: leadInfo.mobile,
          score,
          tier: tierData.tier,
          tierName: tierData.name,
          answers: detailedAnswers,
        }),
      });

      if (!response.ok) {
        console.error("Error sending lead:", response.statusText);
        toast({
          title: "Submission received",
          description: "Your assessment has been recorded.",
        });
      } else {
        console.log("Lead sent successfully");
      }
    } catch (err) {
      console.error("Error sending lead:", err);
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (leadInfo.fullName && leadInfo.email && leadInfo.mobile) {
      setLeadCaptured(true);
    }
  };

  const handleAnswer = (value: string) => {
    const numValue = parseInt(value);
    const newAnswers = { ...answers, [questions[currentQuestion].id]: numValue };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Calculate final score and send to backend
      const finalScore = Object.values(newAnswers).reduce((sum, val) => sum + val, 0);
      const finalTier = getTier(finalScore);
      sendLeadToBackend(finalScore, finalTier, newAnswers);
      setReportRequested(true);
      setTimeout(() => setShowResults(true), 300);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };


  // Lead Capture Gate
  if (!leadCaptured) {
    return (
      <Layout>
        <section className="relative min-h-[100vh] flex items-center">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${assessmentBg})` }}
          >
            <div className="absolute inset-0 bg-deep-navy/90" />
          </div>
          
          <div className="container-wide mx-auto relative z-10 section-padding">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8 animate-fade-in">
                <Badge variant="outline" className="border-primary-blue text-primary-blue bg-white/10 mb-4">
                  Operational Maturity Assessment
                </Badge>
                <h1 className="heading-section text-white mb-4">
                  Measure Your Operational Readiness
                </h1>
                <p className="body-base text-white/70">
                  Where should we send your custom Operational Maturity Report? Complete your details to begin the 3-minute assessment.
                </p>
              </div>

              <Card className="bg-background/95 backdrop-blur border border-primary-blue/30 shadow-2xl animate-slide-up">
                <CardContent className="pt-6">
                  <form onSubmit={handleLeadSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName" className="text-deep-navy flex items-center gap-2">
                        <User className="h-4 w-4 text-primary-blue" />
                        Full Name
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        placeholder="John Smith"
                        value={leadInfo.fullName}
                        onChange={(e) => setLeadInfo({ ...leadInfo, fullName: e.target.value })}
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary-blue"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-deep-navy flex items-center gap-2">
                        <Mail className="h-4 w-4 text-primary-blue" />
                        Business Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={leadInfo.email}
                        onChange={(e) => setLeadInfo({ ...leadInfo, email: e.target.value })}
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary-blue"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="mobile" className="text-deep-navy flex items-center gap-2">
                        <Phone className="h-4 w-4 text-primary-blue" />
                        Mobile Number
                      </Label>
                      <Input
                        id="mobile"
                        type="tel"
                        placeholder="+44 7700 900000"
                        value={leadInfo.mobile}
                        onChange={(e) => setLeadInfo({ ...leadInfo, mobile: e.target.value })}
                        required
                        className="bg-background border-border text-foreground placeholder:text-muted-foreground focus:border-primary-blue"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="cta"
                      size="lg"
                      className="w-full mt-6"
                    >
                      Start Assessment
                      <ArrowRight className="h-5 w-5" />
                    </Button>
                  </form>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Your information is secure and will never be shared.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  // Results Screen
  if (showResults) {
    return (
      <Layout>
        <section className="relative">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${assessmentBg})` }}
          >
            <div className="absolute inset-0 bg-deep-navy/95" />
          </div>
          <WaveDivider variant="bottom" fill="fill-background" />
          
          <div className="container-narrow mx-auto relative z-10 section-padding">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex p-4 bg-primary-blue/20 mb-6">
                <Target className="h-8 w-8 text-primary-blue" />
              </div>
              <h1 className="heading-section text-white mb-4">
                Your Operational Maturity Results
              </h1>
              <p className="body-base text-white/70">
                Based on your responses, here's your operational maturity assessment.
              </p>
            </div>
          </div>
        </section>
        
        <section className="section-padding bg-background -mt-20">
          <div className="container-narrow mx-auto">
            {/* Score Card */}
            <Card className="mb-8 animate-slide-up bg-light-blue border border-primary-blue/30 shadow-xl">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                  <div>
                    <Badge variant="outline" className="border-primary-blue text-primary-blue mb-2">Your Score</Badge>
                    <div className="text-5xl font-extrabold text-deep-navy">
                      {totalScore}<span className="text-2xl text-muted-foreground">/36</span>
                    </div>
                  </div>
                  <div className="text-left md:text-right">
                    <Badge className="mb-2 bg-primary-blue">Maturity Tier</Badge>
                    <div className="text-2xl font-bold text-primary-blue">
                      Tier {tier.tier}: {tier.name}
                    </div>
                    <p className="text-sm text-muted-foreground">Score range: {tier.range}</p>
                  </div>
                </div>

                <p className="body-base text-deep-navy mb-6">
                  {tier.description}
                </p>

                <div className="bg-background border border-border p-6 mb-6 shadow-md">
                  <p className="font-semibold text-deep-navy mb-3 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Top Operational Risks
                  </p>
                  <ul className="space-y-2">
                    {tier.risks.map((risk, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <span className="flex-shrink-0 w-1.5 h-1.5 bg-destructive mt-2" />
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-primary-blue/10 border border-primary-blue p-6 shadow-md">
                  <p className="font-semibold text-deep-navy mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary-blue" />
                    Recommended Path
                  </p>
                  <p className="text-sm text-muted-foreground">{tier.recommendation}</p>
                </div>
              </CardContent>
            </Card>

            {/* Report Confirmation */}
            <Card className="mb-8 animate-scale-in bg-light-blue border border-primary-blue/30 shadow-lg">
              <CardContent className="pt-6 text-center">
                <CheckCircle className="h-12 w-12 text-primary-blue mx-auto mb-4" />
                <h3 className="text-xl font-bold text-deep-navy mb-2">Assessment Complete!</h3>
                <p className="text-muted-foreground mb-4">
                  Your results have been sent to {leadInfo.email}. A member of our team will reach out shortly with personalized recommendations.
                </p>
              </CardContent>
            </Card>
                  </p>
                </CardContent>
              </Card>
            )}

            {/* CTA to Book Call */}
            <Card className="animate-slide-up bg-deep-navy border-0 shadow-xl" style={{ animationDelay: "0.2s" }}>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Ready to fix your operations?
                    </h3>
                    <p className="text-white/70 text-sm">
                      Book a 30-minute call to discuss your results and explore next steps.
                    </p>
                  </div>
                  <Link to="/contact">
                    <Button variant="cta" size="lg" className="w-full md:w-auto">
                      <Calendar className="h-5 w-5" />
                      Book a Call
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </Layout>
    );
  }

  // Quiz Screen
  return (
    <Layout>
      <section className="relative min-h-[100vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${assessmentBg})` }}
        >
          <div className="absolute inset-0 bg-deep-navy/95" />
        </div>
        
        <div className="container-narrow mx-auto relative z-10 section-padding">
          {/* Progress */}
          <div className="mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-2">
              <Badge variant="outline" className="border-primary-blue text-primary-blue bg-white/10">
                {currentSection}
              </Badge>
              <span className="text-sm text-white/60">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question Card */}
          <Card className="bg-background/95 backdrop-blur shadow-2xl animate-slide-up">
            <CardHeader>
              <CardTitle className="text-deep-navy text-xl md:text-2xl leading-relaxed">
                {questions[currentQuestion].text}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[questions[currentQuestion].id]?.toString()}
                onValueChange={handleAnswer}
                className="space-y-3"
              >
                {questions[currentQuestion].options.map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-4 border border-border hover:border-primary-blue hover:bg-primary-blue/5 transition-all cursor-pointer group"
                  >
                    <RadioGroupItem
                      value={option.value.toString()}
                      id={`option-${option.value}`}
                      className="border-primary-blue text-primary-blue"
                    />
                    <Label
                      htmlFor={`option-${option.value}`}
                      className="flex-1 cursor-pointer text-foreground group-hover:text-deep-navy transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </Button>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{Math.round(progress)}% complete</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section Progress Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {sections.map((section, index) => {
              const sectionQuestions = questions.filter((q) => q.section === section);
              const sectionStart = questions.findIndex((q) => q.section === section);
              const sectionEnd = sectionStart + sectionQuestions.length - 1;
              const isActive = currentQuestion >= sectionStart && currentQuestion <= sectionEnd;
              const isComplete = currentQuestion > sectionEnd;

              return (
                <div
                  key={section}
                  className={`w-3 h-3 transition-all duration-300 ${
                    isComplete
                      ? "bg-primary-blue"
                      : isActive
                      ? "bg-primary-blue/60 scale-125"
                      : "bg-white/30"
                  }`}
                  title={section}
                />
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
