import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

interface FeatureBlockProps {
  icon: ReactNode;
  title: string;
  description: string;
  index: number;
}

export function FeatureBlock({
  icon,
  title,
  description,
  index,
}: FeatureBlockProps) {
  const offsets = [
    "md:translate-x-0",
    "md:translate-x-4",
    "md:-translate-x-4",
    "md:translate-x-0",
  ];

  return (
    <motion.div variants={fadeUp} className={`flex gap-4 ${offsets[index]}`}>
      <div className="shrink-0 pt-1">{icon}</div>
      <div className="space-y-1.5">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-md leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
