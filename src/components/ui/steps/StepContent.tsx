interface StepContentProps {
  title: string;
  description: string;
  titleClassName?: string;
}

export function StepContent({
  title,
  description,
  titleClassName = "text-lg font-semibold text-foreground",
}: StepContentProps) {
  return (
    <div>
      <h3 className={titleClassName}>{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
