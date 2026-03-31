import { Card, CardContent } from "@/components/ui/card";

interface MetricTileProps {
  value: string;
  label: string;
  suffix?: string;
}

export function MetricTile({ value, label, suffix }: MetricTileProps) {
  return (
    <Card className="bg-deep-navy border-navy text-center">
      <CardContent className="pt-6">
        <div className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-2">
          {value}
          {suffix && <span className="text-mint">{suffix}</span>}
        </div>
        <div className="text-sm md:text-base text-primary-foreground/80 uppercase tracking-wide">
          {label}
        </div>
      </CardContent>
    </Card>
  );
}
