"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { whatsappLink } from "@/lib/whatsapp";
import { scrollToSection } from "@/lib/utils";
import { trackWhatsApp } from "@/lib/analytics/trackWhatsapp";
import { AnalyticsLabel } from "@/lib/analytics/types";

const shortcuts = [
  { id: "hero", label: "Home" },
  { id: "servicos", label: "Serviços" },
  { id: "como-funciona", label: "Como Funciona" },
  { id: "faq", label: "FAQ" },
  { id: "cta", label: "Contato" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black/90">
      {/* Background glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-20 md:pb-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" aria-label="Fullseek" className="inline-block">
              <Image
                src="/logo.webp"
                alt="Fullseek"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Criamos sites que trabalham pelo seu negócio, gerando clientes e
              oportunidades todos os dias.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href={whatsappLink("Olá! Vim pelo site da Fullseek.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => trackWhatsApp(AnalyticsLabel.FOOTER_WHATSAPP)}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition hover:bg-primary/20 hover:text-primary"
              >
                <FaWhatsapp className="text-lg" />
              </Link>
              <Link
                href="https://www.instagram.com/full.seek/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition hover:bg-primary/20 hover:text-primary"
              >
                <FaInstagram className="text-lg" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/fullseek/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-white/60 transition hover:bg-primary/20 hover:text-primary"
              >
                <FaLinkedin className="text-lg" />
              </Link>
            </div>
          </div>

          {/* Shortcuts */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Atalhos
            </h3>
            <ul className="mt-4 space-y-3">
              {shortcuts.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="cursor-pointer text-sm text-white/50 transition hover:text-primary"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Contato
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href={whatsappLink("Olá! Vim pelo site da FullSeek.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsApp(AnalyticsLabel.FOOTER_WHATSAPP)}
                  className="flex items-start gap-3 text-sm text-white/50 transition hover:text-primary"
                >
                  <FaWhatsapp className="mt-0.5 shrink-0 text-base" />
                  <span>(31) 99078-5891</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contato@fullseek.com.br"
                  className="flex items-start gap-3 text-sm text-white/50 transition hover:text-primary"
                >
                  <FaEnvelope className="mt-0.5 shrink-0 text-base" />
                  <span>contato@fullseek.com.br</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Fullseek. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <Link
              href="/politica-de-privacidade"
              className="text-white/40 transition hover:text-primary"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="text-white/40 transition hover:text-primary"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
