import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
}

export function ServiceCard({ icon: Icon, title, description, bullets }: ServiceCardProps) {
  return (
    <div className="group bg-card border border-border p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="w-16 h-16 bg-gradient-to-br from-primary-blue/10 to-primary-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="h-8 w-8 text-primary-blue stroke-[1.5]" />
      </div>
      <h3 className="heading-card text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      {bullets && bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 bg-primary-blue" />
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
