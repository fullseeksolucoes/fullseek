"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeUp, stagger } from "@/lib/animations";

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] mt-16 overflow-hidden bg-dark-900 text-white" id="banner-hero" aria-label="Seção Principal">
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
          Criamos soluções digitais <br className="hidden md:inline" /> que impulsionam negócios
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="
            mt-6 max-w-xl text-lg text-white/70
          "
        >
          Desenvolvemos sites, sistemas e soluções sob medida para empresas
          que buscam performance, tecnologia e crescimento.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            href="https://wa.me/5531990785891?text=Oi,%20acabei%20de%20enviar%20uma%20mensagem%20pelo%20site%20e%20gostaria%20de%20falar%20com%20voc%C3%AAs."
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-full bg-primary px-7 py-3
              text-sm font-semibold text-primary-foreground
              hover:opacity-90 transition
            "
          >
            Falar com especialista
          </Link>

          <Link
            href="/servicos"
            className="
              inline-flex items-center justify-center
              rounded-full border border-white/20 px-7 py-3
              text-sm font-semibold text-white
              hover:bg-white/10 transition
            "
          >
            Ver serviços
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
