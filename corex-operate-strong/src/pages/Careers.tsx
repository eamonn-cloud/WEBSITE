import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Upload, CheckCircle, Briefcase, BarChart3, TrendingUp, Users, Code, Database } from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import careersBg from "@/assets/team-collaboration.jpg";

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address").max(255),
  phone: z.string().max(20).optional(),
  targetRole: z.string().min(1, "Please select a target role"),
  linkedinUrl: z.string().url("Invalid URL").optional().or(z.literal("")),
  coverMessage: z.string().max(500, "Message must be less than 500 characters").optional(),
});

type FormData = z.infer<typeof formSchema>;

const roles = [
  {
    title: "Programmer (Systems Integrator)",
    icon: Code,
    pitch: "You won't be building marketing websites. You'll be building the high-leverage automation that eliminates millions in client leakage. You are the architect of the operational machine.",
    focus: "Building the automation layer that connects client systems (CRM, ERP, PM).",
  },
  {
    title: "Data Analyst (Operational Diagnostician)",
    icon: Database,
    pitch: "You turn chaos into a quantifiable problem, providing the strategic justification for every system we install.",
    focus: "Quantifying operational leakage and proving ROI.",
  },
  {
    title: "VP of Sales (Growth Architect)",
    icon: TrendingUp,
    pitch: "You are selling a guaranteed outcome, not a retainer. Your clients are founders who are ready to buy a solution to their biggest pain point: operational chaos. This is high-ticket, high-impact sales.",
    focus: "Selling the Operational Transformation to mid-market founders.",
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "High-Impact Work",
    description: "Every project you touch directly eliminates €1M–€5M in operational leakage for clients.",
  },
  {
    icon: BarChart3,
    title: "Systems-First Culture",
    description: "We don't do ad-hoc. Every process is documented, every outcome is measured.",
  },
  {
    icon: Users,
    title: "Elite Team",
    description: "Work alongside the top 1% of operators who value execution over endless meetings.",
  },
  {
    icon: TrendingUp,
    title: "Growth Trajectory",
    description: "Scale your career as we scale our impact across Europe's mid-market.",
  },
];

export default function Careers() {
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      targetRole: "",
      linkedinUrl: "",
      coverMessage: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      
      if (!validTypes.includes(file.type)) {
        toast.error("Please upload a PDF or Word document (.pdf, .doc, .docx)");
        return;
      }
      
      if (file.size > 5 * 1024 * 1024) {
        toast.error("File size must be less than 5MB");
        return;
      }
      
      setCvFile(file);
    }
  };

  const onSubmit = async (data: FormData) => {
    if (!cvFile) {
      toast.error("Please upload your CV/Resume");
      return;
    }

    setIsSubmitting(true);

    try {
      // Upload CV to storage
      const fileExt = cvFile.name.split(".").pop();
      const fileName = `${Date.now()}-${data.fullName.replace(/\s+/g, "-")}.${fileExt}`;
      
      const { error: uploadError } = await supabase.storage
        .from("career-cvs")
        .upload(fileName, cvFile);

      if (uploadError) {
        throw new Error("Failed to upload CV");
      }

      // Insert application record
      const { error: insertError } = await supabase
        .from("career_applications")
        .insert({
          full_name: data.fullName,
          email: data.email,
          phone: data.phone || null,
          target_role: data.targetRole,
          linkedin_url: data.linkedinUrl || null,
          cv_file_path: fileName,
          cover_message: data.coverMessage || null,
        });

      if (insertError) {
        throw new Error("Failed to submit application");
      }

      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${careersBg})` }}
        >
          <div className="absolute inset-0 bg-deep-navy/80" />
        </div>
        
        
        <div className="container-wide mx-auto relative z-10 section-padding">
          <div className="max-w-3xl animate-fade-in">
            <p className="label-caps text-primary-blue mb-4">Join the Operational Elite</p>
            <h1 className="heading-display text-white mb-6">
              We Don't Consult.<br />
              <span className="heading-accent">We Install.</span>
            </h1>
            <p className="body-large text-white/80 mb-8">
              Join the team that's eliminating €1M–€5M in annual operational leakage for Europe's fastest-growing mid-market companies.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href="#apply" className="flex items-center gap-2">
                View Open Roles
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section className="relative pt-32 pb-24 bg-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-2 text-foreground mb-6">Our Manifesto: Why We Exist</h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Operational chaos is the silent killer of mid-market companies. While others offer advice and frameworks, 
                we install the systems that eliminate €1M–€5M in annual leakage.
              </p>
              <p>
                We're not consultants. We're operators. We don't create PowerPoint decks; we build automated workflows, 
                integrate systems, and hand over a functioning operational machine.
              </p>
              <p className="text-foreground font-semibold text-xl">
                If you thrive in chaos, this isn't for you. If you want to eliminate it, keep reading.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-border" />
      </section>

      {/* Roles Section */}
      <section id="apply" className="py-24 bg-muted">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block border-2 border-primary-blue bg-primary-blue/5 px-8 py-4 mb-6">
              <p className="text-2xl md:text-3xl font-bold text-primary-blue tracking-wide uppercase">Open Positions</p>
            </div>
            <h2 className="heading-2 text-foreground mb-4">The Roles: Building the Machine</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're looking for the 1% who want to build systems, not just work within them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {roles.map((role) => (
              <div
                key={role.title}
                className="bg-background p-8 border border-border hover:border-primary-blue transition-colors group"
              >
                <div className="p-3 bg-light-blue inline-block mb-6 group-hover:bg-primary-blue/10 transition-colors">
                  <role.icon className="h-6 w-6 text-primary-blue" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{role.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{role.focus}</p>
                <p className="text-foreground mb-6">{role.pitch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-border" />

      {/* Benefits Section */}
      <section className="py-24 bg-background">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="label-caps text-primary-blue mb-4">Why Join Us</p>
            <h2 className="heading-2 text-foreground mb-4">The COREx Advantage: Systems-First Culture</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="p-4 bg-light-blue inline-block mb-4">
                  <benefit.icon className="h-8 w-8 text-primary-blue" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-px w-full bg-white/10" />

      {/* Application Form Section */}
      <section className="py-24 bg-deep-navy">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="label-caps text-primary-blue mb-4">Apply Now</p>
              <h2 className="heading-2 text-white mb-4">Direct Application</h2>
              <p className="text-white/70">
                Submit your application and we'll be in touch with the next steps.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-background p-12 text-center">
                <CheckCircle className="h-16 w-16 text-primary-blue mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-foreground mb-4">Application Installed</h3>
                <p className="text-muted-foreground mb-8">
                  We will be in touch with the next steps in our process.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/">Return to Homepage</Link>
                </Button>
              </div>
            ) : (
              <div className="bg-background p-8 sm:p-12">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John Smith" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@company.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="+44 7XXX XXXXXX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="targetRole"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Target Role *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="programmer">Programmer (Systems Integrator)</SelectItem>
                              <SelectItem value="data-analyst">Data Analyst (Operational Diagnostician)</SelectItem>
                              <SelectItem value="vp-sales">VP of Sales (Growth Architect)</SelectItem>
                              <SelectItem value="general">General Application</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="linkedinUrl"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>LinkedIn Profile URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-2">
                      <Label htmlFor="cv">CV/Resume * (PDF or Word, max 5MB)</Label>
                      <div className="relative">
                        <Input
                          id="cv"
                          type="file"
                          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                          onChange={handleFileChange}
                          className="cursor-pointer"
                        />
                        {cvFile && (
                          <p className="text-sm text-primary-blue mt-2 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4" />
                            {cvFile.name}
                          </p>
                        )}
                      </div>
                    </div>

                    <FormField
                      control={form.control}
                      name="coverMessage"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Cover Message (max 500 characters)</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Brief introduction about yourself and why you want to join COREx..."
                              className="resize-none"
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                      {!isSubmitting && <ArrowRight className="h-4 w-4 ml-2" />}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}