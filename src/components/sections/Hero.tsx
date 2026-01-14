"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export function Hero() {
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center"
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <motion.div className="text-center space-y-4" variants={fadeUp}>
        <h1 className="font-heading text-5xl font-semibold">
          Criamos soluções digitais
        </h1>

        <p className="font-subtitle text-muted-foreground">
          Sites, sistemas e softwares sob medida
        </p>
      </motion.div>
    </motion.section>
  );
}
