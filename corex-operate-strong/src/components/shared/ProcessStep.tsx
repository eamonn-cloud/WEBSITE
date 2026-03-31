import { LucideIcon } from "lucide-react";

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  step: number;
}

export function ProcessStep({ icon: Icon, title, description, step }: ProcessStepProps) {
  return (
    <div className="group bg-card border border-border p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
      <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary-blue/20 to-primary-blue/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-8 w-8 text-primary-blue stroke-[1.5]" />
      </div>
      <h4 className="text-xl font-bold text-primary-blue mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
