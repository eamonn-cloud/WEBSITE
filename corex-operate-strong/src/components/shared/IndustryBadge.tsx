import { LucideIcon } from "lucide-react";

interface IndustryBadgeProps {
  icon: LucideIcon;
  label: string;
  color: "blue" | "orange" | "green" | "purple" | "slate" | "amber";
}

const colorMap = {
  blue: "bg-primary-blue text-white",
  orange: "bg-orange-500 text-white",
  green: "bg-emerald-500 text-white",
  purple: "bg-violet-500 text-white",
  slate: "bg-slate-600 text-white",
  amber: "bg-amber-600 text-white",
};

export function IndustryBadge({ icon: Icon, label, color }: IndustryBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${colorMap[color]}`}>
        <Icon className="h-5 w-5" />
      </div>
      <span className="font-medium text-foreground">{label}</span>
    </div>
  );
}
