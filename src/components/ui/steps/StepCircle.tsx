import type { LucideIcon } from "lucide-react";

interface StepCircleProps {
  icon: LucideIcon;
  size?: "sm" | "md";
  className?: string;
}

const circleSizes = {
  sm: "h-10 w-10",
  md: "h-12 w-12",
};

const iconSizes = {
  sm: 16,
  md: 18,
};

export function StepCircle({
  icon: Icon,
  size = "md",
  className = "",
}: StepCircleProps) {
  return (
    <div
      className={`z-10 flex items-center justify-center rounded-full border border-white/10 bg-background text-primary/70 transition-all duration-300 group-hover:border-primary/30 group-hover:text-primary ${circleSizes[size]} ${className}`}
    >
      <Icon size={iconSizes[size]} strokeWidth={1.5} />
    </div>
  );
}
