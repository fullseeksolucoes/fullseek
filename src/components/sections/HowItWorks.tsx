"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import {
  StepNumber,
  StepCircle,
  StepContent,
  TimelineLine,
} from "@/components/ui/steps";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entendimento",
    description: "Entendemos seu negócio e o que você precisa para crescer.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Planejamento",
    description: "Definimos a estratégia e estrutura para gerar resultados.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Desenvolvimento",
    description: "Criamos seu site com foco em performance e conversão.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Entrega",
    description: "Seu site no ar, pronto para gerar clientes.",
  },
];

export function HowItWorks() {
  return (
    <section
      className="relative overflow-hidden bg-background py-24 md:py-32"
      id="como-funciona"
      aria-label="Como Funciona"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-125 w-125 -translate-x-1/2 rounded-full bg-primary/3 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary"
          >
            Como funciona
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Um processo{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              simples e direto
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Do primeiro contato até a entrega, tudo pensado para gerar
            resultados.
          </motion.p>
        </motion.div>

        {/* Vertical Timeline */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative mx-auto mt-20 max-w-2xl"
        >
          <TimelineLine orientation="vertical" />

          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className="group relative mb-12 flex gap-6 pb-12 last:mb-0 last:pb-0 md:gap-8"
            >
              {/* Number + Icon column */}
              <div className="relative flex flex-col items-center">
                <StepNumber
                  number={step.number}
                  size="lg"
                  className="md:text-6xl"
                />
                <div className="absolute -bottom-1 left-1/2 z-10 -translate-x-1/2">
                  <StepCircle icon={step.icon} size="md" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-16">
                <StepContent
                  title={step.title}
                  description={step.description}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
