interface TimelineLineProps {
  orientation: "vertical" | "horizontal";
  className?: string;
}

export function TimelineLine({
  orientation,
  className = "",
}: TimelineLineProps) {
  if (orientation === "vertical") {
    return (
      <div
        className={`absolute left-6 top-0 h-full w-px bg-white/10 md:left-8 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <div
      className={`absolute top-10 left-0 h-px w-full bg-white/10 ${className}`}
      aria-hidden="true"
    />
  );
}
