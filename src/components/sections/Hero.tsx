"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { AnalyticsLabel } from "@/lib/analytics/types";
import { Button } from "@/components/ui/button";
import { FaRocketchat } from "react-icons/fa";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da FullSeek e quero um site que vende. Podemos conversar?";

export function Hero() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-background text-white"
      id="hero"
      aria-label="Seção Principal"
    >
      {/* Circuit background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
    repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(156,163,175,0.03) 39px, rgba(156,163,175,0.03) 40px, transparent 40px, transparent 79px, rgba(156,163,175,0.03) 79px, rgba(156,163,175,0.03) 80px),
    repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(156,163,175,0.03) 39px, rgba(156,163,175,0.03) 40px, transparent 40px, transparent 79px, rgba(156,163,175,0.03) 79px, rgba(156,163,175,0.03) 80px),
    radial-gradient(circle at 40px 40px, rgba(156,163,175,0.05) 2px, transparent 2px),
    radial-gradient(circle at 80px 80px, rgba(156,163,175,0.05) 2px, transparent 2px)
  `,
          backgroundSize: "80px 80px, 80px 80px, 80px 80px, 80px 80px",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="flex min-h-screen flex-col items-center justify-center text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <motion.h1
          variants={fadeUp}
          className="
            font-heading text-5xl font-bold leading-tight tracking-tight
            md:text-7xl
          "
        >
          Seu{" "}
          <span className="text-primary font-bold drop-shadow-[0_0_4px_rgba(168,85,247,0.25)]">
            negócio
          </span>{" "}
          merece mais do que{" "}
          <span className="text-primary font-bold drop-shadow-[0_0_4px_rgba(168,85,247,0.25)]">
            só um site
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-2xl text-lg md:text-xl text-white/70"
        >
          Na FullSeek, desenvolvemos sites profissionais, rápidos e
          estratégicos, pensados para transformar{" "}
          <span className="font-semibold text-white/90">
            visitantes em clientes de verdade
          </span>
          .
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-4"
        >
          <Button
            external
            variant="primary"
            size="lg"
            href={whatsappLink(DEFAULT_MESSAGE)}
            onClick={() => trackWhatsApp(AnalyticsLabel.HOME_HERO)}
            className="w-full sm:w-auto"
          >
            Quero um site que vende <FaRocketchat />
          </Button>

          <Button variant="outline" size="lg" href="#servicos" className="w-full sm:w-auto">
            Ver serviços
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-1">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 1, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1.5 h-1.5 rounded-full bg-primary/50"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
