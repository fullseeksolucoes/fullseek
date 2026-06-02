"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { FeatureBlock } from "@/components/why-choose-us/FeatureBlock";
import { FeatureIcon } from "@/components/why-choose-us/FeatureIcon";
import { FaBullseye, FaRocket, FaLightbulb, FaMapSigns } from "react-icons/fa";

const features = [
  {
    icon: <FaBullseye className="text-xl" />,
    title: "Foco em Resultados",
    description:
      "Sites feitos para gerar clientes — não apenas marcar presença online.",
  },
  {
    icon: <FaRocket className="text-xl" />,
    title: "Performance de Alto Nível",
    description:
      "Performance desde a base. Carregamento instantâneo que ranqueia melhor e retém visitantes.",
  },
  {
    icon: <FaLightbulb className="text-xl" />,
    title: "Design Estratégico",
    description:
      "UX com visão de negócio. Design bonito que também vende e comunica valor.",
  },
  {
    icon: <FaMapSigns className="text-xl" />,
    title: "Sem Complicação",
    description:
      "Comunicação clara, entregas organizadas e zero burocracia do início ao fim.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-32">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      {/* <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" /> */}

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-16 lg:grid-cols-2 lg:gap-24"
        >
          {/* Left — Editorial statement */}
          <div className="flex flex-col justify-center">
            <motion.span
              variants={fadeUp}
              className="mb-4 inline-block text-sm font-bold uppercase tracking-widest text-primary"
            >
              Por que escolher a FullSeek
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
            >
              Não criamos sites.{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Construímos máquinas de venda.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground"
            >
              Cada projeto é pensado para gerar clientes, combinando estratégia,
              design e tecnologia em cada detalhe.
            </motion.p>
          </div>

          {/* Right — Staggered features */}
          <div className="flex flex-col gap-8">
            {features.map((feature, i) => (
              <FeatureBlock
                key={feature.title}
                icon={<FeatureIcon delay={i * 0.1}>{feature.icon}</FeatureIcon>}
                title={feature.title}
                description={feature.description}
                index={i}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
