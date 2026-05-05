"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { AnalyticsLabel } from "@/lib/analytics/types";
import { Button } from "@/components/ui/button";
import { FaRocket, FaArrowRight } from "react-icons/fa";

const CTA_MESSAGE =
  "Olá! Vim pelo site da FullSeek e quero dar o próximo passo. Vamos conversar?";

export default function Cta() {
  return (
    <section
      className="relative overflow-hidden bg-background py-24 md:py-32"
      id="cta"
      aria-label="Pronto para começar?"
    >
      {/* Glow background effects */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-125 w-125 rounded-full bg-primary/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-75 w-75 rounded-full bg-secondary/15 blur-[80px]" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-5 py-2 text-sm font-medium text-white/80"
        >
          <FaRocket className="text-xs" />
          Pronto para escalar seu negócio?
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-heading text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl"
        >
          Não deixe seu projeto para{" "}
          <span className="relative">
            <span className="relative z-10 bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              amanhã
            </span>
            <span className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-primary/20 blur-sm" />
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/60 md:text-xl"
        >
          Cada dia perdido é uma oportunidade que a concorrência aproveita.
          Tenha um site profissional que trabalha por você{" "}
          <span className="font-semibold text-white/80">24 horas por dia</span>.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button
            external
            variant="whatsapp"
            size="lg"
            href={whatsappLink(CTA_MESSAGE)}
            onClick={() => trackWhatsApp(AnalyticsLabel.HOME_CTA)}
            className="group text-base font-bold shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/40"
          >
            Falar com Especialista agora
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-8 text-sm text-white/40">
          Resposta garantida em até{" "}
          <span className="font-semibold text-primary">2 horas</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
