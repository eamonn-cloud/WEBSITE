import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-background/95 backdrop-blur-sm border-t border-border p-3">
      <div className="flex gap-3">
        <Button variant="ctaOutline" className="flex-1" asChild>
          <Link to="/contact" className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4" />
            Book Call
          </Link>
        </Button>
        <Button variant="cta" className="flex-1" asChild>
          <Link to="/assessment" className="flex items-center justify-center gap-2">
            Assessment
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
