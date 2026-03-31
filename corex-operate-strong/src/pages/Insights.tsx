import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowRight } from "lucide-react";
import { WaveDivider } from "@/components/shared/WaveDivider";

// Hero image
import blogHero from "@/assets/blog-hero.jpg";

// Blog post images
import aiRoadmapImg from "@/assets/blog/ai-roadmap.jpg";
import aiMaturityImg from "@/assets/blog/ai-maturity.jpg";
import recruitmentDigitalImg from "@/assets/blog/recruitment-digital.jpg";
import lendingTechImg from "@/assets/blog/lending-tech.jpg";
import aiGovernanceImg from "@/assets/blog/ai-governance.jpg";
import operationsEfficiencyImg from "@/assets/blog/operations-efficiency.jpg";
import dataIntegrationImg from "@/assets/blog/data-integration.jpg";
import workforceAutomationImg from "@/assets/blog/workforce-automation.jpg";
import riskManagementImg from "@/assets/blog/risk-management.jpg";
import digitalJourneyImg from "@/assets/blog/digital-journey.jpg";

type Category = "AI Strategy" | "AI Governance" | "Digital Transformation" | "Operations" | "Financial Infrastructure" | "Talent and Workforce";

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  author: string;
  date: string;
  readingTime: string;
  category: Category;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "ai-roadmap",
    title: "A Director's Guide to Building an AI Roadmap",
    summary: "Most AI initiatives fail not from bad technology, but from poor planning. Directors must approach AI adoption as an operational discipline, not a technology experiment. A credible roadmap begins with identifying specific business problems where AI can reduce cost, speed, or error. It requires an honest assessment of data quality, internal capability, and vendor dependency.",
    author: "Eamonn Glancy",
    date: "2026-01-22",
    readingTime: "8 min read",
    category: "AI Strategy",
    image: aiRoadmapImg,
  },
  {
    id: "ai-maturity",
    title: "What Is Your Company's AI Maturity Level?",
    summary: "AI maturity is not a badge; it is a diagnostic tool. Most companies overestimate their readiness. Level one organisations are experimenting with isolated tools. Level two have deployed AI in one or two processes but lack cross-functional integration. Level three companies treat AI as an operational asset with clear ownership and performance metrics.",
    author: "Yervant Toramanian PMP",
    date: "2025-11-08",
    readingTime: "7 min read",
    category: "AI Governance",
    image: aiMaturityImg,
  },
  {
    id: "recruitment-digital",
    title: "Recruitment 2.0: How Digital Transformation Is Reinventing Hiring",
    summary: "Recruitment has historically relied on manual screening, intuition, and network effects. Digital transformation changes each element. Automated candidate scoring reduces time-to-shortlist by up to seventy percent. Structured interview frameworks combined with data capture improve prediction of job performance.",
    author: "Eamonn Glancy",
    date: "2025-09-19",
    readingTime: "6 min read",
    category: "Talent and Workforce",
    image: recruitmentDigitalImg,
  },
  {
    id: "lending-tech",
    title: "How Technology Is Reshaping Small Business Lending",
    summary: "Traditional lending models were built for large corporates with audited financials and predictable cash flows. Small businesses rarely fit that profile. Technology is closing the gap. Open banking enables lenders to assess real-time cash flow rather than relying on stale accounts.",
    author: "Yervant Toramanian PMP",
    date: "2025-07-03",
    readingTime: "7 min read",
    category: "Financial Infrastructure",
    image: lendingTechImg,
  },
  {
    id: "ai-governance-framework",
    title: "Building an AI Governance Framework That Works",
    summary: "AI governance is not bureaucracy; it is risk management. Without clear ownership, AI deployments drift into compliance exposure and operational fragility. A working framework assigns accountability for model performance, data quality, and decision audit trails.",
    author: "Eamonn Glancy",
    date: "2025-05-27",
    readingTime: "9 min read",
    category: "AI Governance",
    image: aiGovernanceImg,
  },
  {
    id: "operations-efficiency",
    title: "The Hidden Cost of Operational Inefficiency",
    summary: "Operational leakage rarely appears on income statements, but it erodes margin relentlessly. It shows up in rework, in delayed invoicing, in manual reconciliations, in decisions made on outdated data. Most organisations underestimate the true cost because they lack visibility into process performance.",
    author: "Yervant Toramanian PMP",
    date: "2025-03-11",
    readingTime: "6 min read",
    category: "Operations",
    image: operationsEfficiencyImg,
  },
  {
    id: "data-integration",
    title: "Why Data Integration Is the Bottleneck Nobody Talks About",
    summary: "Every digital transformation initiative eventually hits the same wall: data integration. Systems that do not talk to each other create manual workarounds, duplicate entry, and conflicting sources of truth. The cost is not just inefficiency; it is decision risk.",
    author: "Eamonn Glancy",
    date: "2025-01-06",
    readingTime: "7 min read",
    category: "Digital Transformation",
    image: dataIntegrationImg,
  },
  {
    id: "workforce-automation",
    title: "Workforce Automation: Separating Hype from Reality",
    summary: "Automation promises have outpaced automation delivery for a decade. The gap is not technological; it is organisational. Most automation projects fail because they are scoped around technology capability rather than process suitability.",
    author: "Yervant Toramanian PMP",
    date: "2024-11-24",
    readingTime: "8 min read",
    category: "Talent and Workforce",
    image: workforceAutomationImg,
  },
  {
    id: "risk-management",
    title: "Risk Management in the Age of AI",
    summary: "AI changes the risk landscape in ways traditional frameworks struggle to address. Model risk is familiar to financial services but new to most industries. Bias risk carries reputational and regulatory consequences. Dependency risk emerges when critical decisions rely on systems few people understand.",
    author: "Eamonn Glancy",
    date: "2024-09-13",
    readingTime: "8 min read",
    category: "AI Governance",
    image: riskManagementImg,
  },
  {
    id: "digital-journey",
    title: "The Digital Transformation Journey: Lessons from the Field",
    summary: "Digital transformation has become a catch-all term that obscures more than it reveals. The organisations making genuine progress share common traits. They define transformation in terms of specific business outcomes, not technology adoption.",
    author: "Yervant Toramanian PMP",
    date: "2024-07-29",
    readingTime: "7 min read",
    category: "Digital Transformation",
    image: digitalJourneyImg,
  }
];

const categoryColors: Record<Category, string> = {
  "AI Strategy": "bg-primary-blue/10 text-primary-blue border-primary-blue/20",
  "AI Governance": "bg-[#040f3d]/10 text-[#040f3d] border-[#040f3d]/20",
  "Digital Transformation": "bg-orange-500/10 text-orange-600 border-orange-500/20",
  "Operations": "bg-teal-500/10 text-teal-600 border-teal-500/20",
  "Financial Infrastructure": "bg-amber-500/10 text-amber-600 border-amber-500/20",
  "Talent and Workforce": "bg-purple-500/10 text-purple-600 border-purple-500/20"
};

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link to={`/insights/${post.id}`}>
      <article className="bg-background border border-border hover:border-primary-blue/30 transition-all duration-300 group cursor-pointer h-full flex flex-col">
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 lg:p-8 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className={categoryColors[post.category]}>
              {post.category}
            </Badge>
          </div>
          
          <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary-blue transition-colors">
            {post.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed mb-6 flex-1">
            {post.summary}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground border-t border-border pt-4">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
          
          <div className="mt-4 flex items-center gap-2 text-primary-blue font-medium group-hover:gap-3 transition-all">
            Read article
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Insights() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blogHero})` }}
        >
          <div className="absolute inset-0 bg-deep-navy/80" />
        </div>
        <WaveDivider variant="bottom" fill="fill-muted" />
        
        <div className="container-wide mx-auto relative z-10 section-padding">
          <div className="max-w-3xl animate-fade-in">
            <p className="label-caps text-primary-blue mb-4">Blog</p>
            <h1 className="heading-display text-white mb-6">
              Practical <span className="heading-accent">insights</span>.
            </h1>
            <p className="body-large text-white/80">
              Execution-focused thinking on AI, operations, and digital transformation. No hype, no jargon, no vendor pitches.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-muted">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
