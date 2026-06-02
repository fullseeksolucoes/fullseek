import { motion } from "framer-motion";
import { ReactNode } from "react";
import { fadeUp } from "@/lib/animations";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-3xl border border-white/5 bg-card p-8 transition-colors hover:border-primary/20"
    >
      <div className="mb-6">{icon}</div>

      <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mb-6 text-md leading-relaxed text-muted-foreground">
        {description}
      </p>

      {/* Hover glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl transition-opacity group-hover:opacity-100 opacity-0" />
    </motion.div>
  );
}
