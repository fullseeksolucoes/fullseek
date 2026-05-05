"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { FaqAccordion } from "@/components/ui/faq";

const faqItems = [
  {
    question: "Em quanto tempo o site fica pronto?",
    answer:
      "O prazo varia conforme o projeto, mas a maioria dos sites é entregue entre 7 e 15 dias. Tudo é alinhado previamente para garantir um processo claro e sem surpresas.",
  },
  {
    question: "Como funciona a mensalidade?",
    answer:
      "Nossa mensalidade cobre hospedagem, manutenção, suporte e melhorias contínuas. Assim, você não precisa se preocupar com a parte técnica e mantém seu site sempre rápido, seguro e atualizado.",
  },

  {
    question: "O site será otimizado para mecanismos de busca (SEO)?",
    answer:
      "Sim. Todos os nossos projetos são desenvolvidos com estrutura limpa, carregamento rápido e as melhores práticas de SEO para garantir uma boa posição no Google desde o lançamento.",
  },
  {
    question: "O site será responsivo para celulares?",
    answer:
      "Com certeza. Todos os nossos projetos são desenvolvidos com design responsivo, garantindo uma experiência perfeita em smartphones, tablets e desktops.",
  },
  {
    question: "Vocês oferecem suporte após a entrega?",
    answer:
      "Sim. Durante o plano ativo, você conta com suporte contínuo para ajustes, melhorias e acompanhamento do desempenho do seu site.",
  },
];

export function Faq() {
  return (
    <section
      className="relative overflow-hidden bg-background py-24 md:py-32"
      id="faq"
      aria-label="Perguntas Frequentes"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/3 blur-3xl" />

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
            Tire suas dúvidas
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl"
          >
            Perguntas{" "}
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              frequentes
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg leading-relaxed text-muted-foreground"
          >
            Tire suas dúvidas sobre nosso processo e serviços.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <FaqAccordion items={faqItems} allowMultiple={false} />
        </motion.div>
      </div>
    </section>
  );
}

export default Faq;
