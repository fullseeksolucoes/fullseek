"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export default function About() {
  return (
    <section
      className="relative overflow-hidden bg-background py-16 md:py-32"
      id="sobre"
      aria-label="Sobre a Fullseek"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary"
          >
            Sobre a Fullseek
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Tecnologia com{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              propósito
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-12 max-w-2xl space-y-5 text-left text-md leading-relaxed text-muted-foreground md:text-lg"
        >
          <motion.p variants={fadeUp}>
            Na Fullseek, acreditamos que um site deve ser mais do que uma
            vitrine online. Ele precisa transmitir confiança, fortalecer a marca
            e ajudar sua empresa a conquistar novos clientes.
          </motion.p>
          <motion.p variants={fadeUp}>
            Por isso, cada projeto é desenvolvido de forma personalizada, com
            foco em desempenho, experiência do usuário e resultados reais.
          </motion.p>
          <motion.p variants={fadeUp}>
            Somos uma equipe enxuta, próxima dos nossos clientes e comprometida
            com entregas de qualidade, suporte contínuo e comunicação
            transparente do início ao fim.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
