import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ServiceIconProps {
  children: ReactNode;
  delay?: number;
}

export function ServiceIcon({ children, delay = 0 }: ServiceIconProps) {
  return (
    <div className="relative">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5, type: "spring", stiffness: 200 }}
        className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-dark-800/80 text-primary shadow-lg ring-1 ring-white/5"
      >
        {children}
      </motion.div>
      <div className="absolute -inset-2 z-0 rounded-3xl bg-dark-700/5 blur-xl" />
    </div>
  );
}
