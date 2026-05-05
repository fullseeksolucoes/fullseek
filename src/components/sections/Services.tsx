"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { ServiceCard } from "@/components/ui/services/ServiceCard";
import { ServiceIcon } from "@/components/ui/services/ServiceIcon";
import { FaSearch, FaCode, FaRocket, FaServer } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";

const services = [
  {
    icon: <FaRocket className="text-2xl" />,
    title: "Landing Pages",
    description:
      "Páginas focadas em conversão, criadas para transformar visitantes em contatos e vendas.",
  },
  {
    icon: <CiGlobe className="text-2xl" />,
    title: "Sites Institucionais",
    description:
      "Sites modernos e rápidos que fortalecem sua marca e geram novas oportunidades.",
  },
  {
    icon: <FaCode className="text-2xl" />,
    title: "Sistemas Sob Medida",
    description:
      "Soluções personalizadas para automatizar processos e escalar seu negócio.",
  },
  {
    icon: <FaSearch className="text-2xl" />,
    title: "SEO & Performance",
    description:
      "Estrutura otimizada para melhor posicionamento no Google e carregamento rápido.",
  },
  {
    icon: <MdOutlineEmail className="text-2xl" />,
    title: "E-mail Corporativo",
    description:
      "E-mails profissionais com seu domínio para mais credibilidade na comunicação.",
  },
  {
    icon: <FaServer className="text-2xl" />,
    title: "Domínio e Hospedagem",
    description:
      "Tudo configurado para seu site ficar online com segurança e estabilidade.",
  },
];

export function Services() {
  return (
    <section
      className="relative overflow-hidden bg-background py-24 md:py-32"
      id="servicos"
      aria-label="Nossos Serviços"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      {/* <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" /> */}

      <div className="relative mx-auto max-w-7xl px-6 md:px-8">
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
            O que fazemos
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Soluções digitais{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              completas
            </span>{" "}
            para o seu negócio
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Do conceito à entrega, desenvolvemos soluções estratégicas que
            impulsionam resultados reais.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              icon={<ServiceIcon delay={i * 0.1}>{service.icon}</ServiceIcon>}
              title={service.title}
              description={service.description}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
