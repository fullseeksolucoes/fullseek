"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const stats = [
  { number: "50+", label: "Sites entregues" },
  { number: "7 dias", label: "Prazo médio" },
  { number: "98%", label: "Clientes satisfeitos" },
];

export function SocialProof() {
  return (
    <section className="relative overflow-hidden bg-background py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="text-center"
            >
              <span className="text-3xl font-bold text-primary md:text-4xl">
                {stat.number}
              </span>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SocialProof;
