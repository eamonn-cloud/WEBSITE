import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CTASectionProps {
  variant?: "default" | "dark";
  title?: string;
  subtitle?: string;
}

export function CTASection({
  variant = "default",
  title = "Ready to eliminate operational leakage?",
  subtitle = "Delivery-based guarantee tied to scope. No advisory language.",
}: CTASectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`section-padding ${
        isDark ? "bg-deep-navy text-white" : "bg-muted"
      }`}
    >
      <div className="container-narrow mx-auto text-center">
        <h2 className={`heading-section mb-4 ${isDark ? "text-white" : "text-foreground"}`}>
          {title}
        </h2>
        <p
          className={`body-large mb-10 max-w-2xl mx-auto ${
            isDark ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant={isDark ? "hero" : "cta"}
            size="lg"
            asChild
          >
            <Link to="/assessment" className="flex items-center gap-2">
              Take the Assessment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            variant={isDark ? "heroOutline" : "ctaOutline"}
            size="lg"
            asChild
          >
            <Link to="/contact" className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Book a Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
