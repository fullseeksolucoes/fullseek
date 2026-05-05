interface StepNumberProps {
  number: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeStyles = {
  sm: "text-4xl",
  md: "text-5xl",
  lg: "text-6xl",
};

export function StepNumber({
  number,
  size = "md",
  className = "",
}: StepNumberProps) {
  return (
    <span
      className={`font-bold text-white/30 transition-colors duration-500 group-hover:text-white/40 ${sizeStyles[size]} ${className}`}
    >
      {number}
    </span>
  );
}
