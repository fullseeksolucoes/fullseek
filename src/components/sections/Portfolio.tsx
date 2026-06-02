"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const projects = [
  {
    name: "Apex Mídias",
    tag: "Site Institucional",
    result:
      "Site moderno desenvolvido para fortalecer a credibilidade da agência e apresentar seus serviços de forma profissional.",
    image: "/portfolio/apexmidias.webp",
  },
  {
    name: "NT Passeios Náuticos",
    tag: "Site Institucional",
    result: "Site completo com galeria e informações sobre passeios náuticos em BH.",
    image: "/portfolio/ntpasseiosnauticos.webp",
  },
  {
    name: "Nery Assessoria",
    tag: "Site Institucional",
    result: "Site profissional para assessoria com captura de leads qualificados.",
    image: "/portfolio/neryassessoria.webp",
  },
  {
    name: "Beltrack",
    tag: "Site Institucional",
    result: "Plataforma de rastreamento com design moderno e informações claras.",
    image: "/portfolio/beltrack.webp",
  },
  {
    name: "MD Transfers OS",
    tag: "Site Institucional",
    result: "Site para transportes com formulário de orçamento e contato direto.",
    image: "/portfolio/mdtransfersos.webp",
  },
  {
    name: "SS Retifica",
    tag: "Site Institucional",
    result: "Site para retífica de motores com apresentação dos serviços especializados.",
    image: "/portfolio/ssretifica.webp",
  },
];

export function Portfolio() {
  return (
    <section
      className="relative overflow-hidden bg-background py-16 md:py-32"
      id="portfolio"
      aria-label="Projetos Realizados"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />

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
            Projetos recentes
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Resultados que{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              falam por si
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Conheça alguns projetos que entregamos.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div
              key={project.name}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl border border-white/5 bg-card transition-colors hover:border-primary/20"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Site da ${project.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-card/80 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary">
                  {project.tag}
                </span>
                <h3 className="mb-2 mt-1 text-lg font-semibold text-foreground">
                  {project.name}
                </h3>
                <p className="text-md leading-relaxed text-muted-foreground">
                  {project.result}
                </p>
              </div>
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/5 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Portfolio;
