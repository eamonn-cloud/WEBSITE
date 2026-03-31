import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface SystemCardProps {
  icon: LucideIcon;
  title: string;
  outcomes: string[];
}

export function SystemCard({ icon: Icon, title, outcomes }: SystemCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="inline-flex p-3 rounded-lg bg-ice mb-2">
          <Icon className="h-6 w-6 text-core-blue" />
        </div>
        <h3 className="heading-card text-deep-navy">{title}</h3>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {outcomes.map((outcome, index) => (
            <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-core-blue mt-2" />
              {outcome}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
