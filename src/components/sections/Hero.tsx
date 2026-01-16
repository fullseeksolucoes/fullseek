"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { AnalyticsLabel } from "@/lib/analytics/types";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] mt-16 overflow-hidden bg-dark-900 text-white"
      id="banner-hero"
      aria-label="Seção Principal"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_top,rgba(156,13,217,0.25),transparent_60%)]
        "
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex min-h-[calc(100vh-4rem)] flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h1
          variants={fadeUp}
          className="
            font-heading text-5xl font-bold leading-tight tracking-tight
            md:text-6xl lg:text-7xl
          "
        >
          Criamos soluções digitais <br className="hidden md:inline" /> que
          impulsionam negócios
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="
            mt-6 max-w-xl text-lg text-white/70
          "
        >
          Desenvolvemos sites, sistemas e soluções sob medida para empresas que
          buscam performance, tecnologia e crescimento.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">
          <Button
            external
            variant="primary"
            href={whatsappLink(
              "Olá! Vim pelo site da Fullseek.\nGostaria de falar com um especialista sobre um projeto."
            )}
            onClick={() => trackWhatsApp(AnalyticsLabel.HOME_HERO)}
          >
            Falar com especialista
          </Button>

          <Button variant="outline" href="/servicos" external>
            Ver serviços
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
