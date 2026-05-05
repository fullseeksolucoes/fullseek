import type { LucideIcon } from "lucide-react";

interface StepIconProps {
  icon: LucideIcon;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

export function StepIcon({
  icon: Icon,
  size = 18,
  strokeWidth = 1.5,
  className = "",
}: StepIconProps) {
  return (
    <Icon
      size={size}
      strokeWidth={strokeWidth}
      className={className}
    />
  );
}
