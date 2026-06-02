"use client";

import { useRef, useState, type FormEvent, type ChangeEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { whatsappLink } from "@/lib/whatsapp";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { trackEvent } from "@/lib/analytics/trackEvent";
import { AnalyticsLabel, AnalyticsAction, AnalyticsCategory } from "@/lib/analytics/types";
import { Button } from "@/components/ui/button";
import { FaRocket, FaArrowRight } from "react-icons/fa";
import { formatPhone } from "@/lib/phone-mask";

const CTA_MESSAGE =
  "Olá! Vim pelo site da FullSeek e quero dar o próximo passo. Vamos conversar?";

export default function Cta() {
  const [formSent, setFormSent] = useState(false);
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);
  const [phoneValue, setPhoneValue] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    setFormLoading(true);
    setFormError("");

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Erro ao enviar");

      trackEvent({ action: AnalyticsAction.SUBMIT_FORM, category: AnalyticsCategory.FORM, label: AnalyticsLabel.HOME_CTA });

      setFormSent(true);
      setPhoneValue("");
      form.reset();
      setTimeout(() => setFormSent(false), 4000);
    } catch (err) {
      setFormError(err instanceof Error ? err.message : "Erro ao enviar");
      setTimeout(() => setFormError(""), 6000);
    } finally {
      setFormLoading(false);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-background py-16 md:py-32"
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

        {/* Contact form */}
        <motion.div
          variants={fadeUp}
          className="mx-auto mt-16 max-w-lg"
        >
          <div className="mb-6 flex items-center gap-4">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-medium uppercase tracking-wider text-white/30">
              Ou prefere enviar uma mensagem
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <form
            ref={formRef}
            onSubmit={handleFormSubmit}
            className="space-y-4 text-left"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cta-name" className="sr-only">Nome</label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Seu nome"
                  className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
              <div>
                <label htmlFor="cta-email" className="sr-only">Email</label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Seu email"
                  className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
                />
              </div>
            </div>
            <div>
              <label htmlFor="cta-phone" className="sr-only">Telefone</label>
              <input
                id="cta-phone"
                name="phone"
                type="tel"
                required
                placeholder="(31) 99999-9999"
                value={phoneValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setPhoneValue(formatPhone(e.target.value))}
                className="w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
              />
            </div>
            <div>
              <label htmlFor="cta-message" className="sr-only">Mensagem</label>
              <textarea
                id="cta-message"
                name="message"
                rows={3}
                placeholder="Conte um pouco sobre seu projeto (opcional)"
                className="w-full resize-none rounded-xl border border-white/10 bg-card px-4 py-3 text-sm text-white placeholder:text-white/30 transition focus:border-primary/50 focus:outline-none focus:ring-1 focus:ring-primary/30"
              />
            </div>
            <button
              type="submit"
              disabled={formLoading}
              className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {formLoading ? "Enviando..." : formSent ? "Enviado ✓" : formError ? "Erro ao enviar" : "Solicitar orçamento"}
            </button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}
