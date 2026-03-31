interface TimelineStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export function TimelineStep({ number, title, description, isLast = false }: TimelineStepProps) {
  return (
    <div className="flex gap-4 md:gap-6">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center w-10 h-10 bg-primary-blue text-primary-foreground font-bold text-sm">
          {number}
        </div>
        {!isLast && (
          <div className="flex-1 w-0.5 bg-primary-blue/30 my-2" />
        )}
      </div>
      <div className={`pb-8 ${isLast ? "pb-0" : ""}`}>
        <h4 className="font-semibold text-white mb-1">{title}</h4>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </div>
  );
}
