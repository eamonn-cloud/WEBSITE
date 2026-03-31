import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { Clock, User, Calendar, ArrowLeft } from "lucide-react";

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
    summary: "Most AI initiatives fail not from bad technology, but from poor planning. Directors must approach AI adoption as an operational discipline, not a technology experiment. A credible roadmap begins with identifying specific business problems where AI can reduce cost, speed, or error. It requires an honest assessment of data quality, internal capability, and vendor dependency. The phased approach matters: start with contained pilots that prove value before scaling. Governance structures must be defined early, including accountability for model performance and data handling. Budget realistically for integration costs, which typically exceed licence fees by a factor of three. The organisations succeeding with AI treat it as infrastructure, not innovation theatre. Executive alignment on outcomes, not features, is the foundation of any effective roadmap.",
    author: "Eamonn Glancy",
    date: "2026-01-15",
    readingTime: "8 min read",
    category: "AI Strategy",
    image: aiRoadmapImg,
  },
  {
    id: "ai-maturity",
    title: "What Is Your Company's AI Maturity Level?",
    summary: "AI maturity is not a badge; it is a diagnostic tool. Most companies overestimate their readiness. Level one organisations are experimenting with isolated tools. Level two have deployed AI in one or two processes but lack cross-functional integration. Level three companies treat AI as an operational asset with clear ownership and performance metrics. Few reach level four, where AI informs strategic decisions and is embedded in governance. Assessing maturity requires examining data infrastructure, talent depth, process documentation, and leadership understanding. The gap between perception and reality often explains why projects stall. Honest assessment enables better prioritisation. Maturity models are not about impressing boards; they are about identifying constraints before committing capital. The companies progressing fastest treat maturity as a continuous audit, not a one-time exercise.",
    author: "Yervant Toramanian PMP",
    date: "2025-11-15",
    readingTime: "7 min read",
    category: "AI Governance",
    image: aiMaturityImg,
  },
  {
    id: "recruitment-digital",
    title: "Recruitment 2.0: How Digital Transformation Is Reinventing Hiring",
    summary: "Recruitment has historically relied on manual screening, intuition, and network effects. Digital transformation changes each element. Automated candidate scoring reduces time-to-shortlist by up to seventy percent. Structured interview frameworks combined with data capture improve prediction of job performance. The real value lies in integration: connecting applicant tracking to onboarding to performance management creates a feedback loop that refines hiring criteria over time. Yet technology alone does not solve recruitment. Process discipline, role clarity, and candidate experience remain foundational. Firms implementing digital hiring without addressing underlying workflow issues simply digitise their dysfunction. The most effective transformations are led by operations teams, not HR alone. They treat recruitment as a supply chain problem, where speed, quality, and cost must be balanced against business need.",
    author: "Eamonn Glancy",
    date: "2025-09-15",
    readingTime: "6 min read",
    category: "Talent and Workforce",
    image: recruitmentDigitalImg,
  },
  {
    id: "lending-tech",
    title: "How Technology Is Reshaping Small Business Lending",
    summary: "Traditional lending models were built for large corporates with audited financials and predictable cash flows. Small businesses rarely fit that profile. Technology is closing the gap. Open banking enables lenders to assess real-time cash flow rather than relying on stale accounts. Machine learning models can price risk more accurately across sectors where historical default data is sparse. Automation reduces underwriting costs, making smaller loans economically viable. However, speed should not compromise diligence. Regulatory expectations around affordability and responsible lending still apply. The winners in this space combine data science with credit discipline. They use technology to extend access without taking reckless concentration risk. For SME borrowers, the shift means faster decisions and more tailored products. For lenders, it demands investment in infrastructure that integrates data, decisioning, and servicing end-to-end.",
    author: "Yervant Toramanian PMP",
    date: "2025-07-15",
    readingTime: "7 min read",
    category: "Financial Infrastructure",
    image: lendingTechImg,
  },
  {
    id: "ai-governance-framework",
    title: "Building an AI Governance Framework That Works",
    summary: "AI governance is not bureaucracy; it is risk management. Without clear ownership, AI deployments drift into compliance exposure and operational fragility. A working framework assigns accountability for model performance, data quality, and decision audit trails. It defines escalation paths when outputs deviate from expectations. Governance must cover the full lifecycle: development, deployment, monitoring, and retirement. Documentation is non-negotiable; models without version control and change logs become liabilities. Boards need reporting that connects AI activity to business risk, not technical metrics. The most effective frameworks are proportionate, applying heavier controls to high-impact decisions. They balance innovation speed with oversight. Governance is not about slowing AI down; it is about ensuring that when things go wrong, the organisation can respond. The cost of retrofitting governance after an incident far exceeds the cost of building it in from the start.",
    author: "Eamonn Glancy",
    date: "2025-05-15",
    readingTime: "9 min read",
    category: "AI Governance",
    image: aiGovernanceImg,
  },
  {
    id: "operations-efficiency",
    title: "The Hidden Cost of Operational Inefficiency",
    summary: "Operational leakage rarely appears on income statements, but it erodes margin relentlessly. It shows up in rework, in delayed invoicing, in manual reconciliations, in decisions made on outdated data. Most organisations underestimate the true cost because they lack visibility into process performance. The first step is measurement: understanding cycle times, error rates, and handoff delays across core workflows. The second is attribution: connecting inefficiency to financial impact. A five-day delay in invoicing might seem minor until annualised interest cost is calculated. Manual data entry might seem cheap until error correction time is factored in. Addressing inefficiency requires process redesign, not just automation. Automating a broken process accelerates the problem. The organisations recovering the most value approach operations as an engineering discipline, applying the same rigour to workflows as they would to product development.",
    author: "Yervant Toramanian PMP",
    date: "2025-03-15",
    readingTime: "6 min read",
    category: "Operations",
    image: operationsEfficiencyImg,
  },
  {
    id: "data-integration",
    title: "Why Data Integration Is the Bottleneck Nobody Talks About",
    summary: "Every digital transformation initiative eventually hits the same wall: data integration. Systems that do not talk to each other create manual workarounds, duplicate entry, and conflicting sources of truth. The cost is not just inefficiency; it is decision risk. When executives cannot trust their data, they either delay decisions or make them on intuition. Integration is harder than it appears because it is not purely technical. It requires agreement on data definitions, ownership, and governance. It exposes process inconsistencies that have been papered over for years. The projects that succeed treat integration as a business initiative, not an IT project. They define clear use cases, prioritise ruthlessly, and accept that perfect data is not required for progress. Good enough, governed data beats perfect data that never ships. The organisations advancing fastest have accepted that integration is infrastructure, and they invest accordingly.",
    author: "Eamonn Glancy",
    date: "2025-01-15",
    readingTime: "7 min read",
    category: "Digital Transformation",
    image: dataIntegrationImg,
  },
  {
    id: "workforce-automation",
    title: "Workforce Automation: Separating Hype from Reality",
    summary: "Automation promises have outpaced automation delivery for a decade. The gap is not technological; it is organisational. Most automation projects fail because they are scoped around technology capability rather than process suitability. Not every task benefits from automation. High-volume, rule-based, stable processes are strong candidates. Complex, judgment-heavy, frequently changing processes are not. Successful automation requires rigorous process documentation, which many organisations lack. It requires change management, because automation shifts roles and responsibilities. And it requires realistic ROI modelling that accounts for maintenance, exception handling, and integration costs. The organisations achieving value from automation treat it as a capability, not a project. They build internal expertise, create reusable components, and apply automation selectively. They understand that partial automation often creates more work than manual processing. The goal is not automation for its own sake; it is operational performance.",
    author: "Yervant Toramanian PMP",
    date: "2024-11-15",
    readingTime: "8 min read",
    category: "Talent and Workforce",
    image: workforceAutomationImg,
  },
  {
    id: "risk-management",
    title: "Risk Management in the Age of AI",
    summary: "AI changes the risk landscape in ways traditional frameworks struggle to address. Model risk is familiar to financial services but new to most industries. Bias risk carries reputational and regulatory consequences. Dependency risk emerges when critical decisions rely on systems few people understand. Existing risk management approaches were designed for static rules and human judgment. AI introduces opacity and emergent behaviour. The response is not to avoid AI but to adapt governance. This means expanding risk taxonomy to include model performance, data provenance, and vendor concentration. It means building internal capability to evaluate AI systems, not just procure them. It means scenario testing for failure modes that are non-obvious. The organisations managing AI risk effectively treat it as an extension of operational risk, not a separate category. They invest in monitoring, documentation, and escalation processes that match the speed at which AI systems can fail.",
    author: "Eamonn Glancy",
    date: "2024-09-15",
    readingTime: "8 min read",
    category: "AI Governance",
    image: riskManagementImg,
  },
  {
    id: "digital-journey",
    title: "The Digital Transformation Journey: Lessons from the Field",
    summary: "Digital transformation has become a catch-all term that obscures more than it reveals. The organisations making genuine progress share common traits. They define transformation in terms of specific business outcomes, not technology adoption. They accept that transformation is a multi-year commitment requiring sustained investment and leadership attention. They prioritise ruthlessly, recognising that trying to transform everything simultaneously transforms nothing. Governance structures matter: successful transformations have clear ownership, defined decision rights, and regular executive review. Vendor management is critical; dependency on external partners creates both opportunity and risk. Change management is not an afterthought; it is embedded from day one. The organisations that struggle treat transformation as a project with an end date. The organisations that succeed treat it as a continuous operating model. They build internal capability, document what they learn, and accept that progress is iterative, not linear.",
    author: "Yervant Toramanian PMP",
    date: "2024-07-15",
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

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="heading-2 text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Link to="/insights" className="text-primary-blue hover:underline flex items-center justify-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${post.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040f3d] via-[#040f3d]/70 to-transparent" />
        
        <div className="relative z-10 container-wide mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32">
          <Link 
            to="/insights" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Insights
          </Link>
          
          <Badge variant="outline" className={`${categoryColors[post.category]} mb-4`}>
            {post.category}
          </Badge>
          
          <h1 className="heading-1 text-white mb-6 max-w-4xl">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed">
                {post.summary}
              </p>
            </div>
            
            <div className="mt-12 pt-8 border-t border-border">
              <Link 
                to="/insights" 
                className="inline-flex items-center gap-2 text-primary-blue hover:underline font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to all insights
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
